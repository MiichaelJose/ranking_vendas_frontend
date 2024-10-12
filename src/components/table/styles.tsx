import styled from "styled-components";

const Container = styled.div`
    height: 400px;
    overflow-x: scroll;
    margin-top: 50px;
    background-color: rgb(29, 28, 65);

   

    ::-webkit-scrollbar {
        height: 2px;
    }

    ::-webkit-scrollbar-thumb {
        background-color: rgba(0, 0, 0, 0.3);
        border-radius: 10px;
    }

    ::-webkit-scrollbar-track {
        background-color: transparent;
    }

    scrollbar-width: thin;
    scrollbar-color: rgba(0, 0, 0, 0.3) transparent;
`;

export { Container }