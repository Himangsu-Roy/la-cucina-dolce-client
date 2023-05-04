import React from "react";
import { useLoaderData } from "react-router-dom";
import RecipeCard from "../RecipeCard/RecipeCard";

const ChefRecipe = () => {
  const chef = useLoaderData();
  console.log(chef.name);
  console.log(chef);
  return (
    <div className="container mx-auto px-4">
      <div className="flex flex-col md:flex-row md:items-center mt-10">
        <img
          src={chef.picture}
          alt={chef.name}
          className="w-full md:w-1/3 md:mr-8 rounded-lg"
        />
        <div className="md:w-2/3">
          <h1 className="text-3xl font-bold mb-2">{chef.name}</h1>
          <p className="text-lg mb-4">{chef.bio}</p>
          <p className="text-lg font-bold mb-2">
            Years of experience: {chef.experience}
          </p>
          <p className="text-lg font-bold mb-2">
            Number of recipes: {chef.num_recipes}
          </p>
          <p className="text-lg font-bold mb-2">Likes: {chef.likes}</p>
        </div>
      </div>
      <div className="mt-12">
        <h1 className="flex justify-center mb-4 text-[20px] underline font-[600]">Recipes</h1>
        <div className="flex flex-col md:flex-row ">
          {chef.recipes.map((recipe) => (
            <div key={recipe.id} className="md:w-1/3 md:px-4 mb-8">
              <RecipeCard recipe={recipe}></RecipeCard>
              {/* <img
                src={recipe.image}
                alt={recipe.name}
                className="rounded-lg"
              /> */}
              {/* <h2 className="text-xl font-bold my-2">{recipe.name}</h2>
              <p className="text-lg mb-2">{recipe.cooking_method}</p>
              <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                View Recipe
              </button> */}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ChefRecipe;

// import React from "react";
// import chefData from "./chefData.json";
// import recipesData from "./recipesData.json";

// function ChefProfile() {
//   const chef = chefData;
//   const recipes = recipesData.filter((recipe) => recipe.chef_id === chef.id).slice(0, 3);

//   return (
//     <div className="container mx-auto px-4">
//       <div className="flex flex-col md:flex-row md:items-center mt-10">
//         <img src={chef.image} alt={chef.name} className="w-full md:w-1/3 md:mr-8 rounded-lg" />
//         <div className="md:w-2/3">
//           <h1 className="text-3xl font-bold mb-2">{chef.name}</h1>
//           <p className="text-lg mb-4">{chef.bio}</p>
//           <p className="text-lg font-bold mb-2">Years of experience: {chef.experience}</p>
//           <p className="text-lg font-bold mb-2">Number of recipes: {recipes.length}</p>
//           <p className="text-lg font-bold mb-2">Likes: {chef.likes}</p>
//         </div>
//       </div>
//       <div className="flex flex-col md:flex-row mt-10">
//         {recipes.map((recipe) => (
//           <div key={recipe.id} className="md:w-1/3 md:px-4 mb-8">
//             <img src={recipe.image} alt={recipe.name} className="rounded-lg" />
//             <h2 className="text-xl font-bold my-2">{recipe.name}</h2>
//             <p className="text-lg mb-2">{recipe.cooking_method[0]}</p>
//             <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
//               View Recipe
//             </button>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default ChefProfile;
