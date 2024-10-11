import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    /* body {
        background-color: #38254f;
    } */

    h1, h2, h3, h4, h5, p, a {
        font-family: "Roboto", sans-serif;
        font-style: normal;
    }

    p, a, label {
        margin: 0;
        padding: 0;
        font-family: "Roboto", sans-serif;
    }

    p, label, td, th {
        font-size: 0.8rem;
    }

    a {
        text-decoration: none;
        color: black;
    }
`;