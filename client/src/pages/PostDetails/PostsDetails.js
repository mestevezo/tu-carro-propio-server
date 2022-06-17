
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getSpcRecommendationsPosts } from '../../actions/posts';
import Slider from '../../components/Slider/index';
import styled from 'styled-components';
import { LoadingDots } from '../../components';
import { useNavigate, Link } from 'react-router-dom';

import { Button } from '../../globalStyles';
import './Postdetails.css';


const Post = () => {

  const { recposts, isLoading } = useSelector((state) => state.posts);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {

    dispatch(getSpcRecommendationsPosts(id));

  }, [dispatch, id]);

  if (recposts === undefined) return null;
  let post = recposts[0] || undefined;

  const openPost = (_id) => navigate(`/catalogo/${_id}`);

  if (isLoading) {
    return (
      <LoadingDots />
    );
  };

  const array = post.othersImg;
  array.unshift(post.mainImg);

  let armor = post.armor ? 'Si' : 'No';
  let t4x4 = post.t4x4 ? 'Si' : 'No';

  return (
    <div >
      <Container>
        <CarSlide>
          <Slider Imgs={array}  ></Slider>
        </CarSlide>
        <Information>

          <Card>

            <div >
              <div>
                <Title>{post.brand + ' ' + post.model + ' ' + post.version}</Title>
                <br />
                <Subtitle>{post.price + ' USD'}</Subtitle>
                <br />
                <Description>{'Año ' + post.year + ' • ' + post.km + ' Km'}</Description>
                <br />
              </div>

              <ButtonLayout>
                <Link to='/cita'>
                  <Button buttonDisplay='true' big fontBig primary='true'>Agenda una Cita</Button>
                </Link>
              </ButtonLayout>
            </div>

          </Card>

        </Information>

      </Container>


      <Characteristics>
        <h1>Caracteristicas</h1>

        <Description>{'Transmision: ' + post.transmission}</Description>
        <Description>{'Blindaje: ' + armor}</Description>
        <Description>{'4x4: ' + t4x4}</Description>
        <Description>{'Combustible: ' + post.fuel}</Description>
        <br></br>
        <h3>Informacion Adicional</h3>
        <Description>{post.addInfo}</Description>

      </Characteristics>
      <br />
      <RecommendedTitle>También te pueden interesar estos vehículos</RecommendedTitle>

      <div>
        {recposts !== undefined ?
          <RecommendedDiv>
            {recposts.slice(1,).map(({ brand, model, year, _id, mainImg }) => (
              <RecommendedContainer onClick={() => openPost(_id)} key={_id}>
                <RecommendedImg src={mainImg} width='200px' alt='recomendados' />
                <RecommendedDescription><h2>{brand + ' '}{model}</h2> {'Año ' + year}</RecommendedDescription>
              </RecommendedContainer>
            ))}
          </RecommendedDiv>
          : false}
      </div>
    </div >
  );

};

const Container = styled.div`
  display: flex;
  margin: 2rem;

  @media screen and (max-width: 780px) {
    width: 90%;
    margin: 1%;
    justify-content: center;
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

const Subtitle = styled.div`
  width: 100%;
  font-size: 1.5rem;
  font-weight: 700;


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
  justify-content: center;
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

  margin: 2%;

  @media screen and (max-width: 780px) {
    font-size: medium;
  }
`

const RecommendedImg = styled.img`
  width: 300px;
  height: 220px;
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

const Card = styled.div`
  display: flex;
  justify-content: space-between;
  flex: 0.7;
  padding: 10px;
  -webkit-box-shadow: 2px 4px 10px 1px rgba(0, 0, 0, 0.47);
  box-shadow: 2px 4px 10px 1px rgba(201, 201, 201, 0.47);
  border-radius: 10px;
  height: 100px
`

const Characteristics = styled.div`
  -webkit-box-shadow: 2px 4px 10px 1px rgba(0, 0, 0, 0.47);
  box-shadow: 2px 4px 10px 1px rgba(201, 201, 201, 0.47);
  padding: 20px;
  margin: 20px;
  border-radius: 10px;
`
const ButtonLayout = styled.div`
  margin-left: 30%;
`

export default Post;