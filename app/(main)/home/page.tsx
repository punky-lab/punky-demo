"use client";

import { Button } from "@nextui-org/react";
import { useState } from "react";
import SideBar from "./sidebar";
import MainNft from "./mainNft";
import ExampleHead from "@/app/assets/bags/白色鸭舌帽.svg";
import ExampleNeck from "@/app/assets/bags/Sparklab项圈.svg";
import { NftTrait } from "@/app/lib/trait";

export default function GamePage() {
  const initTraits: NftTrait[] = [
    // {
    //   id: 1,
    //   title: "White Cap",
    //   description: "白色鸭舌帽",
    //   imageSrc: ExampleHead.src,
    //   category: "head",
    // },
    // {
    //   id: 2,
    //   title: "Necklace",
    //   description: "Sparklab项圈",
    //   imageSrc: ExampleNeck.src,
    //   category: "neck",
    // },
  ];

  const [nfts, setNfts] = useState(initTraits);

  const updateNfts = (newNfts: NftTrait[]) => {
    setNfts(newNfts);
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
        <Button className="w-64" onClick={test}>
          Feed
        </Button>
      </div>
      <div className="w-1/2 h-full">
        <SideBar updateNfts={updateNfts} nfts={nfts}/>
      </div>
    </div>
  );
}
