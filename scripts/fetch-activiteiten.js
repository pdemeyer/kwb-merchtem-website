// fetch-calendar.js
const fs = require("fs");
const path = require("path");
const ical = require("node-ical");
const fetch = require("node-fetch");
const { format } = require("date-fns");

const calendarUrl = "https://outlook.office365.com/owa/calendar/5e9a448f82ee4500ad657dc4a5ac25dd@kwbmerchtem.be/b413005362a74f2eae86a97f9922d00c5521457340468517363/calendar.ics"; // Replace with your actual link

function sanitizeFilename(name) {
  return name.replace(/[^a-z0-9\-]/gi, "-").toLowerCase();
}

function formatDate(date) {
  return date.toISOString();
}

function formatDateOnly(date) {
  return format(date, "YYYY-MM-DD");
}

function formatYearOnly(date) {
  return format(date, "YYYY");
}

function formatMonthOnly(date) {
  return format(date, "MM");
}

function formatTimeOnly(date) {
  return format(date, "HH:MM");
}

async function fetchAndSaveEventsAsMarkdown() {
  console.log("Fetching calendar...");
  const response = await fetch(calendarUrl);
  const icsText = await response.text();

  console.log("Parsing calendar...");
  const events = ical.parseICS(icsText);
  
  Object.values(events).forEach((event) => {

    const year = formatYearOnly(new Date());
    const month = formatMonthOnly(new Date());    
    const outputDir = path.join(__dirname, "..", "src", "content", "activiteiten", year, month);
    if (!fs.existsSync(outputDir)) fs.mkdirSync(outputDir, { recursive: true });

    if (event.type === "VEVENT") {
      const title = event.summary || "Untitled Event";

      const dateOnly = formatDateOnly(event.start);
      const timeOnly = formatTimeOnly(event.start);
      const filename = `${dateOnly}-${sanitizeFilename(title)}.md`;
      const filePath = path.join(outputDir, filename);

      const markdownContent = `---
title: "${title}"
date: "${dateOnly}"
time: "${timeOnly}"
location: "${event.location || ''}"
---

${event.description || "_No description provided._"}
`;

      fs.writeFileSync(filePath, markdownContent);
      console.log(`Saved: ${filePath}`);
    }
  });

  console.log("All events saved as Markdown.");
}

fetchAndSaveEventsAsMarkdown();