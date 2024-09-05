import NFTDisplay from "@/app/components/nftDisplay";
<<<<<<< HEAD
interface BagProps{
    ButtonType: string;
}
export default function ItemSales(_: BagProps) {
=======
export default function ItemSales() {
>>>>>>> main
    return (
        <div>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                <NFTDisplay ButtonType = "buy or auction" />
            </div>
        </div>
    )
}