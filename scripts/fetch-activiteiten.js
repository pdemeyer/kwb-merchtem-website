// fetch-calendar.js
require("dotenv").config();

const fs = require("fs");
const path = require("path");
const ical = require("node-ical");
const axios = require("axios");
const cheerio = require("cheerio");

const fetch = require("node-fetch");
const { format } = require("date-fns");

const calendarUrl = "https://outlook.office365.com/owa/calendar/5e9a448f82ee4500ad657dc4a5ac25dd@kwbmerchtem.be/b413005362a74f2eae86a97f9922d00c5521457340468517363/calendar.ics"; // Replace with your actual link
const GRAPH_TOKEN = process.env.GRAPH_TOKEN; // Ensure you have set this environment variable

function sanitizeFilename(name) {
  return name.replace(/[^a-z0-9\-]/gi, "-").toLowerCase();
}

function formatDate(date) {
  return date.toISOString();
}

function formatDateOnly(date) {
  return format(date, "yyyy-MM-dd");
}

function formatYearOnly(date) {
  return format(date, "yyyy");
}

function formatMonthOnly(date) {
  return format(date, "MM");
}

function formatTimeOnly(date) {
  return format(date, "HH:MM");
}
function containsCID(description) {
  return description && description.includes("[cid:");
}

async function fetchGraphEventByUID(uid) {
  const url = `https://graph.microsoft.com/v1.0/me/calendar/events?$filter=iCalUId eq '${uid}'`;
  const res = await axios.get(url, {
    headers: { Authorization: GRAPH_TOKEN },
  });
  return res.data.value?.[0];
}

async function downloadAttachment(eventId, attachmentId, filename) {
  const url = `https://graph.microsoft.com/v1.0/me/calendar/events/${eventId}/attachments/${attachmentId}/$value`;
  const res = await axios.get(url, {
    headers: { Authorization: GRAPH_TOKEN },
    responseType: "arraybuffer",
  });
  fs.writeFileSync(filename, res.data);
}

async function fetchAndSaveEventsAsMarkdown() {
  console.log("Fetching calendar...");
  const response = await fetch(calendarUrl);
  const icsText = await response.text();

  console.log("Parsing calendar...");
  const events = ical.parseICS(icsText);
  
//console.log("icsText: ", events);
console.log("TOKEN", GRAPH_TOKEN);

  Object.values(events).forEach((event) => {

    if (!event.start || !event.end || !event.summary) {
        return

            }
    //console.log("Event: ", event);

    //console.log(`Processing event: ${event.summary} starting ${formatDate(event.start)} on ${event.end}`);

    /*
    if (event.type === "VEVENT" && event.summary === "Padel") {
      console.log("Event: ", event);

    }
    else
      return;
    */

    const year = formatYearOnly(event.start);
    const month = formatMonthOnly(event.start);    
    const outputDir = path.join(__dirname, "..", "content", "activiteiten", year, month);
    if (!fs.existsSync(outputDir)) fs.mkdirSync(outputDir, { recursive: true });

    if (event.type === "VEVENT") {
      //console.log("Attach: ", event.attach); // kan een URL of base64 zijn


      const title = event.summary || "Untitled Event";

      const dateOnly = formatDateOnly(event.start);
      const timeOnly = formatTimeOnly(event.start);
      const filename = `${dateOnly}-${sanitizeFilename(title)}.md`;
      const filePath = path.join(outputDir, filename);

      let description = event.description || "";

      /*
      if (containsCID(description)) {
        console.log(`Event ${title} contains CID references in description: ${event.uid}`);
      }
      */

      // If description contains [cid:], fetch full event details from Graph API  
      if (containsCID(description) && event.uid && GRAPH_TOKEN) {
        console.log(`Fetching full details for event UID: ${event.uid}`);
        const graphEvent = fetchGraphEventByUID(event.uid);
        if (!graphEvent) {
          console.warn(`Geen Graph-event gevonden voor UID: ${event.uid}`);
          return;
        }

        const html = graphEvent.body?.content || "";
        const $ = cheerio.load(html);
        const attachments = graphEvent.attachments || [];
        let markdown = `# ${title}\n\n`;

        $("img").each((i, el) => {
          const cid = $(el).attr("src")?.replace("cid:", "");
          const attachment = attachments.find((a) => a.contentId === cid);
          if (attachment) {
           const ext = attachment.name?.split(".").pop() || "png";
           const filename = `${sanitizeFilename(summary)}_img_${i}.${ext}`;
           const filepath = path.join(OUTPUT_DIR, filename);
           downloadAttachment(graphEvent.id, attachment.id, filepath);
           markdown += `![Afbeelding ${i}](./${filename})\n\n`;
          }
        
          const textOnly = $.text();
          markdown += `\n${textOnly}`;
        });

        description = `${markdown}`;
      }

      const markdownContent = `---
title: "${title}"
date: "${dateOnly}"
time: "${timeOnly}"
slug: "${dateOnly}-${sanitizeFilename(title)}"
pagetype: "activiteiten"
location: "${event.location || ''}"
---

${description || "_No description provided._"}
`;

      fs.writeFileSync(filePath, markdownContent);
      console.log(`Saved: ${filePath}`);
    }
  });

  console.log("All events saved as Markdown.");
}

fetchAndSaveEventsAsMarkdown();