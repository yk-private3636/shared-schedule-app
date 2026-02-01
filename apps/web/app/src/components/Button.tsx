import type { ReactNode } from "react";

export default function Button(
  pr: Readonly<{
    text: string;
    icon?: ReactNode;
    className?: string;
    onClick: () => void;
  }>,
) {
  return (
    <button
      type="button"
      onClick={pr.onClick}
      className={`w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold py-3 px-4 rounded-lg transition-all duration-200 flex items-center justify-center gap-2 shadow-md hover:shadow-xl cursor-pointer ${pr.className ?? ""}`}
    >
      {pr.icon}
      {pr.text}
    </button>
  );
}
