import React from 'react';
import styled from '@emotion/styled';
import {faQuestion,faDollarSign,faChartSimple} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const OuterDiv = styled.div`
  border: 1px solid #ccc;
  padding: 3px;
  display:flex;
  justify-content:space-between;
  align-items:center;
  height:30px;
  margin:0px;
  font-family: Roboto;
  font-size: 13px;
  background-color: blue;
  color:white;
  margin-bottom:0px;
`;

const FirstCol = styled.div`
box-sizing: border-box;
max-width: 100%;
-webkit-box-flex: 1;
-ms-flex: 1 1 0%;
flex: 1 1 0%;
padding: 0;
padding-right: 30px;
text-align: center;
color:white;
font-size:14px;
font-weight:400;
`;
const SecondCol = styled.div`
box-sizing: border-box;
max-width: 100%;
-webkit-box-flex: 1;
-ms-flex: 1 1 0%;
flex: 1 1 0%;
padding: 0;
font-size:14px;
font-weight:400;
`
const ThirdCol = styled.div`
-webkit-box-pack: end;
    -ms-flex-pack: end;
    justify-content: flex-end;
    -webkit-box-align: end;
    -ms-flex-align: end;
    align-items: flex-end;
    margin-left: auto;
`

const BlueButton = styled.button`
  background-color: #007bff;
  color: #fff;
  padding: 10px 10px;
  border: none;
  border-radius: 5px;
  margin-right: 2px;
  width:60px;
  height:35px;
`;
const StyledAnchor = styled.a`
height: 26px;;
 width:26px;
 radius:50%;
margin-left: 3px;
color:white;
font-size: 12px;
cursor: pointer;
background-color: #1967ff;
border-radius: 2px;
&:hover {
    background-color: gray;  
}
`
 const StyledSpan = styled.span`
    font-family: icons-system;
    font-style: normal;
    font-weight: 00;
    font-variant: normal;
    cursor: pointer;
    text-transform: none;
    line-height: 1;
    height:20px;
    width:20px;
    border-radius:50%;
 `
 const BtnSpan = styled.button`
    font-family: icons-system;
    font-style: normal;
    font-weight: 400;
    font-variant: normal;
    text-transform: none;
    line-height: 1;   
    width:60px;
    background-color:blue;
    color:white;
    border:none;
    outline:none;
    height:35px;
 `

const Footer: React.FC = () => {
  return (
    <OuterDiv>
      <FirstCol>
        <div>Bet limits: KSh10.00 - KSh10,000.00</div>
      </FirstCol>
      <SecondCol>
        <div>Maximum payout: 50,000.00</div>
      </SecondCol>
      <ThirdCol>
        <div>
          <BlueButton> 
          <StyledSpan>
            <StyledAnchor href="https://example.com" target="_blank">
                <FontAwesomeIcon icon={faQuestion} />
            </StyledAnchor>
            </StyledSpan>
          </BlueButton>
          <BlueButton><StyledSpan><FontAwesomeIcon icon={faDollarSign} /></StyledSpan></BlueButton>
          <BtnSpan><FontAwesomeIcon icon={faChartSimple} /></BtnSpan>
        </div>
      </ThirdCol>
    </OuterDiv>
  );
};

export default Footer;
