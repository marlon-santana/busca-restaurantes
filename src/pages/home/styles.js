import styled from 'styled-components';
import Slider from 'react-slick';




export const Wrapper = styled.div`
display: flex;
`;

 export const Container = styled.aside`
background-color: ${(props) => props.theme.colors.background};
width: 360px;
height: 100vh;
overflow-y: auto;

`;

export const Search = styled.section `
display:flex;
flex-direction: column;
justify-content: center;
background: white;
padding: 16px;

`;

export const Logo = styled.img`
margin-bottom: 15px;

`;

export const Carousel = styled(Slider)`
.slick-slide {
    margin-right: 40px;
    color: white;
    
}


`;

export const Map = styled.div`
display: flex;
background-color: blue;
width: 100vw;
height: 100vh;

`;

export const CarouselTitle = styled.h1`
font-family: Roboto, sans-serif ;
color: #808080;
font-size: 24px;
font-weight: bold;
line-height: 29px;
margin: 16px 0;

`;