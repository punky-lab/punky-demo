"use client";

import { usePathname, useRouter } from "next/navigation";
import { PropsWithChildren, useEffect } from "react";
import { useAccount, useAccountEffect } from "wagmi";

export default function GlobalRedirectProvider(props: PropsWithChildren) {
  const router = useRouter();
  const pathname = usePathname();
  const account = useAccount();

  useAccountEffect({
    onConnect(data) {
      router.push("/home");
    },
    onDisconnect() {
      router.push("/");
    },
  });

  useEffect(() => {
    if (pathname !== "/") {
      if (account.status !== "connected") {
        router.push("/");
      }
    }
  }, [pathname]);

  return props.children;
}
