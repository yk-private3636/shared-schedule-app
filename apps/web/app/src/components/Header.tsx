import { useAuth0 } from "@auth0/auth0-react";
import { Bell, LogOut, UserCircle } from "lucide-react";
import { i18n } from "shared";
import { useAuthStore } from "@/stores/authStore";
import Tooltip from "./Tooltip";

export default function Header() {
  const { user, logout } = useAuth0();
  const authStore = useAuthStore();

  async function handleLogout() {
    await logout();
    authStore.setStatus("UNAUTHENTICATED");
  }

  return (
    <header className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-bold text-gray-900">
            {i18n.t("appTitle")}
          </h1>
          <div className="flex items-center gap-4">
            {/* 通知アイコン */}
            <button
              type="button"
              className="relative p-2 text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-full transition-colors duration-200"
            >
              <Bell size={24} />
              <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full" />
            </button>

            {/* ユーザーアイコン(ユーザー設定) */}
            <button
              type="button"
              className="relative group cursor-pointer p-2 hover:bg-blue-50 rounded-full transition-colors duration-200"
            >
              {user?.picture ? (
                <img
                  src={user.picture}
                  alt="User"
                  className="w-6 h-6 rounded-full"
                />
              ) : (
                <UserCircle
                  size={24}
                  className="text-gray-600 hover:text-blue-600"
                />
              )}
              {/* ツールチップ */}
              <Tooltip text={i18n.t("auth.settings")} />
            </button>

            {/* ログアウトアイコン */}
            <button
              type="button"
              className="relative group cursor-pointer p-2 text-gray-600 hover:text-red-600 hover:bg-red-50 rounded-full transition-colors duration-200"
              onClick={handleLogout}
            >
              <LogOut size={24} />
              {/* ツールチップ */}
              <Tooltip text={i18n.t("auth.logout")} />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
