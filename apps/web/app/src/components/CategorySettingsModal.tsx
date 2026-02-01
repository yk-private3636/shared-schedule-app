import { Check, X } from "lucide-react";
import { i18n } from "shared";
import Button from "@/components/Button";
import { CategoryItem } from "@/types/ui/category";

export default function CategorySettingsModal(
  pr: Readonly<{
    items: CategoryItem[];
    isOpen: boolean;
    isInitialSetup: boolean;
    onSelect?: (categoryId: string, status: CategoryItem["status"]) => void;
    onClose: () => void;
    onCancel?: () => void;
  }>,
) {
  if (!pr.isOpen) return null;
  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-md mx-4 overflow-hidden">
        {/* ヘッダー */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 px-6 py-4">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-bold text-white">
              {i18n.t("category.settings.title")}
            </h2>
            {pr.isInitialSetup ? null : (
              <button
                type="button"
                className="text-white/80 hover:text-white transition-colors cursor-pointer"
                onClick={pr.onClose}
              >
                <X size={24} />
              </button>
            )}
          </div>
          <p className="text-white/80 text-sm mt-1">
            {i18n.t("category.settings.description")}
          </p>
        </div>
        {/* カテゴリー一覧 */}
        <div className="p-6 max-h-[400px] overflow-y-auto">
          <div className="space-y-3">
            {pr.items.map((item) => (
              <button
                key={item.id}
                type="button"
                className={
                  `w-full flex items-center justify-between p-4 rounded-xl transition-all duration-200 cursor-pointer ` +
                  (item.status === "ACTIVE"
                    ? "border-2 border-blue-500 bg-blue-50"
                    : "border-2 border-gray-200 bg-gray-50 hover:border-gray-300")
                }
                onClick={() => pr.onSelect?.(item.id, item.status)}
              >
                <span
                  className={
                    `font-medium ` +
                    (item.status === "ACTIVE"
                      ? "text-blue-700"
                      : "text-gray-500")
                  }
                >
                  {item.name}
                </span>
                <div
                  className={
                    `w-6 h-6 rounded-full flex items-center justify-center ` +
                    (item.status === "ACTIVE"
                      ? "bg-blue-500 text-white"
                      : "bg-gray-200 text-gray-400")
                  }
                >
                  <Check size={16} />
                </div>
              </button>
            ))}
          </div>
        </div>
        {/* フッター */}
        <div className="px-6 py-4 bg-gray-50 border-t border-gray-100">
          <div className="flex gap-3">
            {pr.isInitialSetup ? null : (
              <Button
                text={i18n.t("common.cancel")}
                className="flex-1 rounded-xl !bg-none !bg-white !text-gray-700 border border-gray-300 !shadow-none hover:!bg-gray-50"
                onClick={pr.onCancel ?? pr.onClose}
              />
            )}
            <Button
              text={i18n.t("common.save")}
              className="flex-1 rounded-xl"
              onClick={() => {}}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
