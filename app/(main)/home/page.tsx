import { Button } from '@nextui-org/react';
import SideBar from './sidebar';

export default function GamePage() {
  return (
    <div className="w-full h-full flex flex-row gap-8">
      <div className="w-1/2 h-full flex flex-col items-center justify-center">
        <div className='rounded-md h-64 w-64 bg-gradient-to-b to-white from-purple-300 flex items-center justify-center'>
          
        </div>
        <div className='h-8'></div>
        <Button className='w-64'>Feed</Button>
      </div>
      <div className="w-1/2 h-full">
        <SideBar />
      </div>
    </div>
  );
}
