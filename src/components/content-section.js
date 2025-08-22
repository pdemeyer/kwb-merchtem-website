import * as React from 'react'

import { Typography, Card } from "@material-tailwind/react";

export default function ContentSection({title, imgUrls, children}) {
  return (
    <section className="w-full bg-gray-50 py-16 px-6">
      <div className="max-w-screen-xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
        {/* Left: Text Content */}
        <div>
          <Typography variant="h4" color="blue-gray" className="mb-2">
            {title}
          </Typography>
          {children}
        </div>

        {/* Right: Stacked Images */}
        <div className="flex flex-col gap-6">
          {imgUrls.map((src, index) => (
            <Card key={index} className="overflow-hidden rounded-xl shadow-md">
              <img src={src} alt={`Agile visual ${index + 1}`} className="w-full h-auto object-cover" />
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}