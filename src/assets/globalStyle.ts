import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  :root {
    --violet: #453FA3;
    --purple: #6C63FF;
    --blue: #6989F8;
    --salmoon: #FF6584;
    --dark: #16171B;
    --dark-gray: #2E3136;
    --mid-gray: #C0C0C0;
    --gray: #E3E3E3;
    --light-gray: #F7F7F7;
  }

  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;

    -webkit-font-smoothing: antialiased;
    -moz-font-smoothing: antialiased;
    -ms-font-smoothing: antialiased;
    -o-font-smoothing: antialiased;
  }

  body {
    max-width: 100vw;
    width: 100vw;
    min-height: 100vh;
    font-family: Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-size: 16px;
    overflow-x: hidden; 
  }

  #root {
    width: 100vw;
    max-width: 100vw;
    min-height: 100vh;

    background-color: var(--dark);
    color: white;

    @media (max-width: 540px) {
      padding: 8px;
    }
  }


  a {
    text-decoration: none;
    color: var(--blue);
  }

  input, button {
    outline: none;
  }

  button {
    cursor: pointer;
    border: 0;
  }

  h1,h2,h3,h4,h5,h6 {
    font-family: Lato, Roboto, Oxygen, Ubuntu, Arial, Helvetica, sans-serif;
    font-weight: 100;
  }
`;
