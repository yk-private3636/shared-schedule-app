import { X, XCircle } from "lucide-react";

export default function ErrorSnackbar(
  pr: Readonly<{
    isVisible: boolean;
    text: string;
    onClose: () => void;
  }>,
) {
  if (!pr.isVisible) {
    return null;
  }

  return (
    <div className="bg-red-500 text-white px-4 py-3 rounded-lg shadow-lg flex items-center gap-3">
      <XCircle className="w-5 h-5 flex-shrink-0" />
      <span className="flex-1">{pr.text}</span>
      <button
        type="button"
        className="hover:bg-white/20 rounded p-1 transition-colors"
        onClick={pr.onClose}
      >
        <X className="w-4 h-4" />
      </button>
    </div>
  );
}
