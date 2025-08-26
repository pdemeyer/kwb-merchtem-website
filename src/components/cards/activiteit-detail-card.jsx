import React from "react";

import { Typography, Card } from "@material-tailwind/react";
import featuredImage from "../../images/affiche_kermis_2025.jpeg";

export default function ActiviteitDetail({ title, date, html }) {
  return (
    <section className="w-full bg-white py-16 px-6">
      <div className="max-w-3xl mx-auto">
        {/* Featured Image */}

        {/* Title */}
        <Typography variant="h3" color="blue-gray" className="mb-4">
          {title}
        </Typography>

        {/* Metadata */}
        <Typography className="text-sm text-gray-500 mb-8">
          Door <span className="font-medium text-gray-700">KWB Merchtem</span> · {date}
        </Typography>
        
        <Card className="overflow-hidden rounded-xl mb-8 shadow-md">
          <img src={featuredImage} alt="Featured" className="w-full h-auto object-cover" />
        </Card>

        {/* Content */}
        <div className="space-y-6 text-gray-800 leading-relaxed" dangerouslySetInnerHTML={{ __html: html }}>
        </div>
      </div>
    </section>
  );
}
