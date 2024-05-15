import React from 'react';
import styled from '@emotion/styled';


interface NavProps {
  randomNumber: number|null;
  result: string|null;
}
const Navbar: React.FC <NavProps> = ({randomNumber,result}) => {
// const[openOption, setOpenOption] = useState<boolean>(false)
  return (
    <NavbarContainer>
      <NavItemOne>
        {randomNumber !== null?randomNumber:<p> Statistics are not available yet..</p>}
         {/* <p>
          {result === 'win' ? 'win!' : 'lose!'}
        </p> */}
    </NavItemOne>
     <DivContainer>
      <NavItemThree>
       <ParentDiv>
         <StatsDiv>{randomNumber}</StatsDiv>
         <StatsDiv>{randomNumber}</StatsDiv>
         <StatsDiv>{randomNumber} </StatsDiv>
         <StatsDiv>{randomNumber}</StatsDiv>
         <StatsDiv>{randomNumber}</StatsDiv>
       </ParentDiv>
      </NavItemThree>
      <NavItemTwo>
         <ParentDivs>
           <StatsDiv>{randomNumber}</StatsDiv>
           <StatsDiv></StatsDiv>
           <StatsDiv></StatsDiv>
           <StatsDiv></StatsDiv>
           <StatsDiv></StatsDiv>
         </ParentDivs>
      </NavItemTwo>
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
  max-height:42px;
  height:100%;
  margin-bottom:30px;
  margin-top:0px;
  box-shadow:border-box;
  border:1px solid gray;
`;

const NavItemTwo = styled.div`
  cursor: pointer;
  padding: 5px 10px;
  border-radius: 5px;
  background-color: blue;
  transition: background-color 0.3s ease;
  &:hover {
    background-color: #F06543;
  }
`;
const NavItemThree = styled.div`
  cursor: pointer;
  padding: 5px 10px;
  border-radius: 5px;
  background-color: #F06543 ;
  transition: background-color 0.3s ease;
  &:hover {
    background-color: #F06543;
  }
`;
const NavItemOne = styled.div`
  cursor: pointer;
  padding: 5px 10px;
  border-radius: 5px;
  background-color: ;
  transition: background-color 0.3s ease;
  &:hover {
    background-color: #F06543;
  }
`;
const ParentDivs = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 35px;
  background-color: light blue;
`;
const ParentDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 35px;
  background-color:  #F06543;
`;
const StatsDiv = styled.div`
  width: 25px;
  height: 25px;
  border-radius: 50%;
  background-color: #007bff;
  margin: 10px;
  align-items:center;
`;
const DivContainer = styled.div`
display:flex;
gap:5px;
`



export default Navbar;
