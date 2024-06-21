import styled from "styled-components";


export const Container = styled.div`
  display: flex;
  flex-direction:column;
  box-sizing: border-box;

`;

export const Form = styled.form`
display:flex;
flex-direction: column;
align-items: center;
min-width:700px;

border: 1px solid #ffff55;
height: 300px;

box-sizing: border-box;

`;

export const Painel = styled.div`
font-size: 30px;
color: red;
text-shadow: 1px 1px 2px #000;
height:105px;

`;

export const Painel2 = styled.div`
font-size: 30px;
color: #00ee17;
text-shadow: 1px 1px 2px #000;
height:105px;

`;

export const Boxinput = styled.div`

display: flex;
width: 90%;
align-items: center;
justify-content: center;

input{
  height: 58px;
  box-sizing: border-box;
  width: 80%;
  font-size: 30px;
  text-align: center;
}

`;

export const SubmitButton = styled.button`
display: flex;
align-items: center;
justify-content: center;

height: 58px;
width: 58px;

`;

