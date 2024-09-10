"use client";

import { Button, ScrollShadow, Textarea } from "@nextui-org/react";
import SubmitDark from "@/app/assets/icons/dark/submit.svg";
import Image from "next/image";
import { useState } from "react";
import { getReply } from "@/app/api/ai";
import { Message } from "./message";

export default function ChatBox() {
  const [messageList, setMessageList] = useState<Message[]>([]);
  const [inputText, setInputText] = useState("");
  const [isTalking, setIsTalking] = useState(false);

  const appendMessageList = (messages: Message[]) => {
    setMessageList([...messageList, ...messages]);
  };

  const submitMessage = () => {
    const content = inputText;
    const userMessage = {
      content,
      role: "user",
    } as Message;
    appendMessageList([userMessage]);
    setInputText("");
    setIsTalking(true);
    getReply(content)
      .then((res) => {
        appendMessageList([
          userMessage,
          {
            content: res.data.reply as string,
            role: "ai",
          },
        ]);
        setIsTalking(false);
      })
      .catch((err) => {
        appendMessageList([
          userMessage,
          {
            content: err as string,
            role: "error",
          },
        ]);
        setIsTalking(false);
      });
  };

  return (
    <div className="grow flex flex-col">
      <div className="grow">
        <ScrollShadow className="w-full max-h-80 text-wrap px-2" size={10}>
          {messageList.map((m, index) => (
            <Message key={index} message={m} />
          ))}
        </ScrollShadow>
      </div>
      <div className="w-full flex flex-row">
        <Textarea
          variant="bordered"
          placeholder="Chat now"
          minRows={1}
          maxRows={5}
          disabled={isTalking}
          value={inputText}
          onValueChange={setInputText}
        />
        <Button
          className="ml-4"
          isIconOnly
          aria-label="submit"
          variant="light"
          disabled={isTalking}
          onClick={submitMessage}
        >
          <Image src={SubmitDark} alt="" />
        </Button>
      </div>
    </div>
  );
}
