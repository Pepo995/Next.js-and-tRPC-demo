import { type AppType } from "next/app";
import { type Session } from "next-auth";
import { SessionProvider } from "next-auth/react";

import { api } from "demo/utils/api";

import "demo/styles/globals.css";
import { ClerkProvider } from "@clerk/nextjs";

const MyApp: AppType<{ session: Session | null }> = ({
  Component,
  pageProps: { session, ...pageProps },
}) => {
  return (
    <ClerkProvider {...pageProps}>
      {/* <SessionProvider session={session}> */}
      <Component {...pageProps} />
      {/* </SessionProvider> */}
    </ClerkProvider>
  );
};

export default api.withTRPC(MyApp);
