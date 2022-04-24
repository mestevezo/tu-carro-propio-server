
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getPost } from '../../actions/posts';
import Slider from '../../components/Slider/index';
import styled from 'styled-components';
import { LoadingDots } from '../../components';

const Post = () => {
  const { post, isLoading } = useSelector((state) => state.posts);
  //console.log(post.post);


  const dispatch = useDispatch();
  // const navigate = useNavigate(); - hook para recomendados
  const { id } = useParams();

  useEffect(() => {
    dispatch(getPost(id));
  }, [dispatch, id]);

  if (!post) return null;

  // const openPost = (_id) => navigate(`/Catalogo/${_id}`);

  if (isLoading) {
    return (
      <LoadingDots />
    );
  }

  //const recommendedPosts = posts.filter(({ _id }) => _id !== post._id);
  const array = post.othersImg;
  array.unshift(post.mainImg)

  return (
    <div >
      <Container>
        <Slider Imgs={array}></Slider>
      </Container>
      <div>
        <h1>{post.brand + ' ' + post.model}</h1>
        <h2>{post.year + ' | ' + post.km + ' Km'}</h2>
        <h2>{post.price + ' USD'}</h2>
      </div>
    </div>
  );
};

const Container = styled.div`
  width: 95%;
  align-self: center;
  margin: auto;
  padding: 5%;
`

export default Post;
