import React, { useEffect } from 'react'
import { homeObjOne, homeObjTwo } from './Data'
import { InfoSection } from '../../components'
import { useDispatch } from 'react-redux';
import { getLatestPosts } from '../../actions/posts'
import Post from '../Catálogo/Posts/Post/Post';
import { useSelector } from 'react-redux';
import { Services } from '../../components';
import styled from 'styled-components';
import LoadingLatest from '../../components/Loading/LoadingLatest';

function Home() {

    const { lasposts } = useSelector((state) => state.posts);
    const dispatch = useDispatch();

    useEffect(() => {

        dispatch(getLatestPosts());

    }, [dispatch]);

    return (
        <Background>
            <InfoSection {...homeObjOne} />
            <InfoSection {...homeObjTwo} />
            <Services />
            <br />
            <LatestTitle>¡Échale un vistazo a nuestras últimas incorporaciones!</LatestTitle>
            <br />
            <LatestPostsGrid>
                {lasposts !== undefined ?
                    <>
                        {lasposts.map((post) => (
                            <SingleLatestPost key={post.id}>
                                <Post post={post} />
                            </SingleLatestPost>
                        ))}
                    </>
                    : <LoadingLatest />}
            </LatestPostsGrid>
        </ Background>
    );

};

const Background = styled.div`
`

const LatestTitle = styled.h1`
    text-align: center;
    margin: 1%;
    
`

const LatestPostsGrid = styled.div`
    display: flex;
    

    @media screen and (max-width: 780px) {
    display: grid;
    justify-content: center;

  }

`

const SingleLatestPost = styled.div` 
    width: 30%;
    margin: 2%;
    margin-bottom: 10%;

    @media screen and (max-width: 780px) {
    width: 90%;
  }
`

export default Home;