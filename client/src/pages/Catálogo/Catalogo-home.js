
import React from 'react';
import Posts from './Posts/Posts';
import Container from '@mui/material/Container';
import Pagination from './Pagination';
import { useLocation } from 'react-router-dom';
import styled from 'styled-components';
import { useSelector } from "react-redux";


const CatalogoHome = () => {

    const query = new URLSearchParams(useLocation().search);
    const page = query.get('page') || 1;
    const { posts } = useSelector((state) => state.posts);

    return (
        <>
            <Container bgcolor='#e3e3e3'>
                {posts.length === 0 ? <h1>No hay resultados</h1> : <Posts />}
                <PaginationLayout>
                    <Pagination page={page} />
                </PaginationLayout>
            </Container>
        </>
    );

};

const PaginationLayout = styled.div`
    justify-content: center;
    margin: 2rem;
    @media screen and (max-width: 780px) {
        justify-content: center;
}
`

export default CatalogoHome;