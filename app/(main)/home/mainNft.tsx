"use client";

import Image from "next/image";
import punky from "../../assets/bags/狗狗形态1.svg";
import { NftTrait, TraitOwned } from "@/app/lib/trait";
import { useAccount } from "wagmi";
import { getOwnedState } from "@/app/api/localdata";
import { MintPunkyButton } from "@/app/components/mintBase";
import { useEffect, useState } from "react";
import { loadTrait } from "@/app/api/traits";
import { Spinner } from '@nextui-org/react';

export default function MainNft(props: { nfts: NftTrait[] }) {
  const account = useAccount();
  const [state, setState] = useState<TraitOwned | null>(null);
  const [pnkMeta, setPnkMeta] = useState<NftTrait | null>(null);

  useEffect(() => {
    setState(getOwnedState());
  }, []);
  useEffect(() => {
    loadTrait(0)
      .then((res) => {
        setPnkMeta(res);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  if (!account) {
    return <p>Login...</p>;
  }

  if (!state || !state.get(0)) {
    return <MintPunkyButton />;
  }

  if (!pnkMeta) {
    return <Spinner label="Loading" color="white" labelColor="foreground" />
  }

  return (
    <div className="h-64 w-64 relative">
      <Image src={pnkMeta.imageSrc} alt="" fill className="object-cover" />
      {props.nfts.map((item, index) => (
        <Image
          key={index}
          src={item["imageSrc"]}
          alt=""
          fill
          className="object-cover"
          style={{
            position: "absolute",
            top: 0,
            left: 0,
          }}
        />
      ))}
    </div>
  );
}
