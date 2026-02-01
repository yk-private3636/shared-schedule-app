import { Check, X } from "lucide-react";
import { i18n } from "shared";

export default function CategorySettingsModal() {
  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-md mx-4 overflow-hidden">
        {/* ヘッダー */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 px-6 py-4">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-bold text-white">
              {i18n.t("category.settings.title")}
            </h2>
            <button
              type="button"
              className="text-white/80 hover:text-white transition-colors"
            >
              <X size={24} />
            </button>
          </div>
          <p className="text-white/80 text-sm mt-1">
            {i18n.t("category.settings.description")}
          </p>
        </div>

        {/* カテゴリー一覧 */}
        <div className="p-6 max-h-[400px] overflow-y-auto">
          <div className="space-y-3">
            {/* アクティブなカテゴリー */}
            <button
              type="button"
              className="w-full flex items-center justify-between p-4 rounded-xl border-2 border-blue-500 bg-blue-50 transition-all duration-200"
            >
              <span className="font-medium text-blue-700">家族</span>
              <div className="w-6 h-6 rounded-full flex items-center justify-center bg-blue-500 text-white">
                <Check size={16} />
              </div>
            </button>

            <button
              type="button"
              className="w-full flex items-center justify-between p-4 rounded-xl border-2 border-blue-500 bg-blue-50 transition-all duration-200"
            >
              <span className="font-medium text-blue-700">会社</span>
              <div className="w-6 h-6 rounded-full flex items-center justify-center bg-blue-500 text-white">
                <Check size={16} />
              </div>
            </button>

            {/* 非アクティブなカテゴリー */}
            <button
              type="button"
              className="w-full flex items-center justify-between p-4 rounded-xl border-2 border-gray-200 bg-gray-50 hover:border-gray-300 transition-all duration-200"
            >
              <span className="font-medium text-gray-500">友人</span>
              <div className="w-6 h-6 rounded-full flex items-center justify-center bg-gray-200 text-gray-400">
                <Check size={16} />
              </div>
            </button>

            <button
              type="button"
              className="w-full flex items-center justify-between p-4 rounded-xl border-2 border-blue-500 bg-blue-50 transition-all duration-200"
            >
              <span className="font-medium text-blue-700">プライベート</span>
              <div className="w-6 h-6 rounded-full flex items-center justify-center bg-blue-500 text-white">
                <Check size={16} />
              </div>
            </button>

            <button
              type="button"
              className="w-full flex items-center justify-between p-4 rounded-xl border-2 border-gray-200 bg-gray-50 hover:border-gray-300 transition-all duration-200"
            >
              <span className="font-medium text-gray-500">趣味</span>
              <div className="w-6 h-6 rounded-full flex items-center justify-center bg-gray-200 text-gray-400">
                <Check size={16} />
              </div>
            </button>
          </div>
        </div>

        {/* フッター */}
        <div className="px-6 py-4 bg-gray-50 border-t border-gray-100">
          <div className="flex gap-3">
            <button
              type="button"
              className="flex-1 px-4 py-3 text-gray-700 bg-white border border-gray-300 rounded-xl font-medium hover:bg-gray-50 transition-colors duration-200"
            >
              {i18n.t("common.cancel")}
            </button>
            <button
              type="button"
              className="flex-1 px-4 py-3 text-white bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl font-medium hover:from-blue-700 hover:to-purple-700 transition-all duration-200 shadow-md"
            >
              {i18n.t("common.save")}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
