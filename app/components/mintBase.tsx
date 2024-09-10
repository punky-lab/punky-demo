"use client";

import { Button } from "@nextui-org/react";
import { useWaitForTransactionReceipt, useWriteContract } from "wagmi";
import wagmiEthConfig from "../api/eth";
import { totalTrait, TraitOwned } from "../lib/trait";
import { getOwnedState, setOwnedState } from "../api/localdata";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

export function MintButton({
  title,
  traitId,
  onClick,
}: {
  title: string;
  traitId: number;
  onClick?: () => void;
}) {
  const { writeContract, isPending, data: hash } = useWriteContract();
  const { isLoading: isConfirming, isSuccess: isConfirmed } =
    useWaitForTransactionReceipt({
      hash,
    });
  const router = useRouter();

  useEffect(() => {
    if (isConfirmed) router.refresh();
  }, [isConfirmed]);

  if (traitId < 0 || traitId >= totalTrait) {
    return <Button disabled>Invalid id {traitId}</Button>;
  }

  const mint = () => {
    if (onClick) onClick();
    writeContract({
      ...wagmiEthConfig,
      functionName: "mintTrait",
      args: [BigInt(traitId)],
    });
  };

  const btn = (
    <Button disabled={isPending || isConfirming} onClick={mint}>
      {isPending || isConfirming ? "Loading..." : title}
    </Button>
  );

  return (
    <div className="flex flex-col items-center justify-center">
      {isConfirming && <div>Waiting for confirmation...</div>}
      {isConfirmed ? <div>Transaction confirmed.</div> : btn}
    </div>
  );
}

export function MintPunkyButton() {
  return (
    <MintButton
      traitId={0}
      title="Mint Punky NOW"
      onClick={() => {
        setOwnedState(new Map([[0, true]]) as TraitOwned);
      }}
    />
  );
}

export function MintTraitButton({ traitId }: { traitId: number }) {
  return (
    <MintButton
      traitId={traitId}
      title="Mint"
      onClick={() => {
        const state = getOwnedState();
        if (!state) {
          console.error("state not initialized");
          return;
        }
        if (!state.get(traitId)) {
          state.set(traitId, true);
        }
      }}
    />
  );
}
