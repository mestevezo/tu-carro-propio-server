import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux'
import Posts from './Posts/Posts';
import { getPosts } from '../../actions/posts';
import Container from '@mui/material/Container';
import Grow from '@mui/material/Grow';
import Grid from '@mui/material/Grid';
import Pagination from './Pagination';
import { Paper } from '@mui/material';
import { useLocation } from 'react-router-dom';

function useQuery(){
    return new URLSearchParams(useLocation().search)
}

const CatalogoHome = () => {
    const [currentId, setCurrentId] = useState(0);
    const dispatch = useDispatch();
    const query = useQuery();
    const page = query.get('page') || 1;
    
    /*
    useEffect(() => {
        dispatch(getPosts());
    }, [currentId, dispatch])
*/

    return (
        <>
            <Container maxWidth="lg">
                <Grow in>
                    <Container>
                        <Grid item xs={12} sm={7} md={9}>
                            <Posts setCurrentId={setCurrentId} />
                            <Paper elevation= {6}>
                                <Pagination page = {page}/>
                            </Paper>
                        </Grid>
                    </Container>
                </Grow>
            </Container>
        </>
    )
}

export default CatalogoHome;
