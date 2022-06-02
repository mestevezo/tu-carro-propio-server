import React from 'react';
import Grid from '@mui/material/Grid';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import Post from './Post/Post';


const useStyles = ((theme) => ({

  mainContainer: {
    display: 'flex',
    alignItems: 'center',
  },

}));

const Box = styled.div`
  margin-top: 10rem;
  margin-bottom: 3rem;
  gap: 5rem;

  @media screen and (max-width: 760px) {
      margin-top: 15rem;
    }
`;

const Posts = () => {

  const { posts } = useSelector((state) => state.posts);
  const classes = useStyles();

  return (
    <>
      <Box>
        <Grid className={classes.container} container alignItems="stretch" spacing={3}>
          {posts.map((post) => (
            <Grid key={post._id} item xs={12} sm={6} md={6}>
              <Post post={post} />
            </Grid>
          ))}
        </Grid>
      </Box>
    </>
  );

};

export default Posts;