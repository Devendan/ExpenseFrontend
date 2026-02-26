import React from "react";

export default function CategoryTag({ category }) {
  if (!category) return null;

  const categoryStyles = {
    Food: "bg-green-300 text-green-900",
    Travel: "bg-blue-300 text-blue-900",
    Shopping: "bg-purple-300 text-purple-900",
    Bills: "bg-yellow-300 text-yellow-900",
    Other: "bg-gray-300 text-gray-900",
  };

  return (
    <span
      className={`px-3 py-1 rounded-full text-xs font-medium 
      ${categoryStyles[category] || "bg-gray-200 text-gray-800"}`}
    >
      {category}
    </span>
  );
}
