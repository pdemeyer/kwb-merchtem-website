import React from "react";

function LinkWithIcon({text, href, className=""}) {
  return (
        <a href={href} className={`inline-flex items-center gap-2 text-blue-600 hover:underline ${className}`}>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5"> 
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
            </svg> 
            {text}
        </a>
      );
}

export default LinkWithIcon;
