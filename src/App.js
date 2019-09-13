import React from "react";
import "./App.css";
import Menu from "./components/menu";
import Grid from "./components/grid";
import LogoImage from "./components/menu/logo.jpg";
import styled from "styled-components";

const MainContainer = styled.div`
  width: 100%;
`;
const GridContainer = styled.div`
  margin-left: auto !important;
  margin-right: auto !important;
  width: 85%;
`;
function App() {
  return (
    <MainContainer>
      <Menu LogoImage={LogoImage} position="left" />
      <GridContainer>
        <Grid />
      </GridContainer>
    </MainContainer>
  );
}

export default App;
