"use client";

import { getAllTraits } from "@/app/api/traits";
import NFTDisplay from "@/app/components/nftDisplay";
import { NftTrait } from "@/app/lib/trait";
import { useEffect, useState } from "react";

export default async function TraitSales() {
  const [traits, setTraits] = useState<NftTrait[]>([]);
  useEffect(() => {
    getAllTraits().then((res) => {
      setTraits(res);
    });
  }, []);
  return (
    <div>
      <div className="flex flex-row flex-wrap">
        {traits.map((item, index) => (
          <NFTDisplay
            nfts={traits}
            updateNfts={() => {}}
            key={index}
            buttonType="equip or sell"
            traitData={item}
          />
        ))}
      </div>
    </div>
  );
}
