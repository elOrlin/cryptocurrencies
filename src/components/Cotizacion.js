import React from 'react';
import styled from 'styled-components';

const ResutladoDiv = styled.div`
    color: #FFF;
`;

const Info = styled.p`
    font-size: 18px;

    span {
        font-weight: bold;
    }
`;

const Precio = styled.p`
    font-size: 30px;
`;

const Cotizacion = ({resultado}) => {

    console.log(resultado)

    if(Object.keys(resultado).length === 0) return null;

    return ( 
        <ResutladoDiv>
            <Precio>El precio es {resultado.PRICE}</Precio>
                <Info>Precio mas alto del dia: <span>{resultado.HIGHDAY}</span></Info>
                    <Info>Precio mas bajo del dia: <span>{resultado.LOWDAY}</span></Info>
                <Info>Variacion Ultimas 24 horas: <span>{resultado.CHANGEPCT24HOUR}</span></Info>
            <Info>Ultima Actualizacion: <span>{resultado.LASTUPDATE}</span></Info>
        </ResutladoDiv>
     );
}
 
export default Cotizacion;