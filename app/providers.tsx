"use client";

// nextui
import { NextUIProvider } from "@nextui-org/react";

// wallets
import { DynamicContextProvider } from "@dynamic-labs/sdk-react-core";
import { DynamicWagmiConnector } from "@dynamic-labs/wagmi-connector";
import { createConfig, WagmiProvider } from "wagmi";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { http } from "viem";
import { mainnet, confluxESpaceTestnet } from "viem/chains";

import { EthereumWalletConnectors } from "@dynamic-labs/ethereum";
import { SolanaWalletConnectors } from "@dynamic-labs/solana";
import { PropsWithChildren } from "react";


const config = createConfig({
  chains: [
    mainnet,
    // confluxESpaceTestnet
  ],
  multiInjectedProviderDiscovery: false,
  transports: {
    [mainnet.id]: http(),
    [confluxESpaceTestnet.id]: http(),
  },
});

const queryClient = new QueryClient();

export function Providers(props: PropsWithChildren) {
  return (
    <NextUIProvider>
      <DynamicContextProvider
        settings={{
          // Find your environment id at https://app.dynamic.xyz/dashboard/developer
          environmentId: "f0f2bb32-6435-40c3-8b73-768d1c6f577a",
          walletConnectors: [
            EthereumWalletConnectors,
            // SolanaWalletConnectors,
          ],
        }}
      >
        <WagmiProvider config={config}>
          <QueryClientProvider client={queryClient}>
            <DynamicWagmiConnector>{props.children}</DynamicWagmiConnector>
          </QueryClientProvider>
        </WagmiProvider>
      </DynamicContextProvider>
    </NextUIProvider>
  );
}
