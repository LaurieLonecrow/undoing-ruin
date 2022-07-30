import styled, { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  html {
    font-size: 62.5%;
    scroll-behavior: smooth;

  }
  body {
    font-size: 1.6rem;
    cursor: default;

  }
  a {
    text-decoration: none;
  }
  li{
    list-style: none;
  }

`;

export default GlobalStyles;

export const Container = styled.div`
  background-color: ${props => props.black ? "black" : "white"};
  padding: ${props => props.padding};
  width: 100vw;
  height: ${props => props.height ? "100vh" : "fit-content"};
  position: relative;
  @media screen and (max-width: 768px) {
    overflow-y: scroll;

  }

` 
export const TitleText = styled.h1`
  color: ${props => props.color};
  font-family: 'Koulen', cursive;
`
