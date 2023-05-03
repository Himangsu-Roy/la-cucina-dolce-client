import { useLoaderData } from "react-router-dom";
import ChefCard from "../ChefCard/ChefCard";

const Chefs = () => {
  const { chefs } = useLoaderData();

  return (
    <div className="mt-10">
      <h1 className="text-[32px] font-[700] ml-4">Chefs</h1>
      <div className="grid grid-cols-12 justify-items-center">
        {chefs.map((chef) => (
          <ChefCard key={chef.id} chef={chef}></ChefCard>
        ))}
      </div>
    </div>
  );
};

export default Chefs;
