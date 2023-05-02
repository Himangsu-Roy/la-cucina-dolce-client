import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import ChefCard from "../ChefCard/ChefCard";

const Chefs = () => {
  const { chefs } = useLoaderData();
  console.log(chefs);

  // const [data, setData] = useState(null);

  // useEffect(() => {
  //     fetch("http://localhost:5000/chefs")
  //         .then(res => res.json())
  //         .then(result => setData(result))
  // }, [])

  // const { chefs } = data
  // console.log(chefs)

  return (
    <div>
      {chefs.map((chef) => (
        <ChefCard key={chef.id} chef={chef}></ChefCard>
      ))}
    </div>
  );
};

export default Chefs;
