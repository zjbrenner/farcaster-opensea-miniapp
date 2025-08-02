"use client";

import React from "react";

export const Button = ({ asChild = false, children }: any) => {
  if (asChild && React.isValidElement(children)) {
    return React.cloneElement(children, {
      className: "inline-flex items-center px-4 py-2 bg-black text-white rounded hover:bg-gray-800 transition",
    });
  }

  return (
    <button className="inline-flex items-center px-4 py-2 bg-black text-white rounded hover:bg-gray-800 transition">
      {children}
    </button>
  );
};
