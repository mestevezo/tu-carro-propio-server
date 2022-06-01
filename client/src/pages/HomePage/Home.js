import React, { useEffect, useState } from 'react'
import { homeObjOne, homeObjTwo } from './Data'
import { InfoSection } from '../../components'
import { useDispatch } from 'react-redux';
import { getLatestPosts } from '../../actions/posts'
import Post from '../Catálogo/Posts/Post/Post';
import { useSelector } from 'react-redux';
import { Services } from '../../components';
import styled from 'styled-components';



const Home = () => {

    const latestPosts = useSelector((state) => state.posts.latestPosts);

    const dispatch = useDispatch();
    const [, setCurrentId] = useState(0);

    useEffect(() => {

        dispatch(getLatestPosts())

    }, [dispatch])

    /*
                
    */



    return (
        <>
            <InfoSection {...homeObjOne} />
            <InfoSection {...homeObjTwo} />
            <Services />
            <br></br>
            <LatestTitle>¡Échale un vistazo a nuestras últimas incorporaciones!</LatestTitle>
            <br></br>
            <LatestPostsGrid>
                {latestPosts !== undefined ?
                    <>
                        {latestPosts.latestPosts.latestPosts.map((post) => (
                            <div>
                                <Post post={post} setCurrentId={setCurrentId} />
                            </div>
                        ))}
                    </>
                    : false}

            </LatestPostsGrid>
        </>
    )
}

const LatestPostsGrid = styled.div`
    width: 90%;
    row-gap: 2%;
    display: flex;
    margin: 2%;
`
const LatestTitle = styled.h1`
    text-align: center;
`

export default Home;
