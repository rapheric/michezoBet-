import React from 'react';
import Navbar from './components/aside/Nav';
import styled from '@emotion/styled';
import Footer from './components/footer/Footer';
import Stats from './components/statistics/Stats';
// import Randon from './components/Rand/Randon';
import Card from './components/card/Card';
const App = () => {
 return (
  <AppContainer>
    <Navbar/>
    <Stats/>
    <Card/>
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


