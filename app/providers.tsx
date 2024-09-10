"use client";

// nextui
import { NextUIProvider } from "@nextui-org/react";

// wallets
import { DynamicContextProvider } from "@dynamic-labs/sdk-react-core";
import { DynamicWagmiConnector } from "@dynamic-labs/wagmi-connector";
import { createConfig, WagmiProvider } from "wagmi";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { http } from "viem";
import { mainnet, confluxESpaceTestnet, sepolia } from "viem/chains";

import { EthereumWalletConnectors } from "@dynamic-labs/ethereum";
import { SolanaWalletConnectors } from "@dynamic-labs/solana";
import { PropsWithChildren } from "react";
import GlobalRedirectProvider from "./accountEffect";

// wagmi config
const config = createConfig({
  chains: [
    // mainnet,
    sepolia,
    // confluxESpaceTestnet
  ],
  multiInjectedProviderDiscovery: false,
  transports: {
    // [mainnet.id]: http(),
    // [confluxESpaceTestnet.id]: http(),
    [sepolia.id]: http(),
  },
});

// dynamic settings
const settings = {
  // Find your environment id at https://app.dynamic.xyz/dashboard/developer
  environmentId: "f0f2bb32-6435-40c3-8b73-768d1c6f577a",
  appName: "Punky",
  walletConnectors: [
    EthereumWalletConnectors,
    // SolanaWalletConnectors,
  ],
};

const queryClient = new QueryClient();

export function Providers(props: PropsWithChildren) {
  return (
    <NextUIProvider>
      <DynamicContextProvider theme={"dark"} settings={settings}>
        <WagmiProvider config={config}>
          <GlobalRedirectProvider>
            <QueryClientProvider client={queryClient}>
              <DynamicWagmiConnector>{props.children}</DynamicWagmiConnector>
            </QueryClientProvider>
          </GlobalRedirectProvider>
        </WagmiProvider>
      </DynamicContextProvider>
    </NextUIProvider>
  );
}
