export interface Message {
  content: string;
  role: "user" | "ai" | "error";
}

export function Message({ message }: { message: Message }) {
  switch (message.role) {
    case "user":
      return (
        <div className="rounded-md p-2 border mb-2 border-gray-100">
          <p className="text-gray-100 ml-auto">{message.content}</p>
        </div>
      );
    case "ai":
      return (
        <div className="rounded-md p-2 border mb-2 border-orange-200">
          <p className="text-orange-200">{message.content}</p>
        </div>
      );
    case "error":
      return (
        <div className="rounded-md p-2 border mb-2 border-pink-500">
          <p className="text-pink-500">{message.content}</p>
        </div>
      );
  }
}
