import * as React from "react";

export default function SplitImageSection({contentLeft, contentRight, linkLeft, linkRight, linkText, imageUrl}) {
  return (
    <section className="w-full py-16 px-6">
      <div className="max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
        {/* Left Text */}
        <div className="text-center md:text-left">
          {contentLeft}
          </div>

        {/* Center Image */}
        <div className="flex justify-center">
          <img
            src={imageUrl}
            alt="Agile visual"
            className="h-64 w-64 object-cover rounded-full shadow-md"
          />
        </div>

        {/* Right Text */}
        <div className="text-center md:text-right">
          {contentRight}
        </div>
      </div>
    </section>
  );
}
