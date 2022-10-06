import { Button } from "../../globalStyles";
import { getPost, getRecommendationsPosts } from "../../actions/posts";
import LoadingDetails from "../../components/Loading/LoadingDetails";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import React, { useEffect } from "react";
import Slider from "../../components/Slider/index";
import styled from "styled-components";

const Post = () => {
  const { post, recposts, isLoading } = useSelector((state) => state.posts);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { id } = useParams();
  let route = window.location.href;

  useEffect(() => {
    dispatch(getPost(id));
    window.scrollTo(0, 0);
  }, [dispatch, id]);

  useEffect(() => {
    if (post) {
      const query = new URLSearchParams({
        brand: post.brand,
        id: post._id,
      });
      dispatch(getRecommendationsPosts(query));
    }
  }, [dispatch, post]);

  if (isLoading) {
    return <LoadingDetails />;
  }

  if (post === undefined) return null;

  const mainImgArray = [post.mainImg];
  const othersImgArray = post.othersImg;
  const sliderArray = mainImgArray.concat(othersImgArray);
  console.log(sliderArray);

  const openPost = (_id) => navigate(`/catalogo/${_id}`);

  let armor = post.armor ? "Si" : "No";
  let t4x4 = post.t4x4 ? "Si" : "No";

  return (
    <>
      <Container>
        <CarSlide>
          <Slider Imgs={sliderArray}> </Slider>
        </CarSlide>
        <Information>
          <Card>
            <div>
              <div>
                <Title>
                  {post.brand + " " + post.model + " " + post.version}
                </Title>
                <Subtitle>
                  {"Año " + post.year + " • " + post.km + " Km"}
                </Subtitle>
                <br />
                <Subtitle2>
                  {post.price == (0 || "" || null || undefined || "0")
                    ? "Precio a consultar"
                    : post.price + " USD"}
                </Subtitle2>

                <br />
              </div>

              <ButtonLayout>
                <Link to="/cita">
                  <Button buttonDisplay="true" fontBig primary="true">
                    Agenda una Cita
                  </Button>
                </Link>
                <br />
                <a
                  href={`https://api.whatsapp.com/send?phone=4140120467&text=Buenas,%20estoy%20interesado/a%20en%20este%20vehículo%20${route}`}
                  target="_blank"
                  rel="noreferrer"
                >
                  <Button buttonDisplay="true" fontBig primary="true">
                    Consultar vía Whatsapp
                  </Button>
                </a>
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
          <br />
          {post.transmission ? (
            <Description>{"⚙️ Transmision: " + post.transmission}</Description>
          ) : null}
          <Description>{"🛡️ Blindaje: " + armor}</Description>
          <Description>{"⛰️ 4x4: " + t4x4}</Description>
          {post.fuel ? (
            <Description>{"⛽ Combustible: " + post.fuel}</Description>
          ) : null}
          {post.motor ? (
            <Description>{"🚗 Motor: " + post.motor}</Description>
          ) : null}
          {post.owners ? (
            <Description>{"👨 Dueños: " + post.owners}</Description>
          ) : null}
          {post.tapizado ? (
            <Description>{"💼 Tapizado: " + post.tapizado}</Description>
          ) : null}
          {post.location ? (
            <Description>{"📍 Ubicacion: " + post.location}</Description>
          ) : null}
          {post.addInfo ? <Description>{post.addInfo}</Description> : null}
        </BlockInfo1>

        <br />

        {post.power | post.accel | post.fuelConsumption | post.fuelCapacity ? (
          <BlockInfo2>
            <h2>Especificaciones</h2>
            <br />
            {post.power ? (
              <Description>{"Potencia: " + post.power + " HP"}</Description>
            ) : null}
            {post.accel ? (
              <Description>{"Aceleracion: " + post.accel}</Description>
            ) : null}
            {post.fuelConsumption ? (
              <Description>
                {"Consumo de combustible: " + post.fuelConsumption}
              </Description>
            ) : null}
            {post.fuelCapacity ? (
              <Description>
                {"Capacidad de tanque: " + post.fuelCapacity + "L"}
              </Description>
            ) : null}
          </BlockInfo2>
        ) : null}

        <br />

        {post.details ? (
          <BlockInfo3>
            <h2>Detalles</h2>
            <br />
            <Description>{post.details}</Description>
          </BlockInfo3>
        ) : null}
      </Characteristics>
      <br />
      <RecommendedTitle>
        También te pueden interesar estos vehículos
      </RecommendedTitle>

      <div>
        {recposts !== undefined ? (
          <RecommendedDiv>
            {recposts.map(({ brand, model, year, _id, mainImg }) => (
              <RecommendedContainer onClick={() => openPost(_id)} key={_id}>
                <RecommendedImg
                  src={mainImg}
                  width="200px"
                  alt="recomendados"
                />
                <RecommendedDescription>
                  <h2>
                    {brand + " "}
                    {model}
                  </h2>{" "}
                  {"Año " + year}
                </RecommendedDescription>
              </RecommendedContainer>
            ))}
          </RecommendedDiv>
        ) : (
          false
        )}
      </div>
    </>
  );
};

const Container = styled.div`
  display: flex;
  margin: 0.5rem;
  color: #202020;

  @media screen and (max-width: 780px) {
    width: 90%;
    margin: 0;
    justify-content: center;
    flex-direction: column;
  }
`;

const CarSlide = styled.div`
  position: relative;
  height: 100%;
  width: 50%;

  @media screen and (max-width: 780px) {
    margin-top: 5%;
    width: 100%;
    margin-left: 5%;
  }
`;

const Information = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  margin-left: 5%;
  margin-right: 5%;
  font-family: Poppins;
  color: #202020;

  @media screen and (max-width: 780px) {
    margin-top: 0%;
    width: 90%;
    text-align: center;
  }
`;

const Title = styled.h1`
  margin-top: 15%;
  text-align: center;
  font-size: 3rem;
  line-height: 1em;
  padding-left: 5%;
  padding-right: 5%;

  @media screen and (max-width: 780px) {
    line-height: 1em;
    margin-top: 15%;
  }
`;

const Subtitle = styled.div`
  text-align: center;
  font-size: 2rem;
  font-weight: 300;
`;

const Subtitle2 = styled.div`
  width: 100%;
  text-align: center;
  font-size: 3rem;
  font-weight: 700;

  @media screen and (max-width: 780px) {
    width: 100%;
  }
`;

const Description = styled.p`
  font-size: 1.2rem;
  font-weight: 300;
  text-align: left;
  color: #202020;
`;

const RecommendedTitle = styled.h2`
  margin-bottom: 2rem;
  width: 100%;
  text-align: center;
  line-height: 1em;
  font-size: 1.8rem;
  color: #202020;

  @media screen and (max-width: 780px) {
    width: 90%;
    margin: 5%;
    line-height: 2rem;
  }
`;

const RecommendedDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 100%;
  margin-bottom: 2rem;
  color: #202020;

  @media screen and (max-width: 950px) {
    width: 100%;
    align-items: center;
    text-align: center;
    flex-direction: column;
  }
`;

const RecommendedContainer = styled.div`
  cursor: pointer;
  flex-direction: row;
  margin: 2%;

  @media screen and (max-width: 780px) {
    font-size: medium;
    text-align: center;
  }
`;

const RecommendedImg = styled.img`
  width: 280px;
  height: 280px;
  border-radius: 15px;
  align-self: center;

  &:hover {
    transition: "all .2s ease-in-out";
    transform: "scale(1.01)";
  }

  @media screen and (max-width: 780px) {
    border-radius: 10px;
    width: 70%;
    height: 70%;
  }
`;

const RecommendedDescription = styled.p`
  font-size: 1.2rem;
  font-weight: 300;
  text-align: center;
  width: 280px;
  margin-left: auto;
  margin-right: auto;

  @media screen and (max-width: 780px) {
    text-align: center;
  }

  &:hover {
    transition: "all .2s ease-in-out";
    transform: "scale(1.01)";
  }
`;

const Card = styled.div`
  display: grid;
  padding-left: 5%;
  padding-right: 5%;
  justify-content: center;
  text-align: center;
  flex: 0.7;
  padding: 0;
  margin-top: 8vh;
  border-radius: 10px;
  height: 300px;

  @media screen and (max-width: 780px) {
    padding: 0;
    margin-top: 0;
    justify-content: center;
    margin-left: 12%;
  }
`;

const AditionalInfoTitle = styled.h1`
  margin-top: 2%;
  text-align: center;
`;

const Characteristics = styled.div`
  display: flex;
  gap: 2%;
  margin-left: 20%;
  margin-right: 20%;
  padding: 20px;
  margin: 20px;
  width: 98%;

  @media screen and (max-width: 780px) {
    text-align: center;
    width: 90%;
    display: grid;
    height: 100%;
    margin-bottom: 20%;
  }
`;

const ButtonLayout = styled.div`
  margin-bottom: 5%;
`;

const BlockInfo1 = styled.div`
  text-align: center;
  white-space: pre-line;
  width: 30%;

  @media screen and (max-width: 780px) {
    width: 100%;
  }
`;
const BlockInfo2 = styled.div`
  text-align: center;
  white-space: pre-line;
  width: 30%;

  @media screen and (max-width: 780px) {
    width: 100%;
  }
`;
const BlockInfo3 = styled.div`
  text-align: center;
  white-space: pre-line;
  width: 30%;

  @media screen and (max-width: 780px) {
    width: 100%;
  }
`;

export default Post;
