import Table from "react-bootstrap/esm/Table";
import styled from "styled-components";


const BackgroundTable = styled.div`
    height: 400px;
    overflow-x: scroll;
    margin-top: 50px;
    background-color: #F2F2F2;

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

const Tables = styled(Table)`
    width: 900px;
    
`

export { Tables, BackgroundTable }