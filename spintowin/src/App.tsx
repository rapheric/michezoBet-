import React from 'react';
import Card from './components/card/Card';
import Navbar from './components/aside/Nav';
import styled from '@emotion/styled';
import Stake from './components/stake/Stake';
import Footer from './components/footer/Footer';
const App = () => {
 return (
  <AppContainer>
    <Navbar/>
    <Card/>
    <Stake/>
    <Footer/>
  </AppContainer>
  );
};
const AppContainer = styled.div`
  width: 900px;
  margin: 0 auto;
  padding: 20px;
  background-color:brown;
  height:600px;
  border:1px solid gray;
`;

export default App;


