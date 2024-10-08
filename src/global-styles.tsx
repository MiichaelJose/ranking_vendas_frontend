import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    h1, h2, h3, h4, p, a {
        font-family: "Roboto", sans-serif;
        font-style: normal;
    }

    p, a, label {
        font-family: "Roboto", sans-serif;
    }

    p, label {
        font-size: 0.9rem;
    }
`;