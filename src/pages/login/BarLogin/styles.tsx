import styled from 'styled-components'

const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: #b38f8f;
`;

const Container = styled.main`
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

  > div {
    height: 50%;
    width: 85%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  .section-btn-register {
    border-bottom: 1px solid rgba(255, 255, 255, 0.15);
    padding-bottom: 15px;
    
    > p {
      margin-top: 7px;
    }
  }

  .form {
    display: flex;
    flex-direction: column;

    > label {
      display: inline-block;
      margin-top: 15px;
    }

    > input {
      width: 100%;
      height: 35px;
      border-radius: 5px;
      margin-top: 5px;
      padding-left: 10px;
    }

    > p {
      text-align: right;
      font-size: 0.8em;
      margin-top: 7px;
    }
  }

  button {
    height: 40px;
    border-radius: 5px;
    background-color: rgb(255, 209, 0);
    color: white;
  }
`;

export { Title, Container}