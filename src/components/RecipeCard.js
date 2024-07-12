import React from "react";
import styled from "styled-components";

const Card = styled.div`
  background: rgba(255, 255, 255, 0.1);
  border-radius: 10px;
  padding: 1rem;
  margin: 1rem;
  backdrop-filter: blur(10px);
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.05);
  }
`;

const Title = styled.h2`
font-family: 'Orbitron', sans-serif,
color:#00b4db;
`;

const Description = styled.p`
  font-family: "Roboto", sans-serif;
  color: #333;
`;

const RecipeCard = ({ title, description }) => {
  return (
    <Card>
      <Title>{title}</Title>
      <Description>{description}</Description>
    </Card>
  );
};

export default RecipeCard;
