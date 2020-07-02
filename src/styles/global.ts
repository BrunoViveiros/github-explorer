import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  body {
    background: url(${({ theme }) => theme.backgroundImage}) no-repeat 70% top;
    background-color: ${(props) => props.theme.colors.background};
    color: ${(props) => props.theme.colors.primaryText};
    -webkit-font-smoothing: antialiased;
  }

  body, input, button {
    font: 16px Roboto, sans-serif;
    transition: all 0.25s linear;

  }

  #root {
    max-width: 960px;
    margin: 0 auto;
    padding: 40px 20px;
  }

  button {
    cursor: pointer;
  }
`;
