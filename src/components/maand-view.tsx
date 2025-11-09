import { startOfMonth, endOfMonth, startOfWeek, endOfWeek, addDays, format, isSameMonth, isSameDay } from 'date-fns';
import React from 'react';

interface Props {
  events: {date:Date, slug:string; title: string}[];
  currentDate?: Date;
}

export function MonthView({ events = [], currentDate = new Date() }: Props) {

  const monthStart = startOfMonth(currentDate);
  const monthEnd = endOfMonth(monthStart);
  const startDate = startOfWeek(monthStart, { weekStartsOn: 1 });
  const endDate = endOfWeek(monthEnd, { weekStartsOn: 1 });

  const rows = [];
  let days = [];
  let day = startDate;

  while (day <= endDate) {
    for (let i = 0; i < 7; i++) {
      const dayEvents = events.filter(e => isSameDay(new Date(e.date), day));
      days.push(
        <div key={day.toLocaleString('nl-BE', { month: 'long', year: 'numeric' })} className={`border p-2 h-24 ${!isSameMonth(day, monthStart) ? 'text-gray-400' : ''}`}>
          <div className="text-sm font-bold">{format(day, 'd')}</div>
          {dayEvents.map((e, idx) => (
            <a href={`/activiteiten/${e.slug}`}> 
                <div key={idx} className="text-xs bg-blue-100 mt-1 px-1 rounded">
                {e.title}</div>
            </a>
          ))}
        </div>
      );
      day = addDays(day, 1);
    }
    rows.push(<div key={day.toLocaleString('nl-BE', { month: 'long', year: 'numeric' })} className="grid grid-cols-7">{days}</div>);
    days = [];
  }

  return (
    <div className="bg-white p-2 mt-2 mb-2 rounded-lg hover:shadow-lg w-full">
      <div className="text-xl font-semibold mb-2">{monthStart.toLocaleString('nl-BE', { month: 'long', year: 'numeric' })}</div>
      <div className="grid grid-cols-7 text-center font-medium mb-1">
        {['Ma', 'Di', 'Wo', 'Do', 'Vr', 'Za', 'Zo'].map(d => <div key={d}>{d}</div>)}
      </div>
      {rows}
    </div>
  );
}
