import React from "react";
import Input from "../../components/Input";
import Input2 from "../../components/Input2";
import { Container, Descricao, Link } from "./styles";

import { SiLevelsdotfyi } from "react-icons/si";



export default function Home() {

    return (
        <>
            <Container id="Home">

                <h1>#Bin2Dec</h1>
                <Descricao>
                    <p><SiLevelsdotfyi /> <strong>**Nível:**</strong> 1-Iniciante</p>
                    <p>Binário é o sistema numérico no qual todos os computadores digitais são baseados.
                        Portanto é importante que os desenvolvedores entendam o binário, ou base 2,
                        matemática. O objetivo do Bin2Dec é proporcionar prática e
                        compreensão de como cálculos binários.
                    </p>

                    <p>Bin2Dec permite ao usuário inserir strings de até 8 dígitos binários, 0's
                        e 1, em qualquer sequência e, em seguida, exibe seu equivalente decimal.
                    </p>

                    <p>Este desafio exige que o desenvolvedor que o implementa siga estas
                        restrições:</p>

                    <ul>
                        <li>Arrays não podem ser usados ​​para conter os dígitos binários inseridos pelo usuário</li>
                        <li>Determinar o equivalente decimal de um dígito binário específico no
                            sequência deve ser calculada usando uma única função matemática, para
                            por exemplo, o logaritmo natural. Cabe a você descobrir qual função
                            usar.</li>
                    </ul>

                    <h4>Requisitos</h4>
                    <ul>
                        <li>[ok] O usuário pode inserir até 8 dígitos binários em um campo de entrada</li>
                        <li>[ok] O usuário deve ser notificado se algo diferente de 0 ou 1 for digitado</li>
                        <li>[ok] O usuário visualiza os resultados em um único campo de saída contendo o equivalente decimal (base 10) do número binário que foi inserido</li>
                    </ul>

                    <h4>Requisito Bônus</h4>
                    <ul>
                        <li>[ok] O usuário pode inserir um número variável de dígitos binários</li>
                    </ul>

                    <Link>
                        <a href="#V1">Requisitos</a>
                        <a href="#V2">Requisito Bônus</a>
                    </Link>
                </Descricao>
            </Container>
            <Container id='V1'>
                <h1>Bin2Dec</h1>
                <Input />
                <Link>
                    <a href="#Home">Voltar</a>
                </Link>
            </Container>

            <Container id='V2'>
                <h1>Bin2Dec - Requisito Bônus </h1>
                <Input2 />
                <Link>
                    <a href="#Home">Voltar</a>
                </Link>
            </Container>
        </>
    );
}
