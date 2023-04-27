import { type AppType } from "next/app";
import { type Session } from "next-auth";
import { SessionProvider } from "next-auth/react";
import store from "store";
import { api } from "utils/api";
import Layout from "layouts/layout-1";

import "styles/globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import { Provider } from "react-redux";

const MyApp: AppType<{ session: Session | null }> = ({
  Component,
  pageProps: { session, ...pageProps },
}) => {
  return (
    <Provider store={store}>
      <ClerkProvider {...pageProps}>
        <SessionProvider session={session}>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </SessionProvider>
      </ClerkProvider>
    </Provider>
  );
};

export default api.withTRPC(MyApp);
