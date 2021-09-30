import React, {Fragment, useState} from 'react';
import styled from 'styled-components';

const Label = styled.label`
    font-family: 'Bebas Neue', cursive;
    color: #FFF;
    text-transform: uppercase;
    font-weight: bold;
    font-size: 2.4rem;
    margin-top: 2rem;
    display: block;
`;

const Select = styled.select`
    width: 100%;
    display: block;
    padding: 1rem;
    -webkit-appeareance: none;
    border-radius: 10px;
    border: none;
    font-size: 1.2rem;
`;

const useCriptomoneda = (label, stateInitial, opciones) => {
    const [state, guardarState] = useState(stateInitial)

    const SelectCripto = () => (
        <Fragment>
            <Label>{label}</Label>
            <Select
                onChange={e => guardarState(e.target.value)}
                value={state}
            >
            <option value="">-- Seleccione --</option>
                {opciones.map(opcion => (
                    <option key={opcion.CoinInfo.Id} value={opcion.CoinInfo.Name}>{opcion.CoinInfo.FullName}</option>
                ))}
            </Select>
        </Fragment>
    )

    return [state, SelectCripto, guardarState];
}
 
export default useCriptomoneda;