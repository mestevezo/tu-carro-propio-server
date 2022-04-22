import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux'
import Posts from './Posts/Posts';
import { getPosts } from '../../actions/posts';
import Container from '@mui/material/Container';
import Grow from '@mui/material/Grow';
import Grid from '@mui/material/Grid';
import styled from 'styled-components';

const Caja = styled.div`
    margin-top: 6rem;

    @media screen and (max-width: 768px) {
    margin-top: 13rem;
    flex-direction: column;
    align-items: center;
    align-items: flex-start;
}
`

const CatalogoHome = () => {
    const [currentId, setCurrentId] = useState(0);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getPosts());
    }, [currentId, dispatch])
    return (
        <>
            <Caja>
                <Container>
                    <Grow in>
                        <Container>
                            <Grid >
                                <Posts setCurrentId={setCurrentId} />
                            </Grid>
                        </Container>
                    </Grow>
                </Container>
            </Caja>
        </>
    )
}

export default CatalogoHome;
