import "../styles/globals.css";
import { Session } from "next-auth";
import { RecoilRoot } from "recoil";
import { SessionProvider } from "next-auth/react";
import type { AppProps } from "next/app";

export default function App({
  Component,
  pageProps,
}: AppProps<{ session: Session }>) {
  return (
    <SessionProvider session={pageProps.session}>
      <RecoilRoot>
        <Component {...pageProps} />
      </RecoilRoot>
    </SessionProvider>
  );
}
