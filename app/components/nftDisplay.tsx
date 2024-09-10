import React, { useState } from "react";
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
import { NftTrait } from "../lib/trait";
export default function NFTDisplay(props: {
  buttonType: string;
  traitData: NftTrait;
  updateNfts: (newNfts: NftTrait[]) => void;
  nfts: NftTrait[];
}) {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  const onEquip = () => {
    
  };

  return (
    <>
      <div
        className="m-8 rounded-md flex flex-col items-center justify-center p-4 cursor-pointer w-40 h-40 bg-gradient-to-b from-blue-800 to-cyan-700"
        onClick={onOpen}
      >
        <Image
          width={100}
          height={100}
          alt="trait"
          src={props.traitData.imageSrc}
          fallbackSrc={props.traitData.imageSrc}
          isZoomed
          className="border-1 border-white bg-gradient-to-b to-white from-purple-300"
        />
        <div className='mt-2'>
          <span>{props.traitData.title}</span>
        </div>
      </div>

      <Modal
        isOpen={isOpen}
        onOpenChange={onOpenChange}
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
                  <Image
                    width={175}
                    height={175}
                    alt="trait1 with fallback"
                    src={props.traitData.imageSrc}
                    fallbackSrc={props.traitData.imageSrc}
                    className="border-1 border-white"
                  />
                </div>
              </ModalHeader>
              <ModalBody>
                <p>{props.traitData.description}</p>
              </ModalBody>
              <ModalFooter>
                {props.buttonType == "buy or auction" && (
                  <Button onPress={onClose}>buy</Button>
                )}
                {props.buttonType == "buy or auction" && (
                  <Button onPress={onClose}>auction</Button>
                )}
                {props.buttonType == "equip or sell" && (
                  <Button onPress={onClose}>equip</Button>
                )}
                {props.buttonType == "equip or sell" && (
                  <Button onPress={onClose}>sell</Button>
                )}
              </ModalFooter>
            </div>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}
