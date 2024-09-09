export interface NftTrait {
  id: string;
  title: string;
  description: string;
  imageSrc: string;
  category: "head" | "body" | "leg" | "tail" | "neck";
}
