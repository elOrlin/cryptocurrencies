import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import useMoneda from '../hooks/useMoneda';
import useCriptomoneda from '../hooks/useCriptomoneda';
import Error from './Error';
import axios from 'axios';

const Boton = styled.input`
    margin-top: 20px;
    font-weight: bold;
    font-size: 20px;
    padding: 10px;
    background-color: #66a2fe;4
    border: none;
    width: 100%;
    border-radius: 10px;
    color: #FFF;
    transition: background-color .3s ease;

    &:hover {
        background-color: #326AC0;
        cursor: pointer;
    }
`;

const Formulario = ({guardarMoneda, guardarCriptomoneda}) => {

    const [listacripto, guardarCriptomonedas] = useState([]);
    const [error, guardarError] = useState(false);

    const Monedas = [
        {codigo: 'EUR', nombre: 'Euro'},
        {codigo: 'USD', nombre: 'Dolar Estado unidenses'},
        {codigo: 'MXN', nombre: 'Peso Mexicano'}
    ]

    const [moneda, SelectMonedas] = useMoneda('Elige tu moneda', '', Monedas);
    const [criptomoneda, SelectCripto] = useCriptomoneda('Elige tu criptomoneda', '', listacripto);


    useEffect(() => {
        const consultarApi = async () => {
            const url = `https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD`;

            const resultado = await axios.get(url)

            guardarCriptomonedas(resultado.data.Data)
        } 
        consultarApi()
    }, [])

    const cotizarMoneda = e => {
        e.preventDefault();

        if(moneda === '' || criptomoneda === ''){
            guardarError(true)
            return;
        }

        guardarError(false);

        guardarMoneda(moneda)
        guardarCriptomoneda(criptomoneda)

    }
    
    return ( 
        <form
            onSubmit={cotizarMoneda}
        >
            {error ? <Error mensaje='Todos los campos son obligatorios'/> : null}

            <SelectMonedas/>

            <SelectCripto/>

            <Boton
                type="submit"
                value="Calcular"
            />
        </form>
     );
}
 
export default Formulario;