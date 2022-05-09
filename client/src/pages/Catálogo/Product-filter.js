import React, { useEffect } from 'react';
import styled from 'styled-components';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { getPostsByCategory, getPosts } from '../../actions/posts';

const Container = styled.div`
text-align: center;
font-size: large;
border: none;
width: 100%;
align-items: center;
display: flex;
justify-content: space-evenly;
position: fixed;
z-index: 2000;
background: #202020;
color: #f7df1e;
padding: 1rem;

@media screen and (max-width: 768px) {
    gap: 2px;
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
}
`;

const Title = styled.p`
    
    @media screen and (max-width: 768px) {
}
`

const Filter = styled.div`
background-color: #202020;
border-radius: 5px;

`;

const Select = styled.select`
text-align: center;
border: none;
background: #202020;
color: #f7df1e;
width: 8rem;
border-radius: 5px;
font-size: 15px;


@media screen and (max-width: 768px) {
    width: 8rem;
    justify-items: center;
    align-self: center;
    flex-direction: column;
    background: #202020;
}
`;

const Option = styled.option`
align-items: center;
`;

const Productfilter = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [filters, setFilters] = useState({})
    const page = 1;

    const writer = (e) => {

        const value = e.target.value;
        if (value !== '-') {
            setFilters({
                ...filters,
                [e.target.name]: value
            });
        } else {
            delete filters[e.target.name];
            setFilters({ ...filters });
        };

    }

    useEffect(() => {

        let element = '';

        if (Object.keys(filters).length !== 0) {
            for (let key in filters) {
                if (key === 'price') {
                    element = `minPrice=${filters[key].split(',')[0]}&maxPrice=${filters[key].split(',')[1]}&${element}`;
                } else {
                    element = `${key}=${filters[key]}&${element}`;
                }
            }
        }

        let test = new URLSearchParams(element);

        if (Object.keys(filters).length > 0) {
            navigate(`/catalogo/search?page=${page}&${test}`);
            dispatch(getPostsByCategory(filters, page, test));
        } else {
            navigate(`/catalogo/search?page=${page}`);
            dispatch(getPosts(page));
        }

    }, [dispatch, filters, page, navigate]);


    return (
        <div>
            <Container>
                <Filter><Title>Tipo </Title>
                    <Select name='type' onChange={writer}>
                        <Option value={'-'}>Todos</Option>
                        <Option value={'Carro'} >Carro</Option>
                        <Option value={'Camioneta'} >Camioneta</Option>
                        <Option value={'Camion'} >Camión</Option>
                    </Select>
                </Filter>
                <Filter><Title>Marca </Title>
                    <Select name='brand' onChange={writer}>
                        <Option value={'-'}>Todos</Option>
                        <Option value={'Toyota'}>Toyota</Option>
                        <Option value={'Ford'}>Ford</Option>
                        <Option value={'Chevrolet'}>Chevrolet</Option>
                        <Option value={'Honda'}>Honda</Option>
                        <Option value={'Chery'}>Chery</Option>
                    </Select>
                </Filter>
                <Filter><Title>Precio </Title>
                    <Select name='price' onChange={writer}>
                        <Option value={'-'}>Todos</Option>
                        <Option value={[500, 2000]}>500$ - 2000$</Option>
                        <Option value={[2000, 4000]}>2000$ - 4000$</Option>
                        <Option value={[4000, 8000]}>4000$ - 8000$</Option>
                        <Option value={[8000, 12000]}>8000$ - 12000$</Option>
                        <Option value={[12000, 20000]}>12000$ - 20000$</Option>
                        <Option value={'20k+'}>20000$ o más</Option>
                    </Select>
                </Filter>
                <Filter><Title>Transmisión </Title>
                    <Select name='transmission' onChange={writer}>
                        <Option value={'-'}>-</Option>
                        <Option value={'Automatico'}>Automático</Option>
                        <Option value={'Sincronico'}>Sincrónico</Option>
                    </Select>
                </Filter>
                <Filter><Title>Ordenar por </Title>
                    <Select name='sort' onChange={writer}>
                        <Option value={'-'}>-</Option>
                        <Option value={"reciente"}>Más reciente</Option>
                        <Option value={"ascendente"}>Precio ascendente</Option>
                        <Option value={"descendente"}>Precio descendente</Option>
                    </Select>
                </Filter>
            </Container>
        </div>
    )
}

export default Productfilter;