import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux'
import Posts from './Posts/Posts';
import { getPosts } from '../../actions/posts';
import Container from '@mui/material/Container';
import Grow from '@mui/material/Grow';
import Grid from '@mui/material/Grid';

const CatalogoHome = () => {
    const [currentId, setCurrentId] = useState(0);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getPosts());
    }, [currentId, dispatch])
    return (
        <>
            <Container maxWidth="lg">
                <Grow in>
                    <Container>
                        <Grid item xs={12} sm={7} md={9}>
                            <Posts setCurrentId={setCurrentId} />
                        </Grid>
                    </Container>
                </Grow>
            </Container>
        </>
    )
}

export default CatalogoHome;
