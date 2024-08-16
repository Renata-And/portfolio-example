import React from 'react';
import photoSrc from '../../../assets/images/photo.jpeg';
import styled from 'styled-components';
import { FlexWrapper } from '../../../components/FlexWrapper';

export const Main = () => {
  return (
    <StyledMain>
      <FlexWrapper justify={'space-around'} align={'center'}>
        <div>
          <span>Hi There</span>
          <h2>I am Svetlana Dyablo</h2>
          <h1>A Web Developer. </h1>
        </div>

        <Photo src={photoSrc} alt='' />
      </FlexWrapper>
    </StyledMain>
  );
};

const Photo = styled.img`
  width: 350px;
  height: 430px;
  object-fit: cover;
`;

const StyledMain = styled.main`
  height: 100vh;
  background-color: #edffd5;
`;
