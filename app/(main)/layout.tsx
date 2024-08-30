import { PropsWithChildren } from "react";

export default function MainLayout(props: PropsWithChildren) {
  return (
    <div>
      <span>main layout</span>
      <div>{props.children}</div>
    </div>
  );
}
