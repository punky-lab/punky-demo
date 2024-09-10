"use client";

import AppHeader from "./components/header";
import DogsImage from "./assets/punky-dogs.jpg";
import Image from "next/image";
import { useAccount } from "wagmi";
import { Button } from "@nextui-org/react";
import { useRouter } from "next/navigation";

export default function Dashboard() {
  const account = useAccount();
  const router = useRouter();
  return (
    <div className="w-full h-full flex flex-col">
      <AppHeader link="dashboard" />
      <div className="grow flex flex-row">
        <div className="w-1/2 h-full flex flex-col justify-center pl-12 pr-32">
          <div className="mb-6">
            <span className="text-8xl font-bold bg-gradient-to-br from-blue-600 to-pink-500 text-transparent bg-clip-text">
              PUNKY
            </span>
          </div>
          <div className="mb-6">
            <span className="text-4xl font-semibold">
              The stray shiba lnu in the cyber world who is looking for its
              owner
            </span>
          </div>
          <div className="mt-4">
            {account.status === "connected" ? (
              <Button
                size="lg"
                radius="full"
                className="w-64 bg-gradient-to-br from-pink-600 to-blue-600 font-bold text-xl"
                onClick={() => {
                  router.push("/home");
                }}
              >
                Play Now
              </Button>
            ) : (
              <span className="text-4xl font-semibold text-gray-400">
                Connect to wallet to play
              </span>
            )}
          </div>
        </div>
        <div className="w-1/2 h-full relative">
          <Image
            src={DogsImage}
            alt="dogs"
            placeholder="blur"
            fill
            className="object-cover"
          />
        </div>
      </div>
    </div>
  );
}
