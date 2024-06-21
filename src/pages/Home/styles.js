import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #252525;
  height: 100vh; 
  width: 100%; 
  align-items: center;
  margin: 0; 

h1{
    display: flex;
    align-items: center;
    justify-content: center;

    min-width: 100%;
    font-size:3rem;
    margin-bottom: 0px;
    background-color: #ffff55;
    margin: 0;
    padding-top:20px;
    text-shadow: 
      -1px -1px 0 #000;
}






`;

export const Descricao = styled.div`

  color: white;
  text-align: justify;
  min-width: 700px;
  box-sizing: border-box;
  padding: 0 20px;
  font-size: 16px;

  h4{
    width: 700px;
    display: flex;
    align-items: center;
    text-align: center;
    flex-wrap: wrap;
    margin: 0;
    box-sizing: border-box;
    font-size: 20px;
}



`;
export const Link = styled.div`


display: flex;
flex-direction: row;
align-items: center;
justify-content: center;

  a{
    font-size: 18px;
    background-color: #f4eb35;
    color: #000;
    padding: 16px;
    margin: 0 10px;
    border-radius: 4px;
    box-shadow: 1px 1px 1px #000;
    text-decoration: none;
    }
`;
