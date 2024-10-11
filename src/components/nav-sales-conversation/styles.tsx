import styled from "styled-components";

const Container = styled.main`
    width: 100%;
    height: 55px;
    border-radius: 5px;
    margin-top: 1rem;
    gap: 15px;
    padding-inline: 1rem; 
    overflow-x: auto; /* Ativa o scroll horizontal automaticamente */
    white-space: nowrap; /* Impede quebra de linha e mantém o conteúdo na mesma linha */
    background-color: #F2F2F2;
    display: flex; /* Alinha os itens horizontalmente */
    align-items: center; /* Centraliza o conteúdo verticalmente */
    justify-content: space-between;

    > a {
        cursor: pointer;
        font-size: 0.8rem;
        padding-right: 10px;
        border-right: 1px solid black;
    }

        /* Estilizando o scrollbar para WebKit */
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

    /* Estilizando o scrollbar para Firefox */
    scrollbar-width: thin;
    scrollbar-color: rgba(0, 0, 0, 0.3) transparent;
`;

export { Container }