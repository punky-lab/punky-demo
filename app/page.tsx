import AppHeader from "./components/header";
import DogsImage from "./assets/punky-dogs.jpg";
import Image from "next/image";

export default function Dashboard() {
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
          <div>
            <span className="text-4xl font-semibold text-gray-400">
              Connect to wallet to play
            </span>
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
