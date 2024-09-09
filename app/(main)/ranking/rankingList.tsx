import { getRanking } from "@/app/api/ranking";

export default async function RankingList() {
  const rankingData = await getRanking();
  return (
    <div className='flex grow flex-col w-1/2 min-w-72 items-center bg-slate-800 px-4 py-8 rounded-md shadow-lg'>
      <p className='text-5xl font-bold mb-4'>Ranking</p>
      {rankingData.map((item, index) => {
        return (
          <div
            key={index}
            className="bg-gradient-to-r from-cyan-500 to-blue-500 rounded-md p-2 my-4 flex flex-row w-full"
          >
            <span>{item.no}.</span>
            <span>{item.address.slice(0, 20)}...</span>
            <span className="ml-auto">{item.score}</span>
          </div>
        );
      })}
    </div>
  );
}
