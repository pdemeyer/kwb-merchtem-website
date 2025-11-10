import * as React from "react";
import { useActiviteiten } from "../hooks/use-activiteiten";

import { parseISO, format } from 'date-fns';
import { isAfter, isBefore, startOfMonth, addMonths } from 'date-fns';
import { MonthView } from "./maand-view";
import LinkWithIcon from "./link-with-icon";

function groupByMonth(posts) {
  const map = new Map();

  posts.forEach(post => {
    const date = parseISO(post.node.frontmatter.date);
    const key = format(date, 'yyyy-MM');

    if (!map.has(key)) {
      map.set(key, []);
    }
    map.get(key).push({
      title: post.node.frontmatter.title,
      date: post.node.frontmatter.date,
      slug: post.node.frontmatter.slug,
    });
  });

  return Array.from(map.entries()).map(([month, items]) => ({ month, items })).sort((a, b) => (a.month > b.month ? 1 : -1)) ;
}

function renderEnkelDezeMaand(groupedData) {
  const today = new Date();
  const currentMonthKey = format(today, 'yyyy-MM');
  const currentMonthData = groupedData.find(g => g.month === currentMonthKey);
  if (currentMonthData) {
    const [year, monthNum] = currentMonthData.month.split('-');
    const currentDate = new Date(Number(year), Number(monthNum) - 1, 1);
    return (
      <div className="pb-6 pt-6 max-w-screen-xl mx-auto">
        <MonthView events={currentMonthData.items} currentDate={currentDate} />
        <LinkWithIcon text={`Toon heel werkjaar`} href={`/activiteiten/werkjaar#${monthNum}`} />
      </div>
    );
  }
  return <p>Er zijn geen activiteiten deze maand.</p>;
}

function renderAlleMaanden(groupedData) {
  return (
    <div className="pb-6 pt-6 max-w-screen-xl mx-auto">
      {groupedData.map(({ month, items }) => {
          const [year, monthNum] = month.split('-');
          const currentDate = new Date(Number(year), Number(monthNum) - 1, 1);

          return (
            <div key={month}>
              <MonthView events={items} currentDate={currentDate} />
            </div>
          );
        })}
    </div>
  );
}


export function getWorkYearMonths(today = new Date()) {
  const year = today.getFullYear();
  const septThisYear = new Date(year, 8, 1); // 1 september
  const septNextYear = new Date(year + 1, 8, 30); // 30 september volgend jaar

  // Als vandaag vóór september is, dan zit je nog in vorig werkjaar
  const start = isBefore(today, septThisYear)
    ? new Date(year - 1, 8, 1)
    : septThisYear;

  const end = new Date(start.getFullYear() + 1, 8, 30);

  if (!isAfter(today, start) || !isBefore(today, end)) {
    throw new Error('Vandaag valt buiten het werkjaar.');
  }

  const months = [];
  let current = startOfMonth(start);

  while (current <= end) {
    months.push({
      year: current.getFullYear(),
      month: current.getMonth() + 1, // 1-based
      label: current.toLocaleString('nl-BE', { month: 'long', year: 'numeric' }),
      date: current,
    });
    current = addMonths(current, 1);
  }

  return months;
}

export function filterGroupedActivitiesByWorkYear(groupedActivities, workYearMonths) {
  const validKeys = new Set(
    workYearMonths.map(({ year, month }) =>
      `${year}-${String(month).padStart(2, '0')}`
    )
  );

  return groupedActivities.filter(({ month }) => validKeys.has(month));
}



function renderHeelWerkjaar(groupedData) {
  const workYearMonths = getWorkYearMonths();
  const filtered = filterGroupedActivitiesByWorkYear(groupedData, workYearMonths);

  return (
    <div className="pb-6 pt-6 max-w-screen-xl mx-auto">
      {filtered.map(({ month, items }) => {
          const [year, monthNum] = month.split('-');
          const currentDate = new Date(Number(year), Number(monthNum) - 1, 1);

          return (
            <div key={month} id={monthNum}>
              <MonthView events={items} currentDate={currentDate} />
            </div>
          );
        })}
    </div>
  );
}


const ActiviteitenMaandCardView = ({toonEnkelDezeMaand = false, toonHeelDitWerkjaar = false}) => {
  const data = useActiviteiten();

  const groupedData = groupByMonth(data);

  if(toonEnkelDezeMaand) {
    return renderEnkelDezeMaand(groupedData);
  } else {
    if (toonHeelDitWerkjaar)
    { return renderHeelWerkjaar(groupedData)}
    else {
    return renderAlleMaanden(groupedData);
    }
  }
};

export default ActiviteitenMaandCardView;
