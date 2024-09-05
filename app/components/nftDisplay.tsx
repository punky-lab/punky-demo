import React, { useState } from 'react';
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, Image, useDisclosure} from '@nextui-org/react';
import logo from "../assets/logo.png";
export default function NFTDisplay(props: {ButtonType: string}) {
    const {isOpen, onOpen, onOpenChange} = useDisclosure();

    return (
        <>
            <Image
                width={100}
                height={100}
                alt="trait1 with fallback"
                src={logo.src}
                fallbackSrc={logo.src}
                isZoomed
                onClick={onOpen}
            />
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
                        <div className='flex flex-col items-center'>
                            <ModalHeader>
                                <div className='flex flex-col items-center'>
                                    <h1>Trait Name</h1>
                                    <Image
                                        width={175}
                                        height={175}
                                        alt="trait1 with fallback"
                                        src={logo.src}
                                        fallbackSrc={logo.src}
                                    />
                                </div>
                            </ModalHeader>
                            <ModalBody>
                                <p>Traits Description</p>
                            </ModalBody>
                            <ModalFooter>
                                {props.ButtonType == "buy or auction" && <Button onPress={onClose}>buy</Button>}
                                {props.ButtonType == "buy or auction" && <Button onPress={onClose}>auction</Button>}
                                {props.ButtonType == "equip or sell" && <Button onPress={onClose}>equip</Button>}
                                {props.ButtonType == "equip or sell" && <Button onPress={onClose}>sell</Button>}
                            </ModalFooter>
                        </div>
                    )}
                </ModalContent>
            </Modal>
        </>
    );
}