import React from 'react';
import { useLoaderData } from 'react-router-dom';
import ChefRecipe from '../../components/ChefRecipe/ChefRecipe';
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';

const Recipes = () => {
    
    return (
        <div>
            <Header></Header>
            <ChefRecipe></ChefRecipe>
            <Footer></Footer>
        </div>
    );
}

export default Recipes;
