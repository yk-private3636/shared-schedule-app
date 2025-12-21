import { useAuth0 } from "@auth0/auth0-react";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { i18n } from "shared";
import Loading from "@/components/Loading";
import { saveUser } from "@/helpers/gql/api/saveUser";

export default function Callback() {
  const { getAccessTokenSilently } = useAuth0();
  const router = useRouter();

  useEffect(() => {
    (async () => {
      try {
        const accessToken = await getAccessTokenSilently();

        await saveUser(accessToken);

        router.push("/schedules");
      } catch (_error) {}
    })();
  }, [getAccessTokenSilently, router]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      <div className="text-center space-y-6">
        <div className="space-y-2">
          <h2 className="text-2xl font-semibold text-gray-800">
            {i18n.t("auth.settingUpAccount")}
          </h2>
          <p className="text-gray-600">
            {i18n.t("auth.authenticationCompleted") + i18n.t("auth.pleaseWait")}
          </p>
        </div>
        <Loading />
      </div>
    </div>
  );
}
