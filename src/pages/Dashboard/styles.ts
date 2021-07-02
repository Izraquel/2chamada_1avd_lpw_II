import styled from "styled-components"

export const Container = styled.div`
  width: 100%;
  max-width: 100%;
  margin: 30px auto 0;
  padding: 20px;
  background: #fff;
  border: 1px solid #ddd;
  border-radius: 8px;
  text-align: center;

  h1 {
    margin-bottom: 10px;
  }

  form {
    display: flex;
    flex-direction: column;

    width: 100%;
    max-width: 90%;
    margin: 15px auto 0;
    padding: 20px;


  input {
    padding: 4px;
    margin-bottom: 10px;
    //border-radius: 8px;
  }

  button {
    background-color: #0097e6;
    padding: 8px 15px;
    border-radius: 5px;
    border: 0;
  }

  button:hover{
   background-color: #487eb0;
   transition: 1s

  }

`


