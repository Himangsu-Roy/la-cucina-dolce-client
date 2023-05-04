import React, { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const RecipeCard = ( {recipe} ) => {
  //   const { name, rating, ingredients, cooking_method } = recipe;
    const [isFavorite, setIsFavorite] = useState(false);

    const handleFavoriteClick = () => {
      setIsFavorite(true);
      toast.success("Added to favorites!");
    };

  return (
    <div className="max-w-md rounded overflow-hidden shadow-lg">
      {/* <img className="w-full" src={recipe.img} alt={name} /> */}
      {/* <div>Recipe:</div> */}
      <div className="px-6 py-4 flex flex-col">
        <div className="font-bold text-xl mb-2">{recipe.name}</div>
        <div className="flex items-center mb-4">
          <div className="text-gray-700 font-bold mr-2">Rating:</div>
          <div className="text-gray-700">{recipe.rating}</div>
        </div>
        <div className="mb-4">
          <div className="font-bold text-gray-700 mb-2">Ingredients:</div>
          <ul className="list-disc pl-5">
            {recipe.ingredients.map((ingredient, index) => (
              <li key={index}>{ingredient}</li>
            ))}
          </ul>
        </div>
        <div>
          <div className="font-bold text-gray-700 mb-2">Cooking Method:</div>
          <ol className="list-decimal pl-5 ">
            {/* {recipe.cookingMethod.map((step, index) => (
              <li key={index}>{step}</li>
            ))} */}
            <p>{recipe.cooking_method}</p>
          </ol>
        </div>
        <button
          onClick={handleFavoriteClick}
          disabled={isFavorite}
          className="bg-[#FBC278] hover:bg-[#f9a83f] mx-auto mt-3 text-black font-bold py-2 px-4 rounded"
        >
          {isFavorite ? "Added to favorites!" : "Add to favorites"}
        </button>
        <ToastContainer />
      </div>
    </div>
  );
};

export default RecipeCard;
