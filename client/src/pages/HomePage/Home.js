import React, { useEffect } from 'react'
import { homeObjOne, homeObjTwo } from './Data'
import { InfoSection } from '../../components'
import { useDispatch } from 'react-redux';
import { getLatestPosts } from '../../actions/posts'
import Post from '../Catálogo/Posts/Post/Post';
import { useSelector } from 'react-redux';
import Grid from '@mui/material/Grid';
import { Services } from '../../components';
import { Box } from '@mui/material';


const Home = () => {

    const { lasposts } = useSelector((state) => state.posts);
    const dispatch = useDispatch();

    useEffect(() => {

        dispatch(getLatestPosts());

    }, [dispatch]);

    return (
        <>
            <InfoSection {...homeObjOne} />
            <InfoSection {...homeObjTwo} />
            <Services />
            <br></br>
            <Box m={4}>
                <h1>¡Échale un vistazo a nuestras últimas incorporaciones!</h1>
                {lasposts !== undefined ?
                    <Grid container alignItems="center" spacing={2}>
                        {lasposts.map((post) => (
                            <Grid key={post._id} item xs={10} sm={4} md={4}>
                                <Post post={post} />
                            </Grid>
                        ))}
                    </Grid>
                : false}
            </Box>
        </>
    );

};

export default Home;