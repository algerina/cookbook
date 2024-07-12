import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <HeaderWrapper>
      <Title>Flavors from the world</Title>
      <Nav>
        <Navlink to="/">Home</Navlink>
        <Navlink to="/">About</Navlink>
        <Navlink to="/">Recipes</Navlink>
      </Nav>
    </HeaderWrapper>
  );
};

export default Header;
