import React from "react";

export default function InlineLink({ href, children, className = "", underline = true }) {
  const isExternal = href.startsWith("http");
  const isEmail = href.startsWith("mailto:");
  const isPhone = href.startsWith("tel:");

  return (
    <a
      href={href}
      target={isExternal ? "_blank" : undefined}
      rel={isExternal ? "noopener noreferrer" : undefined}
    >
      {children}
    </a>
  );
}

