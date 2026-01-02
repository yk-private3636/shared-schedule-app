import { useAuth0 } from "@auth0/auth0-react";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { i18n } from "shared";
import Button from "@/components/Button";
import ErrorIcon from "@/components/ErrorIcon";
import Loading from "@/components/Loading";
import { saveUser } from "@/helpers/gql/api/saveUser";
import { useAuthStore } from "@/stores/authStore";
import { useErrMsgStore } from "@/stores/errMsgStore";

export default function Callback() {
  const { getAccessTokenSilently } = useAuth0();
  const router = useRouter();
  const authStore = useAuthStore();
  const errMsgStore = useErrMsgStore();
  const [hasError, setHasError] = useState(false);

  // biome-ignore lint/correctness/useExhaustiveDependencies: 常に1回だけの実行を保証するため
  useEffect(() => {
    (async () => {
      try {
        if (authStore.status === "AUTHENTICATED") {
          router.push("/schedules");
          return;
        }

        const accessToken = await getAccessTokenSilently();

        await saveUser(accessToken);

        authStore.setStatus("AUTHENTICATED");

        router.push("/schedules");
      } catch (_err: unknown) {
        setHasError(true);
        errMsgStore.setValue({
          show: true,
          msg:
            i18n.t("error.general.somethingWentWrong") +
            i18n.t("error.general.tryAgainLater"),
        });
      }
    })();
  }, []);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      <div className="text-center space-y-6">
        <div className="space-y-2">
          {hasError ? (
            <div className="space-y-6">
              <div className="flex justify-center">
                <ErrorIcon />
              </div>

              <div className="flex flex-col sm:flex-row gap-3 justify-center pt-4">
                <Button
                  text={i18n.t("auth.retry")}
                  onClick={() => window.location.reload()}
                />
                <Button
                  text={i18n.t("auth.backToLogin")}
                  onClick={() => router.push("/")}
                  className="bg-gray-400 hover:bg-gray-500"
                />
              </div>
            </div>
          ) : (
            <>
              <h2 className="text-2xl font-semibold text-gray-800">
                {i18n.t("auth.settingUpAccount")}
              </h2>
              <p className="text-gray-600 mb-5">
                {i18n.t("auth.authenticationCompleted") +
                  i18n.t("auth.pleaseWait")}
              </p>
              <Loading />
            </>
          )}
        </div>
      </div>
    </div>
  );
}
