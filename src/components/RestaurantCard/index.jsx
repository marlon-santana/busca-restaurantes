import React from 'react';
import { Restaurant, RestaurantInfo, Title, Address, RestaurantPhoto } from './style';
import  ReactStars from 'react-rating-stars-component';
import restaurante from '../../assets/restaurante-fake.png';



export function RestaurantCard ({ restaurant }) {
    return (
        <Restaurant>
            <RestaurantInfo>
                <Title>{restaurant.name}</Title>
                <ReactStars count={5} isHalf value={restaurant.rating} edit={false} activeColor="#e7711c"/>
                <Address>{restaurant.vicinity || restaurant.formatted_adrdress}</Address>
            </RestaurantInfo>
            <RestaurantPhoto src={restaurant.photos ? restaurant.photos[0].getUrl() : restaurante} alt="foto restaurante" />
        </Restaurant >

    );
}

export default RestaurantCard;

