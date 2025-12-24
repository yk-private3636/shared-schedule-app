import ErrorSnackbar from "@/components/ErrorSnackbar";
import { useAuthStore } from "@/stores/authStore";
import { useErrMsgStore } from "@/stores/errMsgStore";
import "@/styles/globals.css";
import { Auth0Provider } from "@auth0/auth0-react";
import type { AppProps } from "next/app";
import { useRouter } from "next/router";
import { useEffect } from "react";

export default function App({ Component, pageProps }: AppProps) {
  const authStore = useAuthStore();
  const router = useRouter();
  const publicPaths = ["/", "/oauth/callback"];

  const errMsgStore = useErrMsgStore();

  useEffect(() => {
    if (
      authStore.isAuthenticated === false &&
      !publicPaths.includes(router.pathname)
    ) {
      router.push("/");
    }
  }, [authStore, router]);

  useEffect(() => {
    if (errMsgStore.value.show === false) {
      return;
    }

    /** 必要に応じてタイマー処理 */

    /** TODO: アクセストークンの有効期限切れハンドリング */
  }, [errMsgStore]);

  return (
    <Auth0Provider
      domain={process.env.NEXT_PUBLIC_AUTH0_DOMAIN ?? ""}
      clientId={process.env.NEXT_PUBLIC_AUTH0_CLIENT_ID ?? ""}
      authorizationParams={{
        redirect_uri: process.env.NEXT_PUBLIC_AUTH0_CALLBACK_URI ?? "",
        audience: process.env.NEXT_PUBLIC_AUTH0_IDENTIFIER_AUD ?? "",
      }}
    >
      <div className="fixed top-4 right-4 z-50">
        <ErrorSnackbar
          isVisible={errMsgStore.value.show}
          text={errMsgStore.value.msg}
          onClose={() => errMsgStore.setValue({ show: false, msg: "" })}
        />
      </div>
      <Component {...pageProps} />
    </Auth0Provider>
  );
}
