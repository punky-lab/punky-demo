export interface NftTrait {
  id: string;
  title: string;
  description: string;
  imageSrc: string;
  category: "head" | "body" | "leg" | "tail" | "neck";
}

export const totalTrait = 5; // including base

export type TraitOwned = Map<number, boolean>;
