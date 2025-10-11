import { I18n } from "i18n-js";
import { jaTranslation } from "@/shared/i18n/ja/translation";

const i18n = new I18n({
  ja: jaTranslation,
});

i18n.defaultLocale = "ja";
i18n.locale = "ja";

export default i18n;
