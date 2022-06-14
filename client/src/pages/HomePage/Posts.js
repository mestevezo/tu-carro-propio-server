import React from 'react';
import Grid from '@mui/material/Grid';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import Post from '../Catálogo/Posts/Post/Post';

const Box = styled.div`
  gap: 5rem;
  width: 90%;
  margin: auto;
  margin-top: 3rem;
  margin-bottom: 3rem;  

  @media screen and (max-width: 900px) {
    width: 300px;
  }

`;

const Posts = () => {

  const { lasposts : posts } = useSelector((state) => state.posts);


  return (
    <>
      <Box>
        <Grid container spacing={{ xs: 3, md: 6 }} justifyContent="center" alignItems="stretch">
          {posts.map((post) => (
            <Grid key={post._id} item xs={12} md={4}>
              <Post post={post} />
            </Grid>
          ))}
        </Grid>
      </Box>
    </>
  );

};

export default Posts;