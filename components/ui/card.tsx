"use client";

import React from "react";

export const Card = ({ children, className = "" }: any) => (
  <div className={`bg-white rounded-2xl shadow p-4 ${className}`}>{children}</div>
);

export const CardContent = ({ children, className = "" }: any) => (
  <div className={`p-4 ${className}`}>{children}</div>
);
