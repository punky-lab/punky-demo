import { PropsWithChildren } from "react";
import AppHeader from "../components/header";

export default function MainLayout(props: PropsWithChildren) {
  return (
    <div className="w-full h-full flex flex-col">
      <AppHeader link="game" />
      <div className="grow flex items-center justify-center">
        <div className="rounded-xl p-4 flex h-4/5 w-3/4 bg-gradient-to-b from-purple-500 via-purple-800 to-purple-900 via-65%">
          {props.children}
        </div>
      </div>
    </div>
  );
}
