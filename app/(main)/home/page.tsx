import { Button } from '@nextui-org/react';
import SideBar from './sidebar';
import MainNft from './mainNft';
import sparklab from "../../assets/bags/Sparklab项圈.svg";
import whitecap from "../../assets/bags/白色鸭舌帽.svg";
import ReadUrl from '@/app/components/readUrl';
import BalanceInfo from '@/app/components/balanceOf';

export default function GamePage() {
  return (
    <div className="w-full h-full flex flex-row gap-8">
      <div className="w-1/2 h-full flex flex-col items-center justify-center">
        <div className='rounded-md h-64 w-64 bg-gradient-to-b to-white from-purple-300 flex items-center justify-center'>
          <MainNft nfts={[sparklab, whitecap]}/>
        </div>
        <div className='h-8'></div>
        <Button>View on OpenSea</Button>
      </div>
      <div className="w-1/2 h-full">
        <SideBar />
      </div>
      <BalanceInfo traitId={0} />
    </div>
  );
}
