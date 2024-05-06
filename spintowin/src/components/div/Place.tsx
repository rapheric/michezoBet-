import React from 'react';
import styled from '@emotion/styled';

const OuterDiv = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
`;

const InnerDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Image = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  margin-bottom: 10px;
`;

const Span = styled.span`
  font-weight: bold;
`;

const Place: React.FC = () => {
  return (
    <OuterDiv>
      <InnerDiv>
        <Image src="image1.jpg" alt="Image 1" />
        <Span>Text 1</Span>
      </InnerDiv>
      <InnerDiv>
        <Image src="image2.jpg" alt="Image 2" />
        <Span>Text 2</Span>
      </InnerDiv>
      <InnerDiv>
        <Image src="image3.jpg" alt="Image 3" />
        <Span>Text 3</Span>
      </InnerDiv>
      <InnerDiv>
        <Image src="image4.jpg" alt="Image 4" />
        <Span>Text 4</Span>
      </InnerDiv>
      <InnerDiv>
        <Image src="image5.jpg" alt="Image 5" />
        <Span>Text 5</Span>
      </InnerDiv>
      <InnerDiv>
        <Image src="image6.jpg" alt="Image 6" />
        <Span>Text 6</Span>
      </InnerDiv>
    </OuterDiv>
  );
};

export default Place;
