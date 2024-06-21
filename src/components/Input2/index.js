import React, { useState, useEffect } from "react";
import {
    Container,
    Form, Boxinput, Painel

} from "./styles"

import { SiConvertio } from "react-icons/si";

export default function Input2() {

    const [letreiro, setLetreiro] = useState('');
    const [painel, setPainel] = useState('');
    const [resultado, setResultado] = useState('');

    function atualizarLetreiro(e) {
        let indice = e.target.value.length - 1;
        let string = e.target.value

        setPainel('')

        if (string[indice] != '0' && string[indice] != '1' && string[indice] != null) {
            setPainel(
                `Valor ${string[indice]} não permitido! Apenas 0 e 1!`
            );
        } else {
            setLetreiro(string);
        }

        let bin = parseInt(letreiro, 2)
        let resultado = `Valor em Binário: ${bin}`
        setResultado(resultado)


    }

    function converter(e) {
        e.preventDefault();
        let bin = parseInt(letreiro, 2)
        setResultado(bin)

    }

    useEffect(() => {
        console.log(letreiro); // Logando o valor atualizado do estado
    }, [letreiro]);

    return (
        <Container>
            <Form onSubmit={converter}>
                <Painel>
                    <p>{resultado}</p>
                </Painel>
                <Boxinput>
                    <input
                        type="text"
                        placeholder="Digite o N Binário!"
                        value={letreiro}
                        onChange={atualizarLetreiro}
                    />
                </Boxinput>
            </Form>
        </Container>
    )
}