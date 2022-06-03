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
            <LatestTitle>¡Échale un vistazo a nuestras últimas incorporaciones!</LatestTitle>
            <br></br>
            <LatestPostsGrid>
                {lasposts !== undefined ?
                    <>
                        {lasposts.map((post) => (
                            <SingleLatestPost>
                                <Post post={post} />
                            </SingleLatestPost>
                        ))}
                    </>
                    : <LoadingLatest />}
            </LatestPostsGrid>
        </>
    );

};

const LatestTitle = styled.h1`
    text-align: center;
`

const LatestPostsGrid = styled.div`
    display: flex;
    width: 100%;

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
    width: 100%;
  }
`

export default Home;