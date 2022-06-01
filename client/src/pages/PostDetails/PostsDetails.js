
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getPost, getRecommendationsPosts } from '../../actions/posts';
import Slider from '../../components/Slider/index';
import styled from 'styled-components';
import { LoadingDots } from '../../components';
import { useNavigate } from 'react-router-dom';

const Post = () => {
  const { post, posts, isLoading, recPosts } = useSelector((state) => state.posts);
  //const hola = useSelector((state) => state.posts);
  //console.log(hola);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    dispatch(getPost(id));
  }, [dispatch, id]);


  useEffect(() => {
    if (post) {
      const query = new URLSearchParams({
        brand: post.brand,
        id: post._id
      });
      //const test = new URLSearchParams({ brand: post.brand });
      //const page = 1;
      //const filter = { brand: post.brand }

      //dispatch(getPostsByCategory(filter, page, test))
      dispatch(getRecommendationsPosts(query));
    }

  }, [dispatch, post])

  if (!post) return null;

  const openPost = (_id) => navigate(`/catalogo/${_id}`);

  if (isLoading) {
    return (
      <LoadingDots />
    );
  }

  //const recommendedPosts = posts.filter(({ _id }) => _id !== post._id);
  //const recommendedPostsLimit = recommendedPosts.slice(0, 3)
  //const recommendedPostsLimit = posts;
  const recommendedPostsLimit = recPosts.recPosts.recPosts;
  const array = post.othersImg;
  array.unshift(post.mainImg)

  //let armor = ''
  //if (post.armor) { armor = 'Si' } else { armor = 'No' }
  //let t4x4 = ''
  //if (post.t4x4) { t4x4 = 'Si' } else { t4x4 = 'No' }

  let armor = post.armor ? 'Si' : 'No';
  let t4x4 = post.t4x4 ? 'Si' : 'No';

  return (
    <div >
      <Container>
        <CarSlide>
          <Slider Imgs={array}></Slider>
        </CarSlide>
        <Information>
          <Title>{post.brand + ' ' + post.model}</Title>
          <Subtitle>{post.price + ' USD'}</Subtitle>
          <Description>{'Año ' + post.year + ' • ' + post.km + ' Km'}</Description>
          <Description>{'Transmision ' + post.transmission}</Description>
          <Description>{'Blindaje ' + armor}</Description>
          <Description>{'4x4 ' + t4x4}</Description>
          <Description>{'Combustible ' + post.fuel}</Description>
          <br></br>
          <h3>Informacion Adicional</h3>
          <Description>{post.addInfo}</Description>
        </Information>
      </Container>


      <RecommendedTitle>También te pueden interesar estos vehículos</RecommendedTitle>


      <div>
        {!!recommendedPostsLimit.length && (
          <RecommendedDiv>
            {recommendedPostsLimit.map(({ brand, model, year, _id, mainImg }) => (
              <RecommendedContainer onClick={() => openPost(_id)} key={_id}>
                <RecommendedImg src={mainImg} width='200px' alt='recomendados' />
                <RecommendedDescription><h2>{brand + ' '}{model}</h2> {'Año ' + year}</RecommendedDescription>
              </RecommendedContainer>
            ))}
          </RecommendedDiv>
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
  flex-direction: column;
}
`

const CarSlide = styled.div` 
  position: relative;
  height: 100%;
  width: 50%;

  @media screen and (max-width: 780px) {
    width: 100%;
    margin-left: 5%;
}

`
const Information = styled.div` 
  display: flex;
  flex-direction: column;
  width: 50%;
  margin-left: 5%;
  margin-right: 5%;
  font-family: Poppins;

  @media screen and (max-width: 780px) {
    margin-top: 10%;
    width: 100%;
    text-align: center;
    }

`
const Title = styled.h1`
  font-size: 2rem;
  line-height: 1em;

@media screen and (max-width: 780px) {
  line-height: 1em;
    }
`
const Subtitle = styled.p`
  width: 50%;
  font-size: 1.5rem;
  font-weight: 600;

@media screen and (max-width: 780px) {
    width: 100%;
    }

`

const Description = styled.p`
  font-size: 1.2rem;
  font-weight: 300;
`
const RecommendedTitle = styled.h2`
  margin-bottom: 2rem;
  width: 100%;
  text-align: center;
  line-height: 1em;
  font-size: 1.8rem;

@media screen and (max-width: 780px) {
  width: 90%;
  margin: 5%;
  line-height: 2rem;
}
`

const RecommendedDiv = styled.div` 
  display: flex;
  flex-direction: row;
  width: 100%;
  margin-bottom: 2rem;

  @media screen and (max-width: 780px) {
  width: 100%;
  align-items: center;
  text-align: center;
  flex-direction: column;
}
`

const RecommendedContainer = styled.div`
  cursor: pointer;
  flex-direction: row;
  justify-content: space-between;
  margin: 2%;

@media screen and (max-width: 780px) {
 font-size: medium;
}
`
const RecommendedImg = styled.img`
width: 100%;
height: 70%;
border-radius: 15px;

@media screen and (max-width: 780px) {
  border-radius: 10px;
  width: 70%;
  height: 70%;
}
`
const RecommendedDescription = styled.p`
  font-size: 1.2rem;
  font-weight: 300;
  text-align: center;
`
export default Post;

