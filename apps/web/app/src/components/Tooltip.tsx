export default function Tooltip(
  pr: Readonly<{
    text: string;
  }>,
) {
  return (
    <div className="absolute right-0 top-full mt-2 px-3 py-2 bg-gray-800 text-white text-sm rounded-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 whitespace-nowrap pointer-events-none z-50">
      {pr.text}
      <div className="absolute right-4 -top-1 w-2 h-2 bg-gray-800 rotate-45" />
    </div>
  );
}
