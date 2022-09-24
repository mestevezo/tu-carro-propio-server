import React, { useEffect } from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { useNavigate, useLocation } from "react-router-dom";
import { getPosts } from "../../actions/posts";

const Productfilter = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  let location = useLocation();
  let route = location.pathname + location.search;
  console.log(window.location.href);
  let params = new URLSearchParams(location.search);

  const writer = (e) => {
    params.set("page", "1");
    const value = e.target.value;
    if (value !== "-") {
      if (e.target.name === "price") {
        params.set("minPrice", value.split("-")[0]);
        params.set("maxPrice", value.split("-")[1]);
      } else {
        params.set(e.target.name, value);
      }
    } else {
      if (e.target.name === "price") {
        params.delete("minPrice");
        params.delete("maxPrice");
      } else {
        params.delete(e.target.name);
      }
    }
    navigate(location.pathname + "?" + params);
  };

  useEffect(() => {
    let query = route.split("?")[1];
    dispatch(getPosts(query));
    window.scrollTo(0, 0);
  }, [route, dispatch]);

  return (
    <div>
      <Container>
        <Filter>
          <Title>Tipo </Title>
          <Select
            name="type"
            onChange={writer}
            value={params.get("type") || "-"}
          >
            <Option value={"-"}>Todos</Option>
            <Option value={"Carro"}>Carro</Option>
            <Option value={"Camioneta"}>Camioneta</Option>
            <Option value={"Camion"}>Camión</Option>
          </Select>
        </Filter>
        <Filter>
          <Title>Marca </Title>
          <Select
            name="brand"
            onChange={writer}
            value={params.get("brand") || "-"}
          >
            <Option value={"-"}>Todos</Option>
            <Option value={"Chery"}>Chery</Option>
            <Option value={"Chevrolet"}>Chevrolet</Option>
            <Option value={"Chrysler"}>Chrysler</Option>
            <Option value={"Dodge"}>Dodge</Option>
            <Option value={"Ford"}>Ford</Option>
            <Option value={"Honda"}>Honda</Option>
            <Option value={"Hyundai"}>Hyundai</Option>
            <Option value={"Jeep"}>Jeep</Option>
            <Option value={"Kia"}>Kia</Option>
            <Option value={"Mitsubishi"}>Mitsubishi</Option>
            <Option value={"Toyota"}>Toyota</Option>
          </Select>
        </Filter>
        <Filter>
          <Title>Precio </Title>
          <Select
            name="price"
            onChange={writer}
            value={
              params.has("minPrice")
                ? params.get("minPrice") + "-" + params.get("maxPrice")
                : "-"
            }
          >
            <Option value={"-"}>Todos</Option>
            <Option value={"500-2000"}>500$ - 2000$</Option>
            <Option value={"2000-4000"}>2000$ - 4000$</Option>
            <Option value={"4000-8000"}>4000$ - 8000$</Option>
            <Option value={"8000-12000"}>8000$ - 12000$</Option>
            <Option value={"12000-20000"}>12000$ - 20000$</Option>
            <Option value={"20000-1000000"}>20000$ o más</Option>
          </Select>
        </Filter>
        <Filter>
          <Title>Transmisión </Title>
          <Select
            name="transmission"
            onChange={writer}
            value={params.get("transmission") || "-"}
          >
            <Option value={"-"}>-</Option>
            <Option value={"Automatico"}>Automático</Option>
            <Option value={"Manual"}>Manual</Option>
          </Select>
        </Filter>
        <Filter>
          <Title>Ordenar por </Title>
          <Select
            name="sort"
            onChange={writer}
            value={params.get("sort") || "-"}
          >
            <Option value={"-"}>-</Option>
            <Option value={"reciente"}>Más reciente</Option>
            <Option value={"ascendente"}>Precio ascendente</Option>
            <Option value={"descendente"}>Precio descendente</Option>
          </Select>
        </Filter>
      </Container>
    </div>
  );
};

const Container = styled.div`
  text-align: center;
  font-size: large;
  border: none;
  width: 100%;
  align-items: center;
  display: flex;
  justify-content: space-evenly;
  position: fixed;
  z-index: 2000;
  background: #202020;
  color: #f7df1e;
  padding: 1rem;

  @media screen and (max-width: 768px) {
    gap: 2px;
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
  }
`;

const Title = styled.p`
  @media screen and (max-width: 768px) {
  }
`;

const Filter = styled.div`
  background-color: #202020;
  border-radius: 5px;
`;

const Select = styled.select`
  text-align: center;
  border: none;
  background: #202020;
  cursor: pointer;
  color: #f7df1e;
  width: 8rem;
  border-radius: 5px;
  font-size: 15px;

  @media screen and (max-width: 768px) {
    width: 8rem;
    justify-items: center;
    align-self: center;
    flex-direction: column;
    background: #202020;
  }
`;

const Option = styled.option`
  align-items: center;
`;

export default Productfilter;
