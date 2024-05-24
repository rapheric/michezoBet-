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
import imageUrlLion from './assets/lionss.svg';
import imageUrlWin from './assets/spin2win-dolly (3).svg';
import imageUrlFire from './assets/download.svg';
import imageUrlCold from './assets/download (1).svg';
const App = () => {
 return (
  <AppContainer>
    <Card  imageUrlB={imageUrlB}
            imageUrlR={imageUrlR} 
            imageUrlG={imageUrlG} 
            imageUrlBL={imageUrlBL} 
            imageUrlP={imageUrlP} 
            imageUrlO={imageUrlO} 
            imageUrlLion={imageUrlLion} 
            imageUrlWin={imageUrlWin}
            imageUrlFire={imageUrlFire}
            imageUrlCold= {imageUrlCold}/>
    <Footer/>
  </AppContainer>
  );
};
const AppContainer = styled.div`
  width: 1000px;
  margin: 0 auto;
  padding: 20px;
  background-color:brown;
  height:550px;
  border:1px solid gray;
`;

export default App;


