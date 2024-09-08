import NFTDisplay from "@/app/components/nftDisplay";
import logo from "../../assets/logo.png";
import { StaticImageData } from "next/image";
export default function Bag(props: {nfts: StaticImageData[]}) {
    return (
        <div>
            <span>Bag</span>
            <span>TraitsList</span>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                <NFTDisplay ButtonType = "equip or sell" srcImg={logo}/>
                {props.nfts.map((item, index)=><NFTDisplay ButtonType = "equip or sell" srcImg={item}/>)}
            </div>
        </div>
    )
}