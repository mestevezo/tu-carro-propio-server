import React from 'react';
import Grid from '@mui/material/Grid';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import { LoadingDots } from '../../../components';
import Footer from '../../../components/Footer/Footer'

import Post from './Post/Post';
import useStyles from './styles';

const Box = styled.div`
  margin-top: 10rem;
  margin-bottom: 3rem;
`;

const Posts = ({ setCurrentId }) => {
  const { posts, isLoading } = useSelector((state) => state.posts);
  const classes = useStyles();



  if (!posts.length && !isLoading) return 'No posts';

  return (
    isLoading ? <LoadingDots /> : (
      <>
        <Box>
          <Grid className={classes.container} container alignItems="stretch" spacing={3}>
            {posts.map((post) => (
              <Grid key={post._id} item xs={12} sm={6} md={6}>
                <Post post={post} setCurrentId={setCurrentId} />
              </Grid>
            ))}
          </Grid>
        </Box>
        <Footer />
      </>
    )
  );
};

export default Posts;
