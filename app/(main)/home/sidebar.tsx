"use client";

import { Tab, Tabs } from "@nextui-org/react";
import Bag from "./bag";
import ChatBox from "./chatBox";
import { NftTrait } from "@/app/lib/trait";

export default function SideBar(props: {
  updateNfts: (newNfts: NftTrait[]) => void;
  nfts: NftTrait[];
}) {
  return (
    <div className="h-full flex flex-col">
      <Tabs aria-label="toggle">
        <Tab key="chat" title="Chat" className="grow flex">
          <div className="grow flex bg-gray-800 rounded-xl p-4">
            <ChatBox />
          </div>
        </Tab>
        <Tab key="bag" title="Bag" className="grow flex">
          <div className="grow bg-gray-800 rounded-xl p-4">
            <Bag updateNfts={props.updateNfts} nfts={props.nfts}/>
          </div>
        </Tab>
      </Tabs>
    </div>
  );
}
