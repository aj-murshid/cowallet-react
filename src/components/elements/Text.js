import React from "react";

export default function Text({ as, style, children, className, onClick }) {
  const Component = as || "p";
  return (
    <Component onClick={onClick} className={className} style={style}>
      {children}
    </Component>
  );
}
