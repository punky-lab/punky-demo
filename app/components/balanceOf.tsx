"use client";

import { useAccount, useReadContract } from "wagmi";
import { totalTrait } from '../lib/trait';
import wagmiEthConfig from '../api/eth';

export default function BalanceInfo({ traitId }: { traitId: number }) {
  if (traitId < 0 || traitId >= totalTrait) {
    return;
  }
  const account = useAccount();
  const { data, error } = useReadContract({
    ...wagmiEthConfig,
    functionName: "balanceOf",
    args: [account.address, traitId],
  });
  if (error) {
    console.log(error);
  }
  return <span>balance: {`${data}`}</span>;
}
