import React from "react";
import { Link, useLoaderData } from "react-router-dom";

const ChefCard = ({ chef }) => {
  const { id, image, name, experience, recipes, likes } = chef;
  return (
    <div className="max-w-xs rounded overflow-hidden shadow-lg m-4 lg:col-span-3 md:col-span-6 sm:col-span-6 col-span-full relative">
      <img className="w-full " src={image} alt={name} />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2 ">{name}</div>
        <p className="text-gray-700 text-base mb-2">
          Years of experience: {experience}
        </p>
        <p className="text-gray-700 text-base mb-2">
          Number of recipes: {recipes}
        </p>
        <p className="text-gray-700 text-base mb-2">Likes: {likes}</p>

        <Link
          to={`recipes/${id}`}
          className="flex justify-center mt-20 text-[16px] font-[600]"
        >
          <button className="mb-5 bg-[#BDD6DD] py-3 px-5 rounded absolute bottom-0">
            View Recipes
          </button>
        </Link>
      </div>
    </div>
  );
};

export default ChefCard;
