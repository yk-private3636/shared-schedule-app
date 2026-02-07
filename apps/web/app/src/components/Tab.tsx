import React from "react";

export default function Tab(
  pr: Readonly<{
    // icon: React.ReactNode;
    label: string;
    isActive: boolean;
    onClick?: () => void;
  }>,
) {
  return (
    <button
      type="button"
      className={`${pr.isActive ? "bg-blue-600 text-white hover:bg-blue-700" : "bg-gray-100 text-gray-700 hover:bg-gray-200 hover:text-gray-700"} flex items-center gap-2 px-4 py-2 rounded-lg font-semibold shadow-md transition-colors duration-200 whitespace-nowrap cursor-pointer`}
      onClick={pr.onClick}
    >
      {pr.label}
    </button>
  );
}
