import { Button } from '@nextui-org/react';
import SideBar from './sidebar';

export default function GamePage() {
  return (
    <div className="w-full h-full flex flex-row">
      <div className="w-1/2 h-full flex flex-col items-center justify-center">
        <div className='bg-white h-52 w-52'></div>
        <div className='h-8'></div>
        <Button className='w-52'>Feed</Button>
      </div>
      <div className="w-1/2 h-full">
        <SideBar />
      </div>
    </div>
  );
}
