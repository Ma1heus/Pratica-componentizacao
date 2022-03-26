import React, { Component } from "react";
import styled from "styled-components";
import { createGlobalStyle } from "styled-components";
import camera from "./img/camera.png";
import gaucho from "./img/gaucho.png";
import caneca from "./img/caneca.png";
import cds from "./img/cds.png";
import celularj5 from "./img/celularj5.png";
import fotos from "./img/fotos.png";
import halfit from "./img/halfit.png";
import paodequeijo from "./img/paodequeijo.png";
import tablet from "./img/tablet.png";
import telas from "./img/telas.png";
import telatopdepc from "./img/telatopdepc.png";
import potepreto from "./img/potepreto.png";
import telegram from "./img/telegramm.png";
import twitter from "./img/twitter.png";
import whatsapp from "./img/whatsapp.png";
import youtube from "./img/youtube.png";
import facebook from "./img/facebookk.png";
import instagram from "./img/instagram.png";

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Montserrat&family=Roboto:wght@500&display=swap');
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
`;

const HeaderStyle = styled.header`
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
  padding: 1.7vw;
  background-color: #fff;

  width: 100%;
  height: 10vw;

  border-bottom: 1px solid black;
`;
const Title = styled.h3`
  font-size: 4vw;
  padding-left: 5.5vw;
  font-family: sans-serif;
`;

const Item = styled.a`
  text-decoration: none;
  color: #aaa;
  font-size: 2vw;
  margin-right: 1.6vw;
  font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;

  &:hover {
    color: rgb(0, 0, 0);
    font-weight: bold;
    font-size: 2vw;
  }
`;

const Laranja = styled.div`
  width: 100%;
  height: 34.9vw;

  justify-content: center;
  border-bottom: 1px solid rgb(0, 0, 0);

  display: flex;
  flex-direction: column;
  padding-left: 5vw;
  font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
    "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
`;

const Container = styled.section`
  height: 70vw;

  display: flex;
  align-items: center;
  justify-content: center;
`;

const Caixa = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;

  width: 80vw;
`;

const Img = styled.img`
  padding-top: 1vw;
  padding-left: 1vw;
  height: 20vw;
`;

const Footers = styled.footer`
  display: flex;
  align-items: center;
  justify-content: space-around;

  padding-left: 5vw;
`;

const Logo = styled.img`
  height: 3vw;
  padding-left: 1.3vw;
`;

const Copyright = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding-left: vw;
`;

const Text = styled.div`
  font-size: 1.5vw;
  margin-left: 1vw;
`;

export default class App extends React.Component {
  render() {
    return (
      <div>
        <GlobalStyle />
        <Header />
        <Main />
        <Footer />
      </div>
    );
  }
}

const Header = () => {
  return (
    <HeaderStyle>
      <Title>Portflow</Title>
      <nav>
        <Item href="#">Home</Item>
        <Item href="#">Blog</Item>
        <Item href="#">Valores</Item>
        <Item href="#">Portfólio</Item>
      </nav>
    </HeaderStyle>
  );
};

const Main = () => {
  return (
    <main>
      <SectionLaranja />
      <SectionImages />
    </main>
  );
};

const SectionLaranja = () => {
  return (
    <Laranja>
      <h1>Imagine, Discuta, Desenhe.</h1>
      <p>FALE CONOSCO</p>
    </Laranja>
  );
};

const SectionImages = () => {
  return (
    <Container>
      <Caixa>
        <Img src={gaucho} />
        <Img src={paodequeijo} />
        <Img src={potepreto} />
        <Img src={telas} />
        <Img src={cds} />
        <Img src={caneca} />
        <Img src={telatopdepc} />
        <Img src={halfit} />
        <Img src={celularj5} />
        <Img src={tablet} />
        <Img src={camera} />
        <Img src={fotos} />
      </Caixa>
    </Container>
  );
};

const Footer = () => {
  return (
    <Footers>
      <div>
        <Logo src={facebook} />
        <Logo src={twitter} />
        <Logo src={instagram} />
        <Logo src={telegram} />
        <Logo src={whatsapp} />
        <Logo src={youtube} />
      </div>
      <Copyright>
        <h3>Copyright</h3>
        <Text>
          <p>Layout Produzido Por Matheus Luz Rodrigues</p>
          <p>Referência: https://Br.Pinterest.com/Pin/464644886562510864</p>
        </Text>
      </Copyright>
    </Footers>
  );
};
