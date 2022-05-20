import React , { useEffect,useState }  from 'react'
import { homeObjOne, homeObjTwo } from './Data'
import { InfoSection } from '../../components'

import { useDispatch } from 'react-redux';
import {getLatestPosts} from '../../actions/posts'

import Post from '../Catálogo/Posts/Post/Post';
import { useSelector } from 'react-redux';

import Grid from '@mui/material/Grid';
import { LoadingDots } from "../../components";
import styled from 'styled-components';


const Home = () => {
   
    const  latestPosts  = useSelector((state) => state.posts.latestPosts);

    const dispatch = useDispatch();
    const [currentId, setCurrentId] = useState(0);

    useEffect(() => {

        dispatch(getLatestPosts())
     
    }, [dispatch])

/*
            
*/
    


    return (
        <>
            <InfoSection {...homeObjOne} />
            <InfoSection {...homeObjTwo} />
        
        {latestPosts !== undefined ?
        
            
                <Grid container alignItems="stretch" spacing={3}>
                {latestPosts.latestPosts.latestPosts.map((post) => (
                    <Grid key={post._id} item xs={12} sm={6} md={6}>
                    <Post post={post} setCurrentId={setCurrentId} />
                    </Grid>
                ))}
                </Grid>

                : <LoadingDots />}


            
            
    
        </>
    )
}

export default Home;
