export interface NftTrait {
  id: number;
  title: string;
  description: string;
  imageSrc: string;
  category: TraitCategory;
}

export type TraitCategory = "base" | "head" | "body" | "leg" | "tail" | "neck";

export interface NftMetadata {
  description: string;
  external_url: string;
  image: string;
  name: string;
}

export const totalTrait = 5; // including base

export type TraitOwned = Map<number, boolean>;
export type TraitEquipped = Map<number, boolean>;
