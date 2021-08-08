import styled from 'styled-components';

export const Restaurant = styled.div`

display:flex;
justify-content: space-between;
cursor: pointer;
margin-top: 5px;
padding: 16px;
background-color: white;
border-left: 5px solid transparent;
:hover {
    background-color: #D3D3D3;
    border-left: 5px solid purple;
}
`;
export const RestaurantInfo = styled.div`
display: flex;
flex-direction: column;

`;

export const Title = styled.span`
font-family: Roboto, sans-serif;
font-size: 20px;
font-weight: bold;
color: #696969;
line-height: 29px;
margin-bottom:10px;

`;

export const Address = styled.span`
font-family: Roboto, sans-serif;
font-size: 16px;
color: #696969;
line-height: 19px;
margin-bottom:10px;
margin-top: 10px;

`;

export const RestaurantPhoto = styled.img`
width: 100px;
height: 100px;
border-radius: 16px;
object-fit: cover;


`;