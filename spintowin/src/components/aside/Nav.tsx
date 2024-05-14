import React from 'react';
import styled from '@emotion/styled';



const Navbar: React.FC = () => {
  return (
    <NavbarContainer>
      <NavItemThree>Statistics are not available yet.</NavItemThree>
     <DivContainer>
      <NavItemThree>
       <ParentDiv>
         <ChildDiv />
         <ChildDiv />
         <ChildDiv />
         <ChildDiv />
         <ChildDiv />
       </ParentDiv>
      </NavItemThree>
      <NavItemTwo>
         <ParentDivs>
           <ChildDiv />
           <ChildDiv />
           <ChildDiv />
           <ChildDiv />
           <ChildDiv />
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
const ChildDiv = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: #007bff;
  margin: 10px;
`;
const DivContainer = styled.div`
display:flex;
gap:5px;
`



export default Navbar;
