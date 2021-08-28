import React, { useState }  from 'react';
import { useSelector } from 'react-redux';
import logo from '../../assets/pizza-logo.png';
import { Container, Search,Carousel, Wrapper,Logo, CarouselTitle } from './styles';
import TextField, { Input } from '@material/react-text-field';
import MaterialIcon from '@material/react-material-icon';
import restaurante from '../../assets/restaurante-fake.png';
import { Card, RestaurantCard, Map } from '../../components';
import Modal from '../../components/Modal';





export function Home() {
    const [inputValue, setInputValue] = useState('');
    const [modalOpened, setModalOpened] = useState(false);
    const [query, setQuery] = useState(null);
    const { restaurants } = useSelector((state) => state.restaurants);

    const Settings = {
        dots: false,
        infinite: true,
        autoplay: true,
        speed: 300,
        slidesToShow: 4,
        slidesToScroll: 4,
        adaptiveHeight: true,
      };

      function handelKeyPress(e) {
        if(e.key === 'Enter') {
            setQuery(inputValue);
        }
      }

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
                onKeyPress={handelKeyPress}
                onChange={(e) => setInputValue(e.target.value)}
                />
                </TextField>
                <CarouselTitle>Na sua Ârea</CarouselTitle>
                <Carousel {...Settings}>
                    {restaurants.map((restaurant) => (
                        <Card 
                        key={restaurant.place_id}
                        photo={restaurant.photos ? restaurant.photos[0].getUrl() : restaurante}
                        title={restaurant.name}
                     />
                    ))}
                </Carousel>
            </Search>
            {restaurants.map((restaurant) => ( <RestaurantCard restaurant={restaurant} />
            ))}
         </Container>
          <Map query={query} />
          <Modal Open={modalOpened} onClose={() => setModalOpened(!modalOpened)}/>
          
        </Wrapper>
    );
};