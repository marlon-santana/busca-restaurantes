import React, { useState }  from 'react';
import logo from '../../assets/logo.svg';
import { Container, Search } from './styles';
import TextField, { Input } from '@material/react-text-field';



export function Home() {
    const [inputValue, setInputValue] = useState('');
    return (
        <Container>
            <Search>
                <img src={logo} alt="texto da logo"></img>
                <TextField
                label='Pesquisar'
                outlined
               // onTrailingIconSelect={() => this.setState({value: ''})}
                ><Input
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                />
                </TextField>
            </Search>
        </Container>
    );
};