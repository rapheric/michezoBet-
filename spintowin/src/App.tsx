import React from 'react';
import styled from '@emotion/styled';
import Footer from './components/footer/Footer';
import Card from './components/card/Card';
import imageUrlBL from './assets/black.png';
import imageUrlR from './assets/red.png';
import imageUrlG from './assets/green.png';
import imageUrlB from './assets/blue.png';
import imageUrlP from './assets/purple.png';
import imageUrlO from './assets/orange.png';
const App = () => {
 return (
  <AppContainer>
    <Card  imageUrlB={imageUrlB}
            imageUrlR={imageUrlR} 
            imageUrlG={imageUrlG} 
            imageUrlBL={imageUrlBL} 
            imageUrlP={imageUrlP} 
            imageUrlO={imageUrlO}  />
    <Footer/>
  </AppContainer>
  );
};
const AppContainer = styled.div`
  width: 900px;
  margin: 0 auto;
  padding: 20px;
  background-color:brown;
  height:550px;
  border:1px solid gray;
`;

export default App;


