import { Bell, UserCircle } from "lucide-react";

export default function Header(
  pr: Readonly<{
    title: string;
  }>,
) {
  return (
    <header className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-bold text-gray-900">{pr.title}</h1>
          <div className="flex items-center gap-4">
            {/* 通知アイコン */}
            <button
              type="button"
              className="relative p-2 text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-full transition-colors duration-200"
            >
              <Bell size={24} />
              <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full" />
            </button>

            {/* ユーザー管理アイコン */}
            <button
              type="button"
              className="p-2 text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-full transition-colors duration-200"
            >
              <UserCircle size={24} />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
