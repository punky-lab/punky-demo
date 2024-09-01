import { Spinner } from "@nextui-org/react";

export default function Loading() {
  return (
    <div className="w-full h-full flex items-center justify-center">
      <Spinner label="Default" color="primary" labelColor="foreground" />
    </div>
  );
}
