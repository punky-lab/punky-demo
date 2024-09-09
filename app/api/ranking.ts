import { RankingItem } from "../lib/ranking";

export async function getRanking() {
  const rankingData: RankingItem[] = [
    {
      no: 1,
      address: "0xc474aBf9b10B1F71c631a0610AdC13674C48dF13",
      score: 1559,
    },
    {
      no: 2,
      address: "0x0Db515dd376E4b0d5e747041c04455ecccDdd5cD",
      score: 1265,
    },
    {
      no: 3,
      address: "0x896b110D99316A25EdbF993e2e28Bf54f903Bf63",
      score: 874,
    },
    {
      no: 4,
      address: "0x61CafA1a4BFf3B66537Ca3ECC49f756b5ED9a8c3",
      score: 532,
    },
  ];

  return rankingData;
}
