import React from "react";
import Input from "../../components/Input";
import { Container } from "./styles";


export default function Home() {

    return (
        <Container>
            <h1>Bin2Dec</h1>
            <h4>Bin2Dec permite ao usuário inserir strings de até 8 dígitos binários, 0 e 1, em qualquer sequência e então exibir seu equivalente decimal.</h4>
            <Input />
        </Container>
    );
}
