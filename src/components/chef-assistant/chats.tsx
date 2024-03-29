import { DocumentData, QuerySnapshot } from "firebase/firestore";
import { ROUTES } from "../../config/routes";
import { useRouter } from "next/navigation";
import { Suspense } from "react";

export interface ChatsProps {
  chats: QuerySnapshot<DocumentData> | undefined;
}

export default function Chats({ chats }: ChatsProps) {
  const router = useRouter();

  return (
    <>
      <Suspense fallback="loading...">
        <button
          className={"border-2 border-slate-200 w-full"}
          onClick={() => {
            router.push(ROUTES.CHEF_ASSISTANT);
          }}
        >
          Start a new chat
        </button>
        {chats?.docs.map((chat) => {
          return (
            <button
              className="border-2 border-slate-200 w-full"
              onClick={() => {
                router.push(`${ROUTES.CHEF_ASSISTANT}/${chat.id}`);
              }}
            >
              {chat.data().title || "New Chat"}
            </button>
          );
        })}
      </Suspense>
    </>
  );
}
