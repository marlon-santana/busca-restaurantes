import React from 'react';
import { Restaurant, RestaurantInfo, Title, Address, RestaurantPhoto } from './style';
import  ReactStars from 'react-rating-stars-component';
import restaurante from '../../assets/restaurante-fake.png'


export function RestaurantCard () {
    return (
        <Restaurant>
            <RestaurantInfo>
                <Title>Nome do restaurante</Title>
                <ReactStars count={5} isHalf value={4} edit={false} activeColor="#e7711c"/>
                <Address>Rua:Paulista n 27 Rio de Janeiro.</Address>
            </RestaurantInfo>
            <RestaurantPhoto src={restaurante} alt="foto restaurante" />
        </Restaurant >

    );
}

export default RestaurantCard;

