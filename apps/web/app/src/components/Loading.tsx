export default function Loading() {
  return (
    <div className="flex items-center justify-center min-h-screen from-slate-900 via-slate-800 to-slate-900">
      <div className="flex justify-center gap-2">
        <div className="w-3 h-3 bg-blue-600 rounded-full animate-bounce"></div>
        <div
          className="w-3 h-3 bg-blue-600 rounded-full animate-bounce"
          style={{ animationDelay: "0.1s" }}
        ></div>
        <div
          className="w-3 h-3 bg-blue-600 rounded-full animate-bounce"
          style={{ animationDelay: "0.2s" }}
        ></div>
      </div>
    </div>
  );
}
