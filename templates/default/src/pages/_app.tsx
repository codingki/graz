import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import { configureGraz, GrazProvider, mainnetChains } from "graz";
import type { AppProps } from "next/app";
import { Layout } from "src/ui/layout";

const theme = extendTheme();

configureGraz({
  defaultChain: mainnetChains.cosmoshub,
});

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <GrazProvider
      grazOptions={{
        walletConnect: {
          options: {
            projectId: process.env.NEXT_PUBLIC_WALLETCONNECT_PROJECT_ID,
          },
        },
      }}
    >
      <ChakraProvider resetCSS theme={theme}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ChakraProvider>
    </GrazProvider>
  );
};

export default MyApp;
