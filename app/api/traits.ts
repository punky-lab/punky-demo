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

export async function getTraits() {
  return Promise.all(
    // magic
    Array.from(
      // emit PunkyBase (0)
      Array.from(Array(totalTrait - 1).keys()).map((v) => loadTrait(v + 1))
    )
  );
}
