
import React from 'react';
import Posts from './Posts/Posts';
import Container from '@mui/material/Container';
import Pagination from './Pagination';
import { useLocation } from 'react-router-dom';
import styled from 'styled-components';
import { useSelector } from "react-redux";
import SvgComponent from '../../components/Noresults/Noresults';


const CatalogoHome = () => {

    const query = new URLSearchParams(useLocation().search);
    const page = query.get('page') || 1;
    const { posts } = useSelector((state) => state.posts);

    return (
        <>
            <Container bgcolor='#e3e3e3'>
                {posts.length === 0 ?
                    <NoResultsContainer>
                        <SvgContainer>
                            <SvgComponent />
                        </SvgContainer>
                        <Noresults>Lo sentimos, tu búsqueda no tuvo resultados.</Noresults>
                    </NoResultsContainer>
                    :
                    <>
                        <Posts />
                        <PaginationLayout>
                            <Pagination page={page} />
                        </PaginationLayout>
                    </>}
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
const Noresults = styled.h1`
    margin-top: 5vh;
    margin-bottom: 20vh;
    text-align: center;
`
const NoResultsContainer = styled.div`
    display: block;
    justify-items: center;


    @media screen and (max-width: 780px) {
        margin-top: 20%;
        align-content: center;
}
`
const SvgContainer = styled.div`
    margin-left: 40%;

    @media screen and (max-width: 900px) {
        margin-left: 30%;
}

    @media screen and (max-width: 780px) {
        margin-left: 25%;
}

`

export default CatalogoHome;