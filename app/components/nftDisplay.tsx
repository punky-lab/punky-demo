import React, { useState } from 'react';
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, Image, useDisclosure} from '@nextui-org/react';
import logo from "../assets/logo.png";
export default function NFTDisplay(props) {
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
            >
                <ModalContent>
                    {(onClose) => (
                        <>
                            <ModalHeader>
                                <h1>Trait Name</h1>
                                <Image
                                    width={200}
                                    height={200}
                                    alt="trait1 with fallback"
                                    src={logo.src}
                                    fallbackSrc={logo.src}
                                />
                            </ModalHeader>
                            <ModalBody>
                                <p>Traits Description</p>
                            </ModalBody>
                            <ModalFooter>
                                {props.ButtonType == "buy or auction" && <Button onPress={onClose}>buy or auction</Button>}
                                {props.ButtonType == "equip or sell" && <Button onPress={onClose}>equip or sell</Button>}
                            </ModalFooter>
                        </>
                    )}
                </ModalContent>
            </Modal>
        </>
    );
}