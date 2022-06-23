import { Button } from '../../globalStyles';
import { getSpcRecommendationsPosts } from '../../actions/posts';
import LoadingDetails from '../../components/Loading/LoadingDetails';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import React, { useEffect } from 'react';
import Slider from '../../components/Slider/index';
import styled from 'styled-components';

import ReactImageMagnify from 'react-image-magnify';



const Post = () => {

  const { recposts, isLoading } = useSelector((state) => state.posts);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {

    dispatch(getSpcRecommendationsPosts(id));

  }, [dispatch, id]);

  if (isLoading) {
    return (
      <LoadingDetails />
    );
  };

  if (recposts === undefined) return null;
  let post = recposts[0] || undefined;

  const openPost = (_id) => navigate(`/catalogo/${_id}`);

  const array = post.othersImg;
  array.unshift(post.mainImg);

  let armor = post.armor ? 'Si' : 'No';
  let t4x4 = post.t4x4 ? 'Si' : 'No';

  return (
    <div >
      <Container>
        <CarSlide>
          <Slider Imgs={array}  > </Slider>

        
          
                
            

        </CarSlide>
        <Information>

          <Card>

            <div >
              <div>
                <Title>{post.brand + ' ' + post.model + ' ' + post.version}</Title>
                <Description>{'Año ' + post.year + ' • ' + post.km + ' Km'}</Description>
                <br />
                <Subtitle>{post.price + ' USD'}</Subtitle>


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
      <br />

      <AditionalInfoTitle>Información Adicional</AditionalInfoTitle>

      <Characteristics>
        <BlockInfo1>
          <h2>Características</h2>
          <Description>{'Transmision: ' + post.transmission}</Description>
          <Description>{'Blindaje: ' + armor}</Description>
          <Description>{'4x4: ' + t4x4}</Description>
          <Description>{'Combustible: ' + post.fuel}</Description>
          <Description>{'⚙ Motor: ' + post.motor}</Description>
          <Description>{'👤 Dueños: ' + post.owners}</Description>
          <Description>{'▪ Tapizado: ' + post.tapizado}</Description>
          <Description>{'📍 Ubicacion: ' + post.location}</Description>
          <Description>{'Transmision: ' + post.transmission}</Description>
          <Description>{'Blindaje: ' + armor}</Description>
          <Description>{'4x4: ' + t4x4}</Description>
          <Description>{'Combustible: ' + post.fuel}</Description>
          <Description>{post.addInfo}</Description>
        </BlockInfo1>

        <br />

        <BlockInfo2>
          <h2>Especificaciones</h2>
          <Description>{'Potencia: ' + post.power + ' HP'}</Description>
          <Description>{'Aceleracion: ' + post.accel}</Description>
          <Description>{'Consumo de combustible: ' + post.fuelConsumption}</Description>
          <Description>{'Capacidad de tanque: ' + post.fuelCapacity + 'L'}</Description>
        </BlockInfo2>

        <br />

        <BlockInfo3>
          <h2>Detalles</h2>
          <Description>{post.details}</Description>
        </BlockInfo3>
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
  margin: 0.5rem;

  @media screen and (max-width: 780px) {
    width: 90%;
    margin: 0;
    justify-content: center;
    flex-direction: column;
  }
`

const CarSlide = styled.div` 
  position: relative;
  height: 100%;
  width: 50%;

  @media screen and (max-width: 780px) {
    margin-top: 5%;
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
    margin-top: 0%;
    width: 100%;
    text-align: center;
  }
`

const Title = styled.h1`
  margin-top: 15%;
  text-align: center;
  font-size: 2rem;
  line-height: 1em;
  padding-left: 5%;
  padding-right: 5%;

  @media screen and (max-width: 780px) {
    line-height: 1em;
    margin-top: 15%;
  }
`

const Subtitle = styled.div`
  width: 100%;
  text-align: center;
  font-size: 1.5rem;
  font-weight: 700;


  @media screen and (max-width: 780px) {
    width: 100%;
  }
`

const Description = styled.p`
  font-size: 1.2rem;
  font-weight: 300;
  text-align: center;
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
  width: 280px;
  height: 230px;
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
  display: grid;
  padding-left: 5%;
  padding-right: 5%;
  justify-content: center;
  text-align: center;
  flex: 0.7;
  padding: 0;
  margin-top: 5%;
  -webkit-box-shadow: 2px 4px 10px 1px rgba(0, 0, 0, 0.47);
  box-shadow: 2px 4px 10px 1px rgba(201, 201, 201, 0.47);
  border-radius: 10px;
  height: 100px;

  @media screen and (max-width: 780px) {
    padding: 0;
    margin-top: 0;
  }

`

const AditionalInfoTitle = styled.h1`
text-align: center;
`

const Characteristics = styled.div`
  display: flex;
  gap: 2%;
  margin-left: 10%;
  margin-right: 10%;
  -webkit-box-shadow: 2px 4px 10px 1px rgba(0, 0, 0, 0.47);
  box-shadow: 2px 4px 10px 1px rgba(201, 201, 201, 0.47);
  padding: 20px;
  margin: 20px;
  border-radius: 10px;

  @media screen and (max-width: 780px) {
    text-align: center;
    display: grid;
    margin-left: 20%;
    margin-right: 20%;
    height: 1200px;
  }

`

const ButtonLayout = styled.div`
  margin-bottom: 5%;
`

const BlockInfo1 = styled.div`
  text-align: center;
  white-space: pre-line;
  width: 30%;

  @media screen and (max-width: 780px) {
    width: 80%;
  }

`
const BlockInfo2 = styled.div`
  text-align: center;
  white-space: pre-line;
  width: 30%;

  @media screen and (max-width: 780px) {
    width: 80%;
  }

`
const BlockInfo3 = styled.div`
  text-align: center;
  white-space: pre-line;
  width: 30%;

  @media screen and (max-width: 780px) {
    width: 80%;
  }

`

export default Post;