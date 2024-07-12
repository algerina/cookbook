import React from "react";
import styled from "styled-components";
import RecipeCard from ".components/RecipeCard";

const ListWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const RecipeList = ({ recipes }) => {
  return (
    <ListWrapper>
      {recipes.map((recipe, index) => (
        <RecipeCard
          key={index}
          title={recipe.title}
          description={recipe.description}
        />
      ))}
    </ListWrapper>
  );
};

export default RecipeList;
