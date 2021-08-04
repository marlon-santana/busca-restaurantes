import React, { useState }  from 'react';
import logo from '../../assets/logo.svg';
import { Container, Search } from './styles';
import TextField, { Input } from '@material/react-text-field';
import MaterialIcon from '@material/react-material-icon';



export function Home() {
    const [inputValue, setInputValue] = useState('');
    return (
        <Container>
            <Search>
                <img src={logo} alt="texto da logo"></img>
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
            </Search>
        </Container>
    );
};