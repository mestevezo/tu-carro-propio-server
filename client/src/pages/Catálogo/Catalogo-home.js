import React, { useState } from 'react';
import Posts from './Posts/Posts';
import Container from '@mui/material/Container';
import Pagination from './Pagination';
import { useLocation } from 'react-router-dom';
import styled from 'styled-components';


function useQuery() {
    return new URLSearchParams(useLocation().search)
}

const CatalogoHome = () => {
    const [currentId, setCurrentId] = useState(0);
    const query = useQuery();
    const page = query.get('page') || 1;




    return (
        <>

            <Container>
                <Posts setCurrentId={setCurrentId} />
                <PaginationLayout>
                    <Pagination page={page} />
                </PaginationLayout>
            </Container>

        </>
    )
}

const PaginationLayout = styled.div` 
    align-items: center;
    justify-content: center;
    margin-left: 40%;
    margin-bottom: 2rem;

    @media screen and (max-width: 780px) {
    align-items: center;
    margin: 2rem;
    margin-left: 4.5rem;
    width: 100%;
}
`

export default CatalogoHome;