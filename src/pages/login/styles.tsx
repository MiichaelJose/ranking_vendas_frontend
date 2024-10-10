import styled from 'styled-components'

const Container = styled.main`
  display: flex;
  width: 100%;
`;

const SectionImage = styled.div`
  background-color: black;
  background-image: url("https://app.rankingdevendas.com.br/static/media/login-1.23d5039864bf74200eed.jpg");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: inherit;
  flex: 1 1;
  transition: 1s;
`;

const SectionLogin = styled.main`
  height: 100vh;
  width: 400px;
  background-color:rgb(29, 28, 65);
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  p {
    color: rgb(180, 179, 197);
  }

  span {
    color: white;
    text-decoration: underline;
  }

  > section {
    height: 100%;
    width: 85%;
    max-height: 350px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  > section > div {
    border-bottom: 1px solid rgba(255, 255, 255, 0.15);
    padding-bottom: 15px;
    
    > p {
      margin-top: 7px;
    }
  }

  form {
    display: flex;
    flex-direction: column;

    > label {
      display: inline-block;
      margin-top: 20px;
    }

    > input {
      width: 100%;
      height: 40px;
      border-radius: 5px;
      margin-top: 5px;
      padding-left: 10px;
    }

    > p {
      text-align: right;
      font-size: 0.8em;
      margin-top: 5px;
    }
  }

  button {
    height: 40px;
    border-radius: 5px;
    background-color: rgb(255, 209, 0);
    color: white;
    margin-top: 1.3rem;
  }
`;

export { Container, SectionLogin, SectionImage}