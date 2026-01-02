import { useAuth0 } from "@auth0/auth0-react";
import { Briefcase, Calendar, Heart, Lock, Share2, Users } from "lucide-react";
import { i18n } from "shared";
import Header from "@/components/Header";
import { useAuthStore } from "@/stores/authStore";

export default function Schedules() {
  const authStore = useAuthStore();
  const { user, logout } = useAuth0();

  async function handleLogout() {
    await logout();
    authStore.setStatus("UNAUTHENTICATED");
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {/* ヘッダー */}
      <Header
        title={i18n.t("appTitle")}
        pictureUrl={user?.picture}
        logoutClick={handleLogout}
      />

      {/* メインコンテンツ */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* タブナビゲーション */}
        <div className="bg-white rounded-2xl shadow-lg p-6 mb-6">
          <div className="flex items-center gap-2 overflow-x-auto pb-2">
            {/* 家族タブ */}
            <button
              type="button"
              className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg font-semibold shadow-md hover:bg-blue-700 transition-colors duration-200 whitespace-nowrap"
            >
              <Heart size={18} />
              家族
            </button>

            {/* 会社タブ */}
            <button
              type="button"
              className="flex items-center gap-2 px-4 py-2 bg-gray-100 text-gray-700 rounded-lg font-semibold hover:bg-gray-200 transition-colors duration-200 whitespace-nowrap"
            >
              <Briefcase size={18} />
              会社
            </button>

            {/* 友人タブ */}
            <button
              type="button"
              className="flex items-center gap-2 px-4 py-2 bg-gray-100 text-gray-700 rounded-lg font-semibold hover:bg-gray-200 transition-colors duration-200 whitespace-nowrap"
            >
              <Users size={18} />
              友人
            </button>

            {/* プライベートタブ */}
            <button
              type="button"
              className="flex items-center gap-2 px-4 py-2 bg-gray-100 text-gray-700 rounded-lg font-semibold hover:bg-gray-200 transition-colors duration-200 whitespace-nowrap"
            >
              <Lock size={18} />
              プライベート
            </button>
          </div>
        </div>

        {/* アクション＆カレンダーエリア */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {/* サイドバー（アクションボタン） */}
          <div className="lg:col-span-1 space-y-4">
            {/* 共有コード発行ボタン */}
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <button
                type="button"
                className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold py-3 px-4 rounded-lg transition-all duration-200 flex items-center justify-center gap-2 shadow-md hover:shadow-xl"
              >
                <Share2 size={20} />
                共有コード発行
              </button>
              <p className="text-xs text-gray-500 mt-2 text-center">
                スケジュールを共有するためのコードを発行
              </p>
            </div>

            {/* 共有ユーザー一覧 */}
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <h2 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
                <Users size={20} className="text-blue-600" />
                共有中のユーザー
              </h2>
              <div className="space-y-3">
                {/* プレースホルダー */}
                <div className="flex items-center gap-3 p-2 hover:bg-gray-50 rounded-lg transition-colors duration-200">
                  <div className="w-10 h-10 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full flex items-center justify-center text-white font-semibold">
                    A
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-semibold text-gray-900">
                      ユーザーA
                    </p>
                    <p className="text-xs text-gray-500">家族</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-2 hover:bg-gray-50 rounded-lg transition-colors duration-200">
                  <div className="w-10 h-10 bg-gradient-to-br from-purple-400 to-purple-600 rounded-full flex items-center justify-center text-white font-semibold">
                    B
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-semibold text-gray-900">
                      ユーザーB
                    </p>
                    <p className="text-xs text-gray-500">会社</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* カレンダーエリア（プレースホルダー） */}
          <div className="lg:col-span-3">
            <div className="bg-white rounded-2xl shadow-lg p-6 min-h-[600px]">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-bold text-gray-900 flex items-center gap-2">
                  <Calendar size={24} className="text-blue-600" />
                  スケジュール
                </h2>
                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    className="px-3 py-1 text-sm bg-gray-100 text-gray-700 rounded-md hover:bg-gray-200 transition-colors duration-200"
                  >
                    月
                  </button>
                  <button
                    type="button"
                    className="px-3 py-1 text-sm bg-gray-100 text-gray-700 rounded-md hover:bg-gray-200 transition-colors duration-200"
                  >
                    週
                  </button>
                  <button
                    type="button"
                    className="px-3 py-1 text-sm bg-gray-100 text-gray-700 rounded-md hover:bg-gray-200 transition-colors duration-200"
                  >
                    日
                  </button>
                </div>
              </div>

              {/* カレンダーのプレースホルダー */}
              <div className="flex items-center justify-center h-full min-h-[500px] text-gray-400">
                <div className="text-center">
                  <Calendar size={64} className="mx-auto mb-4 opacity-50" />
                  <p className="text-lg font-semibold">
                    カレンダーはまだ実装されていません
                  </p>
                  <p className="text-sm mt-2">
                    今後のアップデートをお待ちください
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
