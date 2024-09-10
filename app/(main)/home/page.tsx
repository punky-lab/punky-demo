"use client";

import { Button } from "@nextui-org/react";
import { useEffect, useState } from "react";
import SideBar from "./sidebar";
import MainNft from "./mainNft";
import { NftTrait, TraitEquipped } from "@/app/lib/trait";
import { getEquippedState, setEquippedState } from "@/app/api/localdata";
import { getTraits } from "@/app/api/traits";

export default function GamePage() {
  const initTraits: NftTrait[] = [];
  const [nfts, setNfts] = useState(initTraits);

  useEffect(() => {
    const equipped = getEquippedState();
    const idList: number[] = [];
    equipped?.forEach((v, k) => {
      if (v) idList.push(k);
    });
    getTraits(idList)
      .then((res) => {
        setNfts(res);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  const updateNfts = (newNfts: NftTrait[]) => {
    setNfts(newNfts);
    const m: TraitEquipped = new Map(newNfts.map((item) => [item.id, true]));
    setEquippedState(m);
  };

  const test = () => {
    console.log(nfts);
  };

  return (
    <div className="w-full h-full flex flex-row gap-8">
      <div className="w-1/2 h-full flex flex-col items-center justify-center">
        <div className="rounded-md h-64 w-64 bg-gradient-to-b to-white from-purple-300 flex items-center justify-center">
          <MainNft nfts={nfts} />
        </div>
        <div className="h-8"></div>
        <Button className="w-64">Feed</Button>
      </div>
      <div className="w-1/2 h-full">
        <SideBar updateNfts={updateNfts} nfts={nfts} />
      </div>
    </div>
  );
}
