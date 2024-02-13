"use client";

import { createClient } from "@/src/utils/supabase/client";
import Bottomnav from "@/src/components/bottom-navbar";
import PostSmall from "../components/homepage/post-small";
import { Recipe } from "../types/tables";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "../utils/hooks/auth-hook";
import PostLoading from "../components/homepage/post-loading";

export default function Home() {
  const router = useRouter();
  const supabase = createClient();
  const [recipes, setRecipes] = useState<Recipe[]>();
  const [loading, setLoading] = useState<boolean>(true);

  const fetchData = async () => {
    const user = await useAuth(router);

    if (!user.user) {
      router.push("/signin");
      return;
    }

    const uuid = await supabase
      .from("users")
      .select("id")
      .eq("uuid", user.user.id)
      .single();

    if (uuid.error) {
      console.error("Error fetching data:", uuid.error.message);
      return;
    }

    const { error, data } = await supabase.functions.invoke<Recipe[]>(
      "generate-recommendation",
      {
        body: {
          id: uuid.data.id,
        },
      },
    );

    if (error) {
      console.error("Error fetching data:", error.message);
      return;
    }

    setRecipes(data || []);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="flex">
      <div className=" w-full h-screen flex flex-col items-center border-l border-r border-gray-300 overflow-scroll ">
        <div className="text-center font-bold">
          <div>Recommended</div>
        </div>
        <div className="py-2 border-gray-300">
          <div className="flex flex-col">
            {recipes ? (
              recipes.map((recipe) => (
                <PostSmall
                  setLoading={setLoading}
                  key={recipe.id}
                  {...recipe}
                />
              ))
            ) : (
              <PostLoading />
            )}
          </div>
          <Bottomnav />
        </div>
      </div>
    </div>
  );
}
