import React from 'react';
import styled from '@emotion/styled';



const Navbar: React.FC = () => {
  return (
    <NavbarContainer>
      <NavItem>Statistics are not available yet.</NavItem>
     <DivContainer>
      <NavItem>
       <ParentDiv>
         <ChildDiv />
         <ChildDiv />
         <ChildDiv />
         <ChildDiv />
         <ChildDiv />
       </ParentDiv>
      </NavItem>
      <NavItems>
         <ParentDivs>
           <ChildDiv />
           <ChildDiv />
           <ChildDiv />
           <ChildDiv />
           <ChildDiv />
         </ParentDivs>
      </NavItems>
    </DivContainer>
   </NavbarContainer>
  );
};
const NavbarContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color:rgb(128,0,0);
  color: #fff;
  padding: 2px 2px;
  width:100%;
  max-width:920px;
  height:45px;
  margin-bottom:30px;
  margin-top:0px;
`;

const NavItems = styled.div`
  cursor: pointer;
  padding: 5px 10px;
  border-radius: 5px;
  background-color: blue;
  transition: background-color 0.3s ease;
  &:hover {
    background-color: #F06543;
  }
`;
const NavItem = styled.div`
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
