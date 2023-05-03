import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Recipes = () => {
    const  recipes  = useLoaderData();
    console.log(recipes)
    return (
        <div>
            recipes
        </div>
    );
}

export default Recipes;
