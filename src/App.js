import React, { usestate, useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import styled from "styled-components";
import Header from "./components/Header";
import RecipeList from "./components/RecipeList";
import Footer from "./components/Footer";
import axios from "axios";

const AppWrapper = styled.div`
  background: linear-gradient(to bottom right, #f0f0f0, #e0e0e0);
  min-height: 100vh;
`;

const ContentWrapper = styled.main`
  padding: 2rem;
  margin-bottom: 60px; // To prevent content from being hidden by the footer
`;

const Home = () => (
  <>
    <h1>Welcome to Cookbook</h1>
    <p>Discover tastes from all over the world!</p>
  </>
);

const About = () => (
  <>
    <h1>About CookBook</h1>
    <p>We bring you the worlds most amazing tastes.</p>
  </>
);

function App() {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    fetchRecipes();
  }, []);

  const fetchRecipes = async () => {
    try {
      const response = await axios.get("http://backend-url/api/recipes/");
      setRecipes(response.data);
    } catch (error) {
      console.error("Error fetching recipes:", error);
    }
  };

  return (
    <Router>
      <AppWrapper>
        <Header />
        <ContentWrapper>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/recipes" element={<RecipeList recipes={recipes} />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </ContentWrapper>

        <Footer />
      </AppWrapper>
    </Router>
  );
}

export default App;
