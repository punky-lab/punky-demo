"use client";

import React, { useCallback, useEffect, useState } from "react";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  Image,
  useDisclosure,
} from "@nextui-org/react";
import { NftTrait, TraitOwned } from "../lib/trait";
import { useRouter } from "next/navigation";
import { getOwnedState } from "../api/localdata";
import { MintTraitButton } from "./mintBase";
export default function NFTDisplay(props: {
  buttonType: string;
  traitData: NftTrait;
  updateNfts: (newNfts: NftTrait[]) => void;
  nfts: NftTrait[];
}) {
  const [state, setState] = useState<TraitOwned | null>(null);
  const { isOpen, onOpen, onOpenChange, onClose } = useDisclosure();
  const router = useRouter();

  useEffect(() => {
    setState(getOwnedState());
  }, []);

  const onEquip = useCallback(() => {
    if (!state) {
      return;
    }
    if (!props.nfts.map((nft) => nft["id"]).includes(props.traitData.id)) {
      const oldNfts = props.nfts;
      const oldNftIndex = oldNfts.findIndex(
        (item) => item["category"] === props.traitData["category"]
      );
      if (oldNftIndex !== -1) {
        oldNfts[oldNftIndex] = props.traitData;
      } else {
        oldNfts.push(props.traitData);
      }
      props.updateNfts(oldNfts);
    } else {
      let newNfts: NftTrait[] = [];
      for (let nft of props.nfts) {
        if (nft.id !== props.traitData.id) {
          newNfts.push(nft);
        }
      }
      props.updateNfts(newNfts);
    }
    onClose();
    router.refresh();
  }, [state, props.nfts, props.updateNfts, props.traitData]);

  if (!state) {
    return (
      <div className="m-2 rounded-md flex flex-col items-center justify-center p-4 w-40 h-40 bg-slate-800">
        <p>Loading...</p>
      </div>
    );
  }

  const Locked = () => {
    return <p className="font-semibold text-center">LOCKED</p>;
  };

  return (
    <>
      <div
        className="m-2 rounded-md flex flex-col items-center justify-center p-4 cursor-pointer w-40 h-40 bg-gradient-to-b from-blue-800 to-cyan-700"
        onClick={onOpen}
      >
        <Image
          width={64}
          height={64}
          alt="trait"
          src={props.traitData.imageSrc}
          fallbackSrc={props.traitData.imageSrc}
          isZoomed
          className="border-1 border-white bg-gradient-to-b to-white from-purple-300"
        />
        <div className="grow"></div>
        <div className="mt-2 text-sm text-pretty text-center">
          <p>{props.traitData.title}</p>
          {!state.get(props.traitData.id) && <Locked />}
        </div>
      </div>

      <Modal
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        onClose={onClose}
        classNames={{
          body: "py-6",
          backdrop: "bg-[#292f46]/50 backdrop-opacity-40",
          base: "border-[#292f46] bg-[#19172c] dark:bg-[#19172c] text-[#a8b0d3]",
          header: "border-b-[1px] border-[#292f46]",
          footer: "border-t-[1px] border-[#292f46]",
          closeButton: "hover:bg-white/5 active:bg-white/10",
        }}
      >
        <ModalContent>
          {(onClose) => (
            <div className="flex flex-col items-center">
              <ModalHeader>
                <div className="flex flex-col items-center">
                  <h1>{props.traitData.title}</h1>
                </div>
              </ModalHeader>
              <ModalBody>
                <Image
                  width={175}
                  height={175}
                  alt="trait1 with fallback"
                  src={props.traitData.imageSrc}
                  fallbackSrc={props.traitData.imageSrc}
                  className="border-1 border-white"
                />
                <p className="text-center mt-2">
                  {props.traitData.description}
                </p>
                {!state.get(props.traitData.id) && <Locked />}
                {!state.get(props.traitData.id) && (
                  <p className="text-center">0.002 ETH</p>
                )}
              </ModalBody>
              <ModalFooter>
                {state.get(props.traitData.id) ? (
                  // Showing equip button when player owns it
                  <>
                    {props.buttonType == "buy or auction" && (
                      <Button onPress={onClose}>buy</Button>
                    )}
                    {props.buttonType == "buy or auction" && (
                      <Button onPress={onClose}>auction</Button>
                    )}
                    {props.buttonType == "equip or sell" && (
                      <Button onPress={onEquip}>
                        {props.nfts
                          .map((nft) => nft["id"])
                          .includes(props.traitData.id)
                          ? "unequip"
                          : "equip"}
                      </Button>
                    )}
                    {props.buttonType == "equip or sell" && (
                      <Button onPress={onClose}>sell</Button>
                    )}
                  </>
                ) : (
                  // Showing mint button when player doesn't own it
                  <MintTraitButton traitId={props.traitData.id} />
                )}
              </ModalFooter>
            </div>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}
