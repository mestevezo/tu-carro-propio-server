
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getPost, getPostsByCategory } from '../../actions/posts';
import Slider from '../../components/Slider/index';
import styled from 'styled-components';
import { LoadingDots } from '../../components';
import { useNavigate } from 'react-router-dom';

const Post = () => {
  const { post, posts, isLoading } = useSelector((state) => state.posts);


  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    dispatch(getPost(id));
  }, [dispatch, id]);


  useEffect(() => {
    if (post) {
      const test = new URLSearchParams({ brand: post.brand });
      const page = 1;
      const filter = { brand: post.brand }

      dispatch(getPostsByCategory(filter, page, test))
    }

  }, [dispatch, post])

  if (!post) return null;

  const openPost = (_id) => navigate(`/catalogo/${_id}`);

  if (isLoading) {
    return (
      <LoadingDots />
    );
  }

  const recommendedPosts = posts.filter(({ _id }) => _id !== post._id);
  const array = post.othersImg;
  array.unshift(post.mainImg)

  return (
    <div >
      <Container>
        <CarSlide>
          <Slider Imgs={array}></Slider>
        </CarSlide>
        <Information>
          <Title><h1>{post.brand + ' ' + post.model}</h1></Title>
          <Subtitle><p>{post.price + ' USD'}</p></Subtitle>
          <Description><p>{'Año ' + post.year + ' • ' + post.km + ' Km'}</p></Description>
        </Information>
      </Container>


      <div>
        {!!recommendedPosts.length && (
          <div>
            <h1>Tambien te pueden interesar</h1>
            {recommendedPosts.map(({ brand, model, year, _id, mainImg }) => (
              <div style={{ margin: '20px', cursor: 'pointer' }} onClick={() => openPost(_id)} key={_id}>
                <img src={mainImg} width='200px' alt='recomendados' />
                <h4>{brand}</h4> <h4>{model}</h4> <h4>{year}</h4>
              </div>
            ))}
          </div>
        )}
      </div>
    </div >
  );
};

const Container = styled.div`
  display: flex;
  margin: 2rem;

@media screen and (max-width: 780px) {
  width: 90%;
  align-items: center;
  text-align: center;
  flex-direction: column;
}
`

const CarSlide = styled.div` 
  position: relative;
  height: 60%;
  width: 60%;

  @media screen and (max-width: 780px) {
    width: 100%;
}

`
const Information = styled.div` 
  display: flex;
  flex-direction: column;
  margin-left: 5%;
  margin-right: 5%;
  font-family: Poppins;

  @media screen and (max-width: 780px) {
    text-align: center;
    margin-top: 10%;
    width: 100%;
    }

`

const Title = styled.h1`
font-size: larger;
line-height: 2em;

@media screen and (max-width: 780px) {
  line-height: 2em;
    }
`
const Subtitle = styled.p`
width: 50%;
border-radius: 5px;
font-size: 1.5rem;
font-weight: 700;

@media screen and (max-width: 780px) {
    text-align: center;
    width: 100%;
    }

`

const Description = styled.p`
font-size: 1.2rem;
font-weight: 300;
`

export default Post;

