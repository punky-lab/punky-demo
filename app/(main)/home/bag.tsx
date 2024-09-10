"use client";

import { getTraits } from "@/app/api/traits";
import NFTDisplay from "@/app/components/nftDisplay";
import { NftTrait } from "@/app/lib/trait";

export default async function Bag(props: {
  updateNfts: (newNfts: NftTrait[]) => void;
  nfts: NftTrait[];
}) {
  const traits = await getTraits("0x123456");
  // props.updateNfts(traits);
  return (
    <div>
      <div className="flex flex-row flex-wrap">
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
