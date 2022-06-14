import React, { useEffect } from 'react'
import { homeObjOne, homeObjTwo } from './Data'
import { InfoSection } from '../../components'
import { useDispatch } from 'react-redux';
import { getLatestPosts } from '../../actions/posts'
import Posts from './Posts';
import { useSelector } from 'react-redux';
import { Services } from '../../components';
import styled from 'styled-components';
import LoadingLatest from '../../components/Loading/LoadingLatest';

function Home() {

    const { lasposts : posts } = useSelector((state) => state.posts);
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
            {posts !== undefined ? <Posts /> : false}
        </ Background>
    );

};


const Background = styled.div`
`

const LatestTitle = styled.h1`
    text-align: center;
    margin: 1%;
`


export default Home;