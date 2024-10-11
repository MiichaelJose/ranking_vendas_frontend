import styled from "styled-components";
import Form from "react-bootstrap/Form";

const Container = styled.main`
    width: 100%;
    height: 75px;
    background-color: rgb(29, 28, 65);

    > div {
        width: 100%;
        height: 100%;
        border-bottom: 2px solid #EBEBEB;
        padding-inline: 1rem;
        justify-content: space-between;
        align-items: center;
    }
`;

const Mobile = styled.div`
    display: flex;
    color: white;

    > div {
        display: flex;
        flex-direction: column;
        justify-content: center;

        > div {
            display: flex;
            margin-top: 2px;
            box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.3); 
            border-radius: 5px;
            padding: 5px;
        }

        img {
            margin-left: 2px;
            height: 15px;
            width: 15px;
            cursor: pointer;
        }
    }

    > svg {
        height: 32px;
        cursor: pointer;
        fill: white !important; /* Usa !important para forçar a cor */
    }

    @media (min-width: 800px) {
        display: none;
    }
`;

const Desktop = styled.div`
    display: none;

    @media (min-width: 800px) {
        display: flex;
    }
`;

const LinkPage = styled.nav`

    width: 275px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    > p {
        font-size: 0.8rem;
        border-radius: 5px;
        padding: 0.3rem;
        color: white;
        background-color: rgb(29, 28, 65);
        box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.171); 
        cursor: pointer;
    }
`;

const Profile = styled.section`
    display: flex;
    width: 170px;
    justify-content: space-between;
    align-items: center;
    color: white;

    .circle {
        cursor: pointer;
        height: 25px;
        width: 25px;
        background-color: rgb(71, 70, 104);
        border-radius: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .circle > img {
        height: 15px;
        width: 15px;
    }

    .profile {
        border-left: 1px solid black;
        display: flex;
        align-items: center;
        justify-content: center;
        padding-inline: 1rem;
    }

    .profile  > img {
        height: 45px;
        width: 45px;
        border-radius: 2rem;
        margin-right: 7px;
    }
`;

const CustomSelect = styled(Form.Select)`
    border-color: gray;
    background-color: rgba(49, 48, 86, 0);
    color: white;

    &:focus {
        box-shadow: none; /* Remove o efeito de sombra */
    }
`;

export { Container, Desktop, Mobile, Profile, LinkPage, CustomSelect }