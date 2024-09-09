import { getTraits } from "@/app/api/traits";
import NFTDisplay from "@/app/components/nftDisplay";

export default async function ItemSales() {
  const traits = await getTraits("0x123456");
  return (
    <div>
      <div className="flex flex-row flex-wrap">
        {traits.map((item, index) => (
          <NFTDisplay key={index} buttonType="equip or sell" traitData={item} />
        ))}
      </div>
    </div>
  );
}
