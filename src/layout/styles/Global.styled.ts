import {createGlobalStyle} from "styled-components";
import {theme} from "./Theme.ts";

export const GlobalStyle = createGlobalStyle`
    *,
    *::before,
    *::after {
       margin: 0 auto;
       padding: 0;
       box-sizing: border-box;
    }
    
    html {
        font-size: 10px;
    }
    
    body {
        margin: 0 auto;
        font-family: 'Poppins', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
        'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
        sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        background-color: ${theme.colors.primaryBg};
        color: ${theme.colors.font};
        line-height: 1.2;
        
    }
    
   
    
    h2 {
        font-size: calc( (100vw - 360px) / (1600 - 360) * (48 - 24) + 24px);
        font-weight: 700;
        line-height: 54%;
        color: #ccc;
        
    }

    h3 {
        font-size: calc( (100vw - 360px) / (1600 - 360) * (32 - 16) + 16px);
        font-weight: 400;
        line-height: 81%;
        text-align: center;
        color: #a7a7a7;
    }
    
    p {
        font-size: calc( (100vw - 360px) / (1600 - 360) * (18 - 9) + 9px);
    }
    
    a {
        text-decoration: none;
        color: inherit;
    }
    
    button:hover,
    a:hover {
        color: antiquewhite;
        transform: scale(1.2) translateY(-8px);
        transform-origin: center;
    }
    
    ul {
        list-style: none;
    }
    
    button {
        background-color: unset;
        border: none;
    }
    

    section {
        padding: 100px 0;
    }

`