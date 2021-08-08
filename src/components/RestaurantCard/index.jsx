import React from 'react';
import { Restaurant, RestaurantInfo, Title, Address } from './style';


export function RestaurantCard () {
    return (
        <Restaurant>
            <RestaurantInfo>
                <Title>Nome do restaurante</Title>
                <p>Avaliação</p>
                <Address>Rua:Paulista n 27 Rio de Janeiro.</Address>
            </RestaurantInfo>
        </Restaurant >

    );
}

export default RestaurantCard;

