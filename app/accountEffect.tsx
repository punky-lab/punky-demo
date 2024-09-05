"use client";

import { usePathname, useRouter } from "next/navigation";
import { PropsWithChildren, useEffect, useState } from "react";
import { useAccount, useAccountEffect } from "wagmi";

export default function GlobalRedirectProvider(props: PropsWithChildren) {
  const router = useRouter();
  const pathname = usePathname();
  const account = useAccount();

  // redirect to home for the first login
  const [lastPath, setLastPath] = useState("/home");

  const goBack = () => {
    setLastPath(pathname);
    router.push("/");
  }

  const recoverPage = () => {
    router.push(lastPath);
  }

  useAccountEffect({
    onConnect(data) {
      recoverPage();
    },
    onDisconnect() {
      goBack();
    },
  });

  useEffect(() => {
    console.log(account.status);
    if (pathname !== "/") {
      if (account.status !== "connected") {
        goBack();
      }
    } else {
      if (account.status === "connected") {
        recoverPage();
      }
    }
  }, [pathname]);

  return props.children;
}
