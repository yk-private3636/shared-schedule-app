export default function Button(
  pr: Readonly<{
    text: string;
    className?: string;
    onClick: () => void;
  }>,
) {
  return (
    <button
      type="button"
      onClick={pr.onClick}
      className={`w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg transition-colors duration-200 flex items-center justify-center gap-2 shadow-md hover:shadow-lg cursor-pointer ${pr.className ?? ""}`}
    >
      {pr.text}
    </button>
  );
}
