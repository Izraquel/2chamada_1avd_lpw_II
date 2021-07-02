import styled from 'styled-components'

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

  table {
    width: 100%;
    max-width: 100%;
    padding: 20px;
  }

  input {
    padding: 4px;
    margin-bottom: 10px;
  }
  a {
    align-items: baseline;
    padding: 10px;

    background-color:#0097e6;
    padding: 8px 15px;
    border-radius: 5px;
    border: 0;
  }
  th {

    text-align: center;


  }
  td {
    text-align: center;

  }


 button {
    background-color:#0097e6;
    color: #fff;
    padding: 8px 15px;
    border-radius: 5px;
    border: 0;

    margin-left: 50px;


  }

  button:hover{
   background-color: #487eb0;
   transition: 1s

  }

`
export const Td = styled.div`
  color: #fff;
  display: flex;
  justify-content: end;

  a {
    text-decoration: none;
    display: flex;
  justify-content: end;

  margin-right: 10px;
  margin-left: 10px;

  }

`
