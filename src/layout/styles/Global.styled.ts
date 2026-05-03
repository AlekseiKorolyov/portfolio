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
        font-size: 14px;
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
        font-size: calc((100vw - 360px) / (1600 - 360) * (58 - 30) + 30px);
        font-weight: 700;
        //line-height: 1.2;
        color: #ccc;

    }

    h3 {
        font-size: calc((100vw - 360px) / (1600 - 360) * (48 - 26) + 26px);
        font-weight: 400;
        //line-height: 1.2;
        color: #a7a7a7;
    }

    h4 {
        font-size: calc((100vw - 360px) / (1600 - 360) * (32 - 26) + 26px);
        font-weight: 400;
        color: #a7a7a7;
    }

    h5 {
        font-size: calc((100vw - 360px) / (1600 - 360) * (20 - 16) + 16px);
        font-weight: 400;
        color: #a7a7a7;
    }

    p {
        font-size: calc((100vw - 360px) / (1600 - 360) * (18 - 14) + 14px);
    }

    a {
        text-decoration: none;
        color: inherit;
    }

    button:hover,
    a:hover {

        transform: scale(1.2) translateY(-4px);
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
        padding: 120px 0;
    }

`