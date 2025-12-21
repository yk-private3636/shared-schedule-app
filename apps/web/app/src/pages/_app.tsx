import { useAuthStore } from "@/stores/useAuthStore";
import "@/styles/globals.css";
import { Auth0Provider } from "@auth0/auth0-react";
import type { AppProps } from "next/app";
import { useRouter } from "next/router";
import { useEffect } from "react";

export default function App({ Component, pageProps }: AppProps) {
  const authStore = useAuthStore();
  const router = useRouter();
  const publicPaths = ["/", "/oauth/callback"];

  useEffect(() => {
    if (
      authStore.isAuthenticated === false &&
      !publicPaths.includes(router.pathname)
    ) {
      router.push("/");
    }
  }, [authStore, router]);

  return (
    <Auth0Provider
      domain={process.env.NEXT_PUBLIC_AUTH0_DOMAIN ?? ""}
      clientId={process.env.NEXT_PUBLIC_AUTH0_CLIENT_ID ?? ""}
      authorizationParams={{
        redirect_uri: process.env.NEXT_PUBLIC_AUTH0_CALLBACK_URI ?? "",
        audience: process.env.NEXT_PUBLIC_AUTH0_IDENTIFIER_AUD ?? "",
      }}
    >
      <Component {...pageProps} />
    </Auth0Provider>
  );
}
