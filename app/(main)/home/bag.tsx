import NFTDisplay from "@/app/components/nftDisplay"
export default function Bag() {
    return (
        <div>
            <span>Bag</span>
            <span>TraitsList</span>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                <NFTDisplay ButtonType = "equip or sell" />
            </div>
        </div>
    )
}