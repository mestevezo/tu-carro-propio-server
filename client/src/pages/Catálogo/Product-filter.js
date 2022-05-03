import React, { useEffect } from 'react';
import styled from 'styled-components';
import { useLocation } from 'react-router-dom';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';


import { getPostsByCategory } from '../../actions/posts';

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


function useQuery() {
    return new URLSearchParams(useLocation().search)
}

const Productfilter = () => {
    const query = useQuery();

    const dispatch = useDispatch();
    const location = useLocation();
    const navigate = useNavigate();
    const cat = location.pathname.split('/')[1];
    console.log(cat);
    //    const { numberOfPages } = useSelector((state) => state.posts);

    const [filters, setFilters] = useState({})




    const writer = (e) => {
        const value = e.target.value;


        setFilters({
            ...filters,
            [e.target.name]: value
        });

    }
    const key = Object.keys(filters);
    let element = '';

    if (filters !== {}) {
        for (let i = 0; i < key.length; i++) {

            if (key[i] === 'price') {

                element = `minPrice=${filters[key[i]].split(',')[0]}&maxPrice=${filters[key[i]].split(',')[1]}&${element}`;

            } else {
                element = `${key[i]}=${filters[key[i]]}&${element}`;
            }
        }


    }

    let page = query.get('page') || 1;

    useEffect(() => {
        page = 1;
    }, [dispatch, filters]);

    useEffect(() => {
        let test = new URLSearchParams(element)
        if (Object.keys(filters).length > 0) {
            dispatch(getPostsByCategory(filters, page, test));
            navigate(`/catalogo/search?page=${page}&${test}`)
        }

    }, [dispatch, filters, page]);



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
                    <Select name='sort' onChange={writer}>
                        <Option>
                            -
                        </Option>
                        <Option value={"reciente"}>Más reciente</Option>
                        <Option value={"ascendente"}>Precio ascendente</Option>
                        <Option value={"descendente"}>Precio descendente</Option>
                    </Select>
                </Filter>
            </Container>
        </div>
    )
}

export default Productfilter