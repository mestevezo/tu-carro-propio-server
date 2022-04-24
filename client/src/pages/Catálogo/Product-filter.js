import React, { useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import { useLocation } from 'react-router-dom';
import { useState } from 'react';
import { Route, useNavigate } from 'react-router-dom';

import { getPostsByCategory, getAll } from '../../actions/posts';

import { FETCH_BY } from '../../constants/actionTypes';
import { useDispatch } from 'react-redux';

const Container = styled.div`
text-align: center;
font-size: large;
border: none;
width: 100%;
align-items: center;
display: flex;
justify-content: space-evenly;
position: fixed;
z-index: 998;
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


function useQuery() {
    return new URLSearchParams(useLocation().search)
}

const Productfilter = () => {
    const query = useQuery();
    const page = query.get('page') || 1;
    const [sorteredProducts, setSorteredProducts] = useState([]);
    const dispatch = useDispatch();
    const [datalist, setDataList] = useState([]);

    const navigate = useNavigate();

    //const cat = location.pathname.split("/");

    const [filters, setFilters] = useState({})
    const [sort, setSort] = useState("")
    const [list, setList] = useState(datalist);


    const writer = (e) => {
        const value = e.target.value;

        setFilters({
            ...filters,
            [e.target.name]: value
        });

    }

    const handleFilters = () => {

        let updatedList = datalist;


        if (filters.type) {

            if (filters.type === 'all') {
                updatedList = Object.values(updatedList).filter(user => user.type !== filters.type);
            }
            else {
                updatedList = Object.values(updatedList).filter(user => user.type === filters.type);
            }

        }

        if (filters.brand) {
            if (filters.brand === 'all') {
                updatedList = Object.values(updatedList).filter(user => user.brand !== filters.brand);

            }
            else { updatedList = Object.values(updatedList).filter(user => user.brand === filters.brand); }

        }

        if (filters.transmission) {
            updatedList = Object.values(updatedList).filter(user => user.transmission === filters.transmission);
        }

        if (filters.price) {

            if (filters.price === 'all') {
                updatedList = updatedList.filter(item => item.price >= 0);
            }

            else if (filters.price === '20k+') {
                updatedList = updatedList.filter(item => item.price >= 20000);
            }

            else {
                const minPrice = filters.price.split(',')[0];
                const maxPrice = filters.price.split(',')[1];

                updatedList = updatedList.filter(item => item.price >= minPrice && item.price <= maxPrice);

            }

        }

        if (sort === 'reciente') {

            updatedList.sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());

        }

        if (sort === 'ascendente') {

            updatedList.sort((a, b) => a.price - b.price);

        }

        if (sort === 'descendente') {

            updatedList.sort((a, b) => b.price - a.price);

        }

        setList(updatedList);
        setSorteredProducts(updatedList);

        dispatch({ type: FETCH_BY, payload: updatedList });

    }


    useEffect(() => {
        const getProducts = async () => {
            try {
                const res = await axios.get(`http://localhost:5000/posts/Catalogo?page=${page}`);

                setDataList(res.data.data);


            } catch (err) { }
        };
        getProducts();
    }, [page]);



    useEffect(() => {
        handleFilters();
    }, [dispatch, filters, sort])


    ///if(cat && filters!={} ){navigate(`/Catalogo/search?type=${filters.type}`)}else{navigate('/Catalogo')}





    return (
        <div>
            <Container>
                <Filter><Title>Tipo </Title>
                    <Select name='type' onChange={writer}>
                        <Option value={'all'}>
                            Todos
                        </Option>
                        <Option value={'Carro'} >Carro</Option>
                        <Option value={'Camioneta'} >Camioneta</Option>
                        <Option value={'Camion'} >Camión</Option>
                    </Select>
                </Filter>
                <Filter><Title>Marca </Title>
                    <Select name='brand' onChange={writer}>
                        <Option disabled>
                            -
                        </Option>
                        <Option value={'all'}>Todos</Option>
                        <Option value={'Toyota'}>Toyota</Option>
                        <Option value={'Ford'}>Ford</Option>
                        <Option value={'Chevrolet'}>Chevrolet</Option>
                        <Option value={'Honda'}>Honda</Option>
                        <Option value={'Chery'}>Chery</Option>
                    </Select>
                </Filter>
                <Filter><Title>Precio </Title>
                    <Select name='price' onChange={writer}>
                        <Option disabled>
                            -
                        </Option>
                        <Option value={'all'}>Todos</Option>
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
                        <Option >
                            -
                        </Option>
                        <Option value={'Automatico'}>Automático</Option>
                        <Option value={'Sincronico'}>Sincrónico</Option>
                    </Select>
                </Filter>
                <Filter><Title>Ordenar por </Title>
                    <Select onChange={(e) => setSort(e.target.value)}>
                        <Option>
                            -
                        </Option>
                        <Option value="reciente">Más reciente</Option>
                        <Option value="ascendente">Precio ascendente</Option>
                        <Option value="descendente">Precio descendente</Option>
                    </Select>
                </Filter>
            </Container>
        </div>
    )
}

export default Productfilter