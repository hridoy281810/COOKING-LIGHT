import React from 'react';
import { useLoaderData } from 'react-router-dom';
import RecipeBanner from './RecipeBanner';
import RecipeCard from './RecipeCard';

const Recipe = () => {
  const recipe = useLoaderData()
  console.log(recipe)
  return (
    <>
      <RecipeBanner recipe={recipe}></RecipeBanner>
      <RecipeCard recipe={recipe}></RecipeCard>
    </>
  );
};

export default Recipe;