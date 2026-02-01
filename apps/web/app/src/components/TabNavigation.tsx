import { Plus, Settings } from "lucide-react";
import Tab from "./Tab";
import { i18n } from "shared";
import { Tab as TabType } from "@/types/ui/category";

export default function TabNavigation(
  pr: Readonly<{
    tabs: TabType[];
  }>,
) {
  return (
    <div className="bg-white rounded-2xl shadow-lg p-6 mb-6 relative">
      <div className="flex items-center gap-2 overflow-x-auto pb-2 pr-14">
        {pr.tabs.map((tab) => (
          <Tab key={tab.id} label={tab.name} isActive={tab.isActive} />
        ))}
        <button
          type="button"
          className="group relative flex items-center justify-center w-10 h-10 shrink-0 bg-gray-100 text-gray-500 rounded-lg hover:bg-gray-200 hover:text-gray-700 transition-colors duration-200"
          title={i18n.t("schedule.addScheduleGroup")}
        >
          <Plus size={20} />
        </button>
      </div>

      <button
        type="button"
        className="absolute bottom-1 right-4 flex items-center justify-center w-10 h-10 bg-gray-100 text-gray-500 rounded-lg hover:bg-gray-200 hover:text-gray-700 transition-colors duration-200 shadow-sm"
        title={i18n.t("schedule.settings")}
      >
        <Settings size={20} />
      </button>
    </div>
  );
}
