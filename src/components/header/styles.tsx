import styled from "styled-components";

const Container = styled.main`
    width: 100%;
    height: 75px;

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
        color: black;
        box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.171); 
        cursor: pointer;
    }
`;

const Profile = styled.section`
    width: auto;
    display: flex;

    > div {
        display: flex;
        align-items: center;
        color: black;
    }

    > div > img {
        height: 45px;
        width: 45px;
        border-radius: 2rem;
        margin-right: 7px;
    }
`;

export { Container, Desktop, Mobile, Profile, LinkPage }