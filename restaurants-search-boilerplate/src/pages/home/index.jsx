import React, { useState }  from 'react';
import logo from '../../assets/logo.svg';
import { Container, Search, Wrapper,Logo, Map, CarouselTitle } from './styles';
import TextField, { Input } from '@material/react-text-field';
import MaterialIcon from '@material/react-material-icon';
import restaurantes from '../../assets/restaurante-fake.png';
import Slider from 'react-slick';




export function Home() {
    const [inputValue, setInputValue] = useState('');

    const Settings = {
        dots: false,
        infinite: true,
        autoplay: true,
        speed: 300,
        slidesToShow: 4,
        slidesToScroll: 4,
        adaptiveHeight: true,
      };

    return (
        <Wrapper>
         <Container>
            <Search>
                <Logo src={logo} alt="texto da logo"></Logo>
                <TextField
                label='Pesquisar Restaurantes'
                outlined
               // onTrailingIconSelect={() => this.setState({value: ''})}
               trailingIcon={<MaterialIcon role="button" icon="search" />}
                ><Input
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                />
                </TextField>
                <CarouselTitle>Na sua Ârea</CarouselTitle>
                <Slider {...Settings}>
                    <div>
                        <img src={restaurantes} />
                    </div>
                    <div>
                        <img src={restaurantes} />
                    </div>
                    <div>
                        <img src={restaurantes} />
                    </div>
                    <div>
                        <img src={restaurantes} />
                    </div>
                </Slider>
            </Search>
         </Container>
          <Map />
        </Wrapper>
    );
};