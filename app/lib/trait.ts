export interface NftTrait {
  id: number;
  title: string;
  description: string;
  imageSrc: string;
  category: "head" | "body" | "leg" | "tail" | "neck";
}
