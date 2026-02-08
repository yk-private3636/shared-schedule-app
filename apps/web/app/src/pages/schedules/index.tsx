import { Calendar, Share2, Users } from "lucide-react";
import Header from "@/components/Header";
import TabNavigation from "@/components/TabNavigation";
import Button from "@/components/Button";
import { useEffect, useState } from "react";
import { getSchedulesPageQuery } from "@/helpers/gql/api/query/schedulesPage";
import { useAuth0 } from "@auth0/auth0-react";
import { CategoryItem, CategoryTab } from "@/types/ui/category";
import CategorySettingsModal from "@/components/CategorySettingsModal";
import { RelationshipCategoryStatus } from "@/types/graphql/graphql";
import { createCategories } from "@/helpers/gql/api/mutation/createCategory";

export default function Schedules() {
  const [isInitialSetup, setIsInitialSetup] = useState<boolean>(false);
  const [isCategorySettingModal, setIsCategorySettingModal] =
    useState<boolean>(false);
  const [initCategories, setInitCategories] = useState<CategoryItem[]>([]);
  const [categoryItems, setCategoryItems] = useState<CategoryItem[]>([]);
  const [tabs, setTabs] = useState<CategoryTab[]>([]);
  const { getAccessTokenSilently } = useAuth0();

  useEffect(() => {
    (async () => {
      try {
        const token = await getAccessTokenSilently();
        const data = await getSchedulesPageQuery(token);

        setIsInitialSetup(!data.categories.isCustomized);
        setIsCategorySettingModal(!data.categories.isCustomized);
        setInitCategories(
          data.categories.details.map((c) => ({
            id: c.id,
            name: c.name,
            status: c.status,
            kind: c.kind,
          })),
        );
        setCategoryItems(
          data.categories.details.map((c) => ({
            id: c.id,
            name: c.name,
            status: c.status,
            kind: c.kind,
          })),
        );
        setTabs(
          data.categories.details
            .filter((c) => c.status === RelationshipCategoryStatus.Active)
            .map((c, idx) => ({
              id: c.id,
              name: c.name,
              isActive: idx === 0,
            })),
        );
      } catch (err: unknown) {}
    })();
  }, []);

  function handleOpenCategorySettings() {
    setIsCategorySettingModal(true);
  }

  function handleCloseCategorySettings() {
    setIsCategorySettingModal(false);
    setCategoryItems(initCategories);
  }

  function handleSelectCategory(
    categoryId: string,
    status: CategoryItem["status"],
  ) {
    setCategoryItems((prevItems) => {
      return prevItems.map((item) => {
        if (item.id === categoryId) {
          const newStatus =
            status === "ACTIVE"
              ? RelationshipCategoryStatus.Inactive
              : RelationshipCategoryStatus.Active;
          return { ...item, status: newStatus };
        }
        return item;
      });
    });
  }

  async function handleSaveCategorySettings(selectedItems: CategoryItem[]) {
    try {
      const token = await getAccessTokenSilently();
      const res = await createCategories({ categories: selectedItems }, token);
      setInitCategories(res.createCategories.details);
      setTabs(
        res.createCategories.details
          .filter((c) => c.status === RelationshipCategoryStatus.Active)
          .map((c, idx) => ({
            id: c.id,
            name: c.name,
            isActive: idx === 0,
          })),
      );
      setIsCategorySettingModal(false);

      // TODO: 成功メッセージ表示(エラーメッセージと同じように)
    } catch (err: unknown) {}
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {/* ヘッダー */}
      <Header />

      {/* メインコンテンツ */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* カテゴリータブナビゲーション */}
        <TabNavigation
          tabs={tabs}
          onSettingsClick={handleOpenCategorySettings}
        />

        {/* カテゴリー設定モーダル */}
        <CategorySettingsModal
          isInitialSetup={isInitialSetup}
          isOpen={isCategorySettingModal}
          items={categoryItems}
          onSelect={handleSelectCategory}
          onClose={handleCloseCategorySettings}
          onCancel={handleCloseCategorySettings}
          onSave={handleSaveCategorySettings}
        />

        {/* アクション＆カレンダーエリア */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {/* サイドバー（アクションボタン） */}
          <div className="lg:col-span-1 space-y-4">
            {/* 共有コード発行ボタン */}
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <Button
                text="共有コード発行"
                icon={<Share2 size={20} />}
                onClick={() => {}}
              />
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
