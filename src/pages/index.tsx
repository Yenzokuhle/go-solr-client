import React from 'react';
import styled from 'styled-components';
import { HeadFC } from 'gatsby';
import { breakpoints } from '../styles/breakpoints';
import { MainScreen } from '../components';

export const IndexPage: React.FC = () => {
  return (
    <MainContainer>
      <MainScreen />
    </MainContainer>
  );
};

export const MainContainer = styled.div`
  width: 100%;
  height: 100vh;
  background-color: black;

  @media (max-width: ${breakpoints.tabletSM}px) {
    height: auto;
  }
`;

export default IndexPage;

export const Head: HeadFC = () => <title>Go Solr - Technical</title>;
