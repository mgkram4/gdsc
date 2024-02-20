"use client";
import { CiHeart } from "react-icons/ci";
import { BiComment } from "react-icons/bi";
import { createClient } from "@/src/utils/supabase/client";
import BookmarkButton from "@/src/components/button/bookmark-button";
import { useState } from "react";
import { Recipe } from "@/src/types/tables";
import RatingButton from "../button/rating-button";

export default function PostSmall(recipe: Recipe) {
  // TODO: fix the user profile picture
  return (
    <div className="m-4 ">
      {recipe && (
        <div className="bg-white p-4 mb-4 rounded-md shadow-md border-2 border-gray-200 ">
          <div className="font-bold text-xl mb-2">{recipe.title}</div>
          <div className="text-gray-600 mb-4">
            {recipe.short_description || ""}
          </div>

          <img
            src={
              recipe.headliner_image !== null
                ? recipe.headliner_image
                : undefined
            }
            className="w-full h-32 object-cover rounded-md mb-2"
          />

          <div className="flex items-center justify-between  mt-4">
            <div className="flex items-center space-x-2">
              <div className="text-sm font-semibold">User:</div>
              <div className="text-sm text-gray-500">Profile Picture:</div>
              <div className="text-sm text-gray-500">
                {new Date(recipe.date_published).toLocaleDateString()}
              </div>
            </div>

            <div className="flex space-x-4">
              <div className="flex items-center space-x-1">
                <RatingButton
                  initialRatingCount={recipe.rating_count}
                  recipeId={recipe.id}
                />
                <RatingButton
                  initialRatingCount={recipe.rating_count}
                  recipeId={recipe.id}
                />
              </div>

              <div className="flex items-center space-x-1">
                <BookmarkButton
                  initialBookmarkCount={recipe.bookmark_count}
                  recipeId={recipe.id}
                />
              </div>

              <div className="flex items-center space-x-1">
                <span className="text-sm">{recipe.comment_count}</span>
                <BiComment className="w-6 h-6 hover:text-green-500 active:bg-green-300 active:text-white rounded cursor-pointer transition-all duration-300" />
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
