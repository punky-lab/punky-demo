"use client";

import React from "react";
import { Tabs, Tab } from "@nextui-org/react";
import ItemSales from "./itemSales";
import NftSales from "./nftSales";
import TraitSales from "./traitSales";

export default function MarketplacePage() {
  return (
    <div className="flex w-full flex-col">
      <Tabs aria-label="toggle">
        <Tab key="nft-sales" title="NFT-Sales" className="grow flex">
          <div className="grow bg-gray-800 rounded-xl p-4">
            <NftSales />
          </div>
        </Tab>
        <Tab key="trait-sales" title="Trait-Sales" className="grow flex">
          <div className="grow bg-gray-800 rounded-xl p-4">
            <TraitSales />
          </div>
        </Tab>
        <Tab key="item-sales" title="Item-Sales" className="grow flex">
          <div className="grow bg-gray-800 rounded-xl p-4">
            <ItemSales />
          </div>
        </Tab>
      </Tabs>
    </div>
  );
}