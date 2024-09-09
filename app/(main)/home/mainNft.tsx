"use client";

import { StaticImageData } from "next/image";
import Image from "next/image";
import punky from "../../assets/bags/狗狗形态1.svg";

export default function MainNft(props: { nfts: StaticImageData[] }) {
  return (
    <div className="h-64 w-64 relative">
      <Image src={punky.src} alt="" fill className="object-cover" />
      {props.nfts.map((item, index) => (
        <Image
          key={index}
          src={item.src}
          alt=""
          fill
          className="object-cover"
          style={{
            position: "absolute",
            top: 0,
            left: 0,
          }}
        />
      ))}
    </div>
  );
}
