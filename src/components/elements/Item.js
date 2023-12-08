import React from "react";

export default function Item({ className, children, onClick, style }) {
  return (
    <li className={className} style={style} onClick={onClick}>
      {children}
    </li>
  );
}
