import { NftTrait } from "../lib/trait";
import ExampleHead from "../assets/bags/白色鸭舌帽.svg";
import ExampleNeck from "../assets/bags/Sparklab项圈.svg";
import ExampleTail from "../assets/bags/斑马尾巴.svg";

export async function getTraits(addr: `0x${string}`) {
  const traits: NftTrait[] = [
    {
      id: "1",
      title: "White Cap",
      description: "白色鸭舌帽",
      imageSrc: ExampleHead.src,
      category: "head",
    },
    {
      id: "2",
      title: "Necklace",
      description: "Sparklab项圈",
      imageSrc: ExampleNeck.src,
      category: "neck",
    },
    {
      id: "4",
      title: "Zebra Tail",
      description: "斑马尾巴",
      imageSrc: ExampleTail.src,
      category: "tail",
    },
  ];

  return traits;
}
