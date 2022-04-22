import React from 'react'
import styled from 'styled-components';
import { useLocation } from 'react-router-dom';
import { useState } from 'react';

const Container = styled.div`
width: 100%;
align-items: center;
display: flex;
justify-content: space-evenly;
position: fixed;
z-index: 998;
background: #fff;
padding: 1rem;

@media screen and (max-width: 768px) {
    margin-left: 5rem;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
}
`;


const Filter = styled.div`


@media screen and (max-width: 768px) {
}
`;

const Select = styled.select`
border-radius: 5px;
background: #fff;

@media screen and (max-width: 768px) {
    align-content: flex-end;
    background: #fff;
    margin-left: 3rem;  
}
`;

const Option = styled.option`
`;


const Productfilter = () => {
    const location = useLocation();
    const cat = location.pathname.split("/")[1];
    const [filter, setFilters] = useState({})
    const [sort, setSort] = useState("reciente")
    const handleFilters = (e) => {
        const value = e.target.value;
        setFilters({
            ...filter,
            [e.target.name]: value
        })
    }
    console.log(cat, filter, sort);


    return (
        <div>
            <Container>
                <Filter>Tipo
                    <Select name='type' onChange={handleFilters}>
                        <Option disabled>
                            Carro
                        </Option>
                        <Option>Carro</Option>
                        <Option>Camioneta bro</Option>
                        <Option>Camión</Option>
                    </Select>
                </Filter>
                <Filter>Marca
                    <Select name='brand' onChange={handleFilters}>
                        <Option disabled>
                            -
                        </Option>
                        <Option>Toyota</Option>
                        <Option>Ford</Option>
                        <Option>Chevrolet</Option>
                        <Option>Honda</Option>
                        <Option>Chery</Option>
                    </Select>
                </Filter>
                <Filter>Precio
                    <Select name='price' onChange={handleFilters}>
                        <Option disabled>
                            -
                        </Option>
                        <Option>500$ - 2000$</Option>
                        <Option>2000$ - 4000$</Option>
                        <Option>4000$ - 8000$</Option>
                        <Option>8000$ - 12000$</Option>
                        <Option>12000$ - 20000$</Option>
                        <Option>20000$ o más</Option>
                    </Select>
                </Filter>
                <Filter>Transmisión
                    <Select name='transmission' onChange={handleFilters}>
                        <Option disabled>
                            -
                        </Option>
                        <Option>Automático</Option>
                        <Option>Sincrónico</Option>
                    </Select>
                </Filter>
                <Filter>Ordenar por
                    <Select onChange={(e) => setSort(e.target.value)}>
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

