import React from "react";
import styled from "styled-components";

import Directory from "../../components/directory/directory";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  // padding: 20px 80px;
`;

const Home = () => (
  <Container>
    <Directory />
  </Container>
);

export default Home;
