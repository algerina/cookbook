import React from "react";
import styled from "styled-components";

const FooterWrapper = styled.footer`
  background: linear-gradient(to right, #00b4db, #0083b0);
  color: white;
  text-align: center;
  padding: 1rem;
  position: fixed;
  bottom: 0;
  width: 100%;
`;

const Footer = () => {
  return (
    <FooterWrapper>
      <p>All rights reserved.</p>
    </FooterWrapper>
  );
};

export default Footer;
