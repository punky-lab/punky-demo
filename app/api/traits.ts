import { NftMetadata, NftTrait } from "../lib/trait";
import ExampleHead from "../assets/bags/白色鸭舌帽.svg";
import ExampleNeck from "../assets/bags/Sparklab项圈.svg";
import ExampleTail from "../assets/bags/斑马尾巴.svg";

function metaToTrait(metadata: NftMetadata, id: number): NftTrait {
  return {
    id,
    title: metadata.name,
    description: metadata.description,
    imageSrc: metadata.image,
  };
}

export async function loadTrait(id: number) {
  try {
    const res = await fetch(`/api/metadata/${id}`);
    const metadata = (await res.json()) as NftMetadata;
    return metaToTrait(metadata, id);
  } catch (err) {
    console.error(err);
    throw new Error(`failed to load trait ${id}: ${err}`);
  }
}

export async function getTraits(addr: `0x${string}`) {
  const traits: NftTrait[] = [
    {
      id: 1,
      title: "White Cap",
      description: "白色鸭舌帽",
      imageSrc: ExampleHead.src,
      category: "head",
    },
    {
      id: 2,
      title: "Necklace",
      description: "Sparklab项圈",
      imageSrc: ExampleNeck.src,
      category: "neck",
    },
    {
      id: 4,
      title: "Zebra Tail",
      description: "斑马尾巴",
      imageSrc: ExampleTail.src,
      category: "tail",
    },
  ];

  return traits;
}
