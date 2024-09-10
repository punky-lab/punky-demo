import { NftMetadata, NftTrait, totalTrait, TraitCategory } from "../lib/trait";

function metaToTrait(metadata: NftMetadata, id: number): NftTrait {
  const categories: TraitCategory[] = ["base", "head", "neck", "tail", "body"];
  return {
    id,
    title: metadata.name,
    description: metadata.description,
    imageSrc: metadata.image,
    category: categories[id],
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

export async function getAllTraits() {
  return getTraits(Array.from(Array(totalTrait - 1).keys()).map((v) => v + 1))
}

export async function getTraits(idList: number[]) {
  return Promise.all(idList.map((v) => loadTrait(v)));
}
