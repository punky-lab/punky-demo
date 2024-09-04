import React, { useState } from 'react';
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, Image, useDisclosure} from '@nextui-org/react';
import logo from "../assets/logo.png";
export default function TraitsDisplay() {
    const {isOpen, onOpen, onOpenChange} = useDisclosure();

    return (
        <>
            <Image
                width={100}
                height={100}
                alt="trait1 with fallback"
                src={logo.src}
                fallbacksrc={logo.src}
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
                                    fallbacksrc={logo.src}
                                />
                            </ModalHeader>
                            <ModalBody>
                                <p>Traits Description</p>
                            </ModalBody>
                            <ModalFooter>
                                <Button onPress={onClose}>Equip</Button>
                            </ModalFooter>
                        </>
                    )}
                </ModalContent>
            </Modal>
        </>
    );
}