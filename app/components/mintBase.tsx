"use client";

import { Button } from "@nextui-org/react";
import { useWriteContract } from "wagmi";
import wagmiEthConfig from "../api/eth";
import { totalTrait, TraitOwned } from "../lib/trait";
import { getOwnedState, setOwnedState } from "../api/localdata";

export function MintButton({
  title,
  traitId,
  onClick,
}: {
  title: string;
  traitId: number;
  onClick?: () => void;
}) {
  const { writeContract } = useWriteContract();
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

  return <Button onClick={mint}>{title}</Button>;
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
    title='Mint'
    onClick={() => {
      const state = getOwnedState();
      if (!state) {
        console.error("state not initialized");
        return;
      }
      if (!state.get(traitId)) {
        state.set(traitId, true);
      }
    }} />
  )
}
