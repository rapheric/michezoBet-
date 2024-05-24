import React from 'react';
import styled from '@emotion/styled';

// interface NavIcon{
//   imageUrlFire:string;
// }
interface NavProps {
  randomNumber: number | null;
  // result: string | null;
  imageUrlFire: string;
  payoutAmount: number | null;
  generatedRandomNumbers: Array<number>
  imageUrlCold:string;
}
const Navbar: React.FC<NavProps> = ({ randomNumber, imageUrlFire, payoutAmount, generatedRandomNumbers,imageUrlCold }) => {
  // const[optionVisible, setOptionVisible] = useState<boolean>(false)
  // useEffect(() => {
  //   const timer = setTimeout(() => {
  //     setOptionVisible(true)
  //   }, 2000); // 2-second delay
  //   setOptionVisible(false)
  //   return () => clearTimeout(timer);

  // }, []);
  return (

    <NavbarContainer>
      
      <NavItemOne>
      {randomNumber !== null?
         generatedRandomNumbers.map((n) => (
        <GenDiv> 
        {n}
        </GenDiv>
      )) : <div>statistics not available yet..</div>
      }
      </NavItemOne>
      <DivContainer>
          <ParentDiv>
            <StatImage src={imageUrlFire} />
            <StatsDiv>6</StatsDiv>
            <StatsDiv>16</StatsDiv>
            <StatsDiv>3 </StatsDiv>
            <StatsDiv>12</StatsDiv>
            <StatsDiv>13</StatsDiv>
          </ParentDiv>
          <ParentDivS>
            <StatsDivR>36</StatsDivR>
            <StatsDivR>35</StatsDivR>
            <StatsDivR>34</StatsDivR>
            <StatsDivR>33</StatsDivR>
            <StatsDivR>32</StatsDivR>
            <StatImage src={imageUrlCold} />
          </ParentDivS>
      </DivContainer>
    </NavbarContainer>
  );
};
const NavbarContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color:brown;
  color: #fff;
  padding: 2px 2px;
  width:100%;
  max-width:920px;
  max-height:40px;
  height:100%;
  margin-bottom:30px;
  margin-top:0px;
  box-shadow:border-box;
  box-shadow: 0 8px 10px rgba(0, 0, 0, 0.1), 0 6px 20px rgba(0, 0, 0, 0.1);
  outline-offset: -2px;
`;


const NavItemOne = styled.div`
  cursor: pointer;
  display:flex;
  align-items:center;
 justify-content:center;
  // padding: 4px 7px;
  border-radius: 5px;
  height:42px;
  transition: background-color 0.3s ease;
  // position: relative;
  // height: 100%;
  margin-left: 20px;
  text-transform: initial;
  font-family: Roboto;
  font-size: 13px;
`;
const ParentDivS = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  // height: 37px;
  // background-color: light blue;
  // width:180px;
  // border-radius:5px;
  width: 175px;
  height: 42px;
  margin-right: 3px;
  color: #005383;
  background: -webkit-gradient(linear, left top, left bottom, from(#7eccff), to(#d3fffc));
  background: linear-gradient(180deg, #7eccff 0, #d3fffc 100%);
  border-radius: 3px;
  
`;
const ParentDiv = styled.div`
// width: 352px;
//     height: 42px;
//     font-family: Adamina;
  display: flex;
  justify-content: center;
  align-items: center;
//   height: 35px;
//   background-color:  #F06543;
//   width:180px;
//   border-radius:5px;
//   // padding:5px 7px;
   width: 175px;
    height: 42px;
    padding-left: 9px;
    background: -webkit-gradient(linear, left top, left bottom, from(rgba(0, 24, 59, 0)), color-stop(55.08%, #ff3131), to(#ff7e31));
    background: linear-gradient(180deg, rgba(0, 24, 59, 0) 0, #ff3131 55.08%, #ff7e31 100%);
    border-radius: 0 0 3px 3px;
`;
const StatsDivR = styled.div`
  // width: 35px;
  // height: 28px;
  border-radius: 50%;
  // background-color: #007bff;
  font-size:16px;
  font-weight:700;
  // margin: 2px;
  display:flex;
  justify-content:center;
  align-items:center;
  margin-right: 3px;
  color: #005383;
  width: 24px;
  height: 24px;
  padding: 0 3px;
  margin-right: 5px;
  font-size: 16px;
  border-radius: 5px;
  -webkit-box-shadow: 0 1px 8px 0 rgba(0, 0, 0, .5);
  box-shadow: 0 1px 8px 0 rgba(0, 0, 0, .5)
  background: -webkit-gradient(linear, left top, left bottom, from(#7eccff), to(#d3fffc));
  background: linear-gradient(180deg, #7eccff 0, #d3fffc 100%);
  border-radius: 13px;
  // background: url(data:image/svg+xml,%3C%3Fxml version%3D%221.0%22 encoding%3D%22UTF-8%22%3F%3E%3Csvg width%3D%2220px%22 height%3D%2220px%22 viewBox%3D%220 0 20 20%22 version%3D%221.1%22 xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22 xmlns%3Axlink%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%22%3E %3C!-- Generator%3A Sketch 53.2 (72643) - https%3A%2F%2Fsketchapp.com --%3E %3Ctitle%3EFill 1%3C%2Ftitle%3E %3Cdesc%3ECreated with Sketch.%3C%2Fdesc%3E %3Cg id%3D%22SPIN-2-WIN%22 stroke%3D%22none%22 stroke-width%3D%221%22 fill%3D%22none%22 fill-rule%3D%22evenodd%22%3E %3Cg id%3D%22S2W-Board-2%22 transform%3D%22translate(-1005.000000%2C -99.000000)%22 fill%3D%22%23FFFFFF%22%3E %3Cg id%3D%22GAME%22 transform%3D%22translate(240.000000%2C 88.000000)%22%3E %3Cg id%3D%22Stats%22%3E %3Cg id%3D%22Cold%22 transform%3D%22translate(765.000000%2C 9.000000)%22%3E %3Cg id%3D%22circle-Container%5B3h%5D%22%3E %3Cpath d%3D%22M18.9368971%2C12.7135377 L15.8224195%2C14.295597 L11.3441197%2C11.7269256 L15.8349316%2C9.27199497 L18.9657445%2C10.8943307 C19.0731403%2C10.9500733 19.1895726%2C10.9764947 19.3042672%2C10.9764947 C19.5479061%2C10.9764947 19.7842464%2C10.8575986 19.911453%2C10.6462277 C20.0987874%2C10.3356157 19.9792271%2C9.94283965 19.6438325%2C9.76948978 L17.2213451%2C8.51415315 L19.3119135%2C7.37126839 C19.6427898%2C7.19050764 19.7526185%2C6.79547615 19.5576378%2C6.48905286 C19.3626571%2C6.18230736 18.9365496%2C6.08048847 18.6060208%2C6.26124921 L16.5029403%2C7.41057821 L16.5029403%2C4.83385156 C16.5029403%2C4.47812988 16.1918749%2C4.18942824 15.807822%2C4.18942824 C15.4241167%2C4.18942824 15.1127037%2C4.47812988 15.1127037%2C4.83385156 L15.1127037%2C8.17067552 L10.702178%2C10.5817854 L10.7157328%2C5.94129304 L13.8149178%2C4.13561889 C14.1402332%2C3.94615843 14.2378973%2C3.54854924 14.0338801%2C3.24728134 C13.8298628%2C2.94601344 13.4009748%2C2.85482754 13.0753119%2C3.04428799 L10.7199035%2C4.41658746 L10.7251169%2C2.64635659 C10.7261595%2C2.29031271 10.4157892%2C2.00096663 10.0317363%2C2 C9.63760426%2C2.00225548 9.33592291%2C2.28709059 9.33488023%2C2.64281226 L9.32966684%2C4.42206505 L6.92977084%2C3.02688856 C6.60445547%2C2.83775032 6.17521991%2C2.92893622 5.97155024%2C3.23052633 C5.76753301%2C3.53211645 5.86623982%2C3.92972564 6.19120763%2C4.11886388 L9.32549613%2C5.94064861 L9.31194132%2C10.5611638 L4.90176315%2C8.03148008 L5.0460002%2C4.74717662 C5.06164036%2C4.39145495 4.7634346%2C4.09147589 4.37972929%2C4.07697637 C3.99046303%2C4.06022136 3.6724464%2C4.33893445 3.65680624%2C4.69465612 L3.54454463%2C7.25301671 L2.04656465%2C6.39400042 C1.7202066%2C6.20615102 1.29166616%2C6.30023683 1.08973428%2C6.60279358 C0.887802413%2C6.90567254 0.988594569%2C7.3026373 1.31530018%2C7.48984228 L2.79034125%2C8.3359701 L0.388707459%2C9.58679577 C0.0540079887%2C9.76111227 -0.0648572439%2C10.1538883 0.123172261%2C10.4641781 C0.250378914%2C10.6745823 0.486719142%2C10.7931562 0.729662995%2C10.7931562 C0.845052636%2C10.7931562 0.961832514%2C10.7664127 1.06957585%2C10.7103478 L4.14095615%2C9.11056693 L8.65574963%2C11.700182 L4.1353952%2C14.1715455 L1.03968577%2C12.5356769 C0.705333854%2C12.3594271 0.281311679%2C12.467368 0.0915443779%2C12.7760468 C-0.0989180416%2C13.08537 0.0175142769%2C13.4787904 0.350823511%2C13.6550402 L2.75523778%2C14.925843 L1.22006897%2C15.7652044 C0.889540209%2C15.9459651 0.779363955%2C16.3409966 0.974344643%2C16.6474199 C1.10398421%2C16.8513799 1.33580617%2C16.9647984 1.57388419%2C16.9647984 C1.6937921%2C16.9647984 1.81543781%2C16.9357993 1.92630918%2C16.8752235 L3.49727658%2C16.0165295 L3.49727658%2C18.5932561 C3.49727658%2C18.9493 3.80834203%2C19.2376794 4.1923949%2C19.2376794 C4.57610022%2C19.2376794 4.88751322%2C18.9493 4.88751322%2C18.5932561 L4.88751322%2C15.2564322 L9.3053377%2C12.8414558 L9.29143533%2C17.5934333 L6.20719535%2C19.2824669 C5.87631903%2C19.4635498 5.7668379%2C19.8589035 5.96181858%2C20.1650046 C6.15749439%2C20.4717501 6.58394948%2C20.573569 6.91413068%2C20.392486 L9.28726462%2C19.0926842 L9.280661%2C21.3539656 C9.27961832%2C21.7096873 9.58998865%2C21.9990334 9.97369396%2C22 L9.97577932%2C22 C10.3587895%2C22 10.669855%2C21.7125872 10.6708976%2C21.3575099 L10.6771537%2C19.1648596 L13.1072873%2C20.4179407 C13.2143356%2C20.4730389 13.3304203%2C20.4991381 13.4444197%2C20.4991381 C13.6887538%2C20.4991381 13.9257892%2C20.3795976 14.0526483%2C20.1679045 C14.2392875%2C19.856648 14.1186845%2C19.4645164 13.7829424%2C19.2914888 L10.681672%2C17.6923523 L10.6955743%2C12.8701326 L15.0908075%2C15.3914388 L14.9538692%2C18.6815421 C14.9392717%2C19.0372638 15.2381726%2C19.3365984 15.6215303%2C19.3504535 C15.6309144%2C19.3507757 15.6399509%2C19.3507757 15.6489875%2C19.3507757 C16.0205282%2C19.3507757 16.3288132%2C19.0785069 16.3430631%2C18.7311627 L16.4497638%2C16.1708688 L18.4788142%2C17.3346974 C18.5928136%2C17.4001063 18.7193251%2C17.4313609 18.8437513%2C17.4313609 C19.0766159%2C17.4313609 19.3042672%2C17.3227755 19.4356445%2C17.1259042 C19.6375764%2C16.8230252 19.5367842%2C16.4260605 19.2104262%2C16.2388555 L17.1810283%2C15.075027 L19.6049058%2C13.8438562 C19.9416907%2C13.6727618 20.0650742%2C13.2812747 19.8805203%2C12.9690516 C19.6963139%2C12.6568285 19.273682%2C12.5427655 18.9368971%2C12.7135377%22 id%3D%22Fill-1%22%3E%3C%2Fpath%3E %3C%2Fg%3E %3C%2Fg%3E %3C%2Fg%3E %3C%2Fg%3E %3C%2Fg%3E %3C%2Fg%3E%3C%2Fsvg%3E) 0 0 / 20px 24px no-repeat
`;
const StatsDiv = styled.div`
  // width: 28px;
  // height: 25px;
  border-radius: 50%;
  // background-color: orange;
  // margin: 2px;
  align-items:center;
  // padding:1px;
  display:flex;
  justify-content:center;
  align-items:center;
  // font-size:16px;
  // font-weight:700;
  border-radius: 50%;
  width: 24px;
  height: 24px;
  padding: 0 3px;
  margin-right: 5px;
  font-size: 16px;
  // border-radius: 5px;
  -webkit-box-shadow: 0 1px 8px 0 rgba(0, 0, 0, .5);
  box-shadow: 0 1px 8px 0 rgba(0, 0, 0, .5);
  `;

// const StatsDivL= styled.div`
// width: 28px;
// height: 25px;
// padding:1px;
// border-radius: 50%;
// background-color: orange;
// margin: 2px;
// display:flex;
// justify-content:center;
// align-items:center;
// font-size:16px;
// font-weight:500;
// `;
const StatImage = styled.img`
  // background-image: none;
  // width: 100%; 
  display: flex;
  justify-content: center;
  align-items: center;
  // background: brown; 
  padding: 1px;
  // max-width: 25px; 
  // height: 30px;
  object-fit: cover;
  filter: none;
  border-radius:50%;
  width: 24px;
    height: 24px;
  `

const DivContainer = styled.div`
display:flex;
gap:5px;
width: 352px;
 height: 42px;
 font-family: Adamina;
`
const GenDiv = styled.div`
width:30px;
height:30px;
padding:3px;
color:white;
background-color:black;
font-size:16px;
font-weight:500;
display:flex;
justify-content:center;
align-items:center;
border-radius:5px;
`
// const Won = styled.div`
//         // position: relative;
//         width: 400px;
//         height: 400px;
//         margin:1em auto;
//         border: 2px solid whitesmoke;
//         padding: 0;
//         border-radius: 50%;
//         overflow: hidden;     
//         position:absolute;
//         top:10%;
//         left:35%;
//         z-index:3;
//         background-color:green;
//         display:flex;
//         align-items:center;
//         justify-content:center;
//         color:purple;
// `;


export default Navbar;
// {result==='win'?
//        <Won>
//        <h1>YOU WON</h1><br/>
//        <h1>KSh {payoutAmount}</h1>
//        </Won>:<div></div>}