import React, { useState, useEffect } from "react";
import {
    Container,
    SubmitButton,
    Form, Boxinput, Painel, Painel2

} from "./styles"

import { SiConvertio } from "react-icons/si";

export default function Input() {

    const [letreiro, setLetreiro] = useState('');
    const [painel, setPainel] = useState('');
    const [resultado, setResultado] = useState('');

    function atualizarLetreiro(e) {
        let indice = e.target.value.length - 1;
        let string = e.target.value

        setPainel('')

        if (e.target.value.length > 8) {
            setPainel('É permittido apenas 8 dígitos!')
        }
        else {
            if (string[indice] != '0' && string[indice] != '1' && string[indice] != '') {
                setPainel(
                    `Valor ${string[indice]} não permitido! Apenas 0 e 1!`
                );
            } else {
                setLetreiro(string);
            }

        }
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
                    <p>{painel}</p>
                </Painel>

                <Boxinput>
                    <input
                        type="text"
                        placeholder="Digite o N Binário!"
                        value={letreiro}
                        onChange={atualizarLetreiro}
                    />
                    <SubmitButton>
                        <SiConvertio size={30} />
                    </SubmitButton>
                </Boxinput>

                <Painel2>
                    <p>O valor binário '{letreiro}' equivale a: {resultado} em decimal</p>
                </Painel2>

            </Form>
        </Container>
    )
}