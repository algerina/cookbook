import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const HeaderWrapper = styled.header`
  background: linear-gradient(to right, #00b4db, #0083b0);
  padding: 1rem;
  color: white;
`;

const Title = styled.h1`
  font-family: "Orbitron", sans-serif;
  text-align: center;
`;

const Nav = styled.nav`
  display: flex;
  justify-content: center;
`;

const NavLink = styled(Link)`
  color: white;
  text-decoration: none;
  margin: 0 1rem;
  font-family: "Roboto", sans-serif;

  &:hover {
    text-decoration: underline;
  }
`;

const Header = () => {
  return (
    <HeaderWrapper>
      <Title>Flavors from the world</Title>
      <Nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/">About</NavLink>
        <NavLink to="/">Recipes</NavLink>
      </Nav>
    </HeaderWrapper>
  );
};

export default Header;
