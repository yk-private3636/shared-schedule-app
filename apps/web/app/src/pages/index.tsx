import { useAuth0 } from "@auth0/auth0-react";
import { useRouter } from "next/router";
import { useEffect } from "react";
import Button from "@/components/Button";
import DividerWithText from "@/components/DividerWithText";
import GithubLogoButton from "@/components/GitHubLogoButton";
import GoogleLogoButton from "@/components/GoogleLogoButton";
import LinkUnderLine from "@/components/LinkUnderLine";
import MicrosoftLogoButton from "@/components/MicrosoftLogoButton";
import i18n from "@/i18n/i18n";

export default function Home() {
  const { isAuthenticated, loginWithRedirect } = useAuth0();
  const router = useRouter();

  useEffect(() => {
    if (isAuthenticated === false) {
      return;
    }

    router.push("/schedules");
  }, [isAuthenticated, router]);

  function loginEvent() {
    loginWithRedirect();
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <div className="bg-white rounded-2xl shadow-xl p-8 space-y-6">
          <div className="text-center space-y-2">
            <h1 className="text-2xl font-bold text-gray-900">
              {i18n.t("welcomeTo", { place: "TimeConnect" })}
            </h1>
            <p className="text-gray-600">{i18n.t("auth.safeLoginPrompt")}</p>
          </div>

          <div className="space-y-4">
            <Button text={i18n.t("auth.login")} onClick={loginEvent} />

            <DividerWithText text={i18n.t("auth.availableLoginMethods")} />

            <div className="grid grid-cols-3 gap-3">
              <GoogleLogoButton enableHoverEffect={false} />
              <MicrosoftLogoButton enableHoverEffect={false} />
              <GithubLogoButton enableHoverEffect={false} />
            </div>
          </div>

          <DividerWithText text={""} />

          <div className="flex items-center justify-center gap-2 text-sm text-gray-500">
            <span>{i18n.t("auth.auth0SecureLogin")}</span>
          </div>

          <p className="text-xs text-center text-gray-500">
            {i18n.t("auth.agreement.prefix")}
            <LinkUnderLine text={i18n.t("auth.agreement.terms")} href={"/"} />
            {i18n.t("auth.agreement.and")}
            <LinkUnderLine text={i18n.t("auth.agreement.privacy")} href={"/"} />
            {i18n.t("auth.agreement.suffix")}
          </p>
        </div>
      </div>
    </div>
  );
}
