"use client";

import { getTraits } from "@/app/api/traits";
import NFTDisplay from "@/app/components/nftDisplay";
import { NftTrait } from "@/app/lib/trait";
import { useEffect, useState } from "react";

export default function Bag(props: {
  updateNfts: (newNfts: NftTrait[]) => void;
  nfts: NftTrait[];
}) {
  const [traits, setTraits] = useState<NftTrait[]>([]);
  useEffect(() => {
    getTraits()
      .then((res) => {
        setTraits(res);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);
  return (
    <div>
      <div className="flex flex-row flex-wrap items-center justify-center">
        {traits.map((item, index) => (
          <NFTDisplay
            key={index}
            buttonType="equip or sell"
            updateNfts={props.updateNfts}
            traitData={item}
            nfts={props.nfts}
          />
        ))}
      </div>
    </div>
  );
}
