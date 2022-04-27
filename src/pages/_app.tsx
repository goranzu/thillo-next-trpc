import "../styles/globals.css";

import { withTRPC } from "@trpc/next";
import { AppType } from "next/dist/shared/lib/utils";
import superjson from "superjson";
import type { AppRouter } from "./api/trpc/[trpc]";

const MyApp: AppType = ({ Component, pageProps }) => {
  return <Component {...pageProps} />;
};

export default withTRPC<AppRouter>({
  config({ ctx }) {
    const url = process.env.VERCEL_URL
      ? `https://${process.env.VERCEL_URL}/api/trpc`
      : `http://localhost:3000/api/trpc`;

    return {
      url,
      //   queryClientConfig: {
      //     defaultOptions: { queries: { staleTime: 60 } },
      //   },
      transformer: superjson,
    };
  },
  ssr: false,
})(MyApp);
