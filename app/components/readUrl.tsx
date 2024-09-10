"use client";

import { useReadContract } from "wagmi";
import wagmiEthConfig from '../api/eth';

export default function ReadUrl() {
  const result = useReadContract({
    ...wagmiEthConfig,
    functionName: "uri",
    args: ["0"],
  });
  console.log(result);
  return <p>{`${result.data}`}</p>;
}
