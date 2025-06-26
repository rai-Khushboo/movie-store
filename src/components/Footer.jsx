import React from 'react';
import styled from 'styled-components';

const Footer = () => {
  return (
    <FooterContainer>
      <FooterContent>
        <Copyright>
          &copy; {new Date().getFullYear()} Disney+. All Rights Reserved.
        </Copyright>
        <Links>
          <a href="#">Privacy Policy</a>
          <a href="#">Terms of Service</a>
          <a href="#">Help</a>
        </Links>
      </FooterContent>
    </FooterContainer>
  );
};

export default Footer;

const FooterContainer = styled.footer`
  width: 100%;
  background: #090b13;
  color: #f9f9f9;
  padding: 24px 0 16px 0;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  bottom: 0;
  margin-top: 40px;
`;

const FooterContent = styled.div`
  width: 90%;
  max-width: 1200px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
`;

const Copyright = styled.div`
  font-size: 14px;
  opacity: 0.7;
`;

const Links = styled.div`
  display: flex;
  gap: 20px;
  a {
    color: #f9f9f9;
    text-decoration: none;
    font-size: 14px;
    opacity: 0.8;
    transition: opacity 0.2s;
    &:hover {
      opacity: 1;
      text-decoration: underline;
    }
  }
  @media (max-width: 600px) {
    flex-direction: column;
    gap: 8px;
  }
`; 