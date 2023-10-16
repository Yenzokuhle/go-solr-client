import React, { ReactElement, useState } from 'react';
import styled from 'styled-components';
import {
  Header,
  ResultsCard,
  Sidebar,
  TopUpView,
  UsagePicker,
} from '../components';

import { breakpoints } from '../helpers/breakpoints';
import { StaticImage } from 'gatsby-plugin-image';

const BackButton = ({
  handleBackClick,
}: {
  handleBackClick: () => void;
}): ReactElement => {
  return (
    <BButtonContainer onClick={handleBackClick}>
      <StaticImage
        className="arrow-left"
        src={`../images/icons/left-md.svg`}
        alt={'left arrow icon back button'}
        objectPosition="center"
      />
      <p>{'back'}</p>
    </BButtonContainer>
  );
};

const BButtonContainer = styled.div`
  width: min-content;
  height: min-content;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.5rem 1.5rem;
  border-radius: 2rem;
  cursor: pointer;
  margin: 0.4rem;
  margin-left: 2rem;

  p {
    font-size: 1rem;
    font-family: 'roboto', sans-serif;
    font-weight: 400;
    font-style: normal;
    text-transform: capitalize;
    color: var(--black);
  }

  .arrow-left {
    width: 24px;
    height: 24px;
    margin-right: 0.35rem;

    img {
      width: 100%;
      height: 100%;
    }
  }

  &:hover {
    background-color: var(--gosolr-yellow-secondary);

    p {
      font-weight: 500;
    }
  }

  &:active {
    transform: scale(1);
  }

  @media (max-width: ${breakpoints.tabletMD}px) {
    margin-left: 0;
    margin: 0;
  }

  @media (max-width: ${breakpoints.tabletSM}px) {
    padding: 0.35rem 1rem;
  }
`;

interface Props {
  category?: string;
}

const MainScreen: React.FC<Props> = ({ category }: Props) => {
  const [stage, setStage] = useState<number>(1);

  const handlePageStage = (stage: number) => {
    setStage(stage);
  };
  return (
    <MasterContainer>
      <TopBar>
        <Header onHomeScreen={true} />
      </TopBar>
      <MainContent>
        <div className="sidebar">
          <Sidebar stage={stage} />
          {stage > 1 && (
            <BackButton handleBackClick={() => handlePageStage(stage - 1)} />
          )}
        </div>
        <div className="content">
          {stage === 1 && (
            <DynamicContainer>
              <UsagePicker handleContinue={handlePageStage} />
            </DynamicContainer>
          )}
          {stage === 2 && (
            <DynamicContainer>
              <TopUpView handleContinue={handlePageStage} />{' '}
            </DynamicContainer>
          )}
          {stage === 3 && (
            <DynamicContainer>
              <ResultsCard amountSpent={5000} />
            </DynamicContainer>
          )}
        </div>
      </MainContent>
    </MasterContainer>
  );
};

const MasterContainer = styled.div`
  width: 100%;
  height: 100%;
  background-color: var(--background-color);
  display: flex;
  flex-direction: column;
  padding: 2rem 7rem;
  row-gap: 2rem;

  @media (max-width: ${breakpoints.tabletLG}px) {
    padding: 2rem;
  }

  @media (max-width: ${breakpoints.tabletMD}px) {
    padding: 2rem;
  }

  @media (max-width: ${breakpoints.mobileLG}px) {
    padding: 0rem;
  }
`;

const TopBar = styled.nav`
  width: 100%;
  height: auto;

  @media (max-width: ${breakpoints.mobileLG}px) {
    padding: 1rem;
    padding-bottom: 0rem;
  }
`;

const MainContent = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  column-gap: 2rem;
  padding: 0rem 8rem;

  .sidebar {
    width: 18rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  .content {
    flex: 1;
    height: auto;

    .info-sort-container {
      width: 100%;
      height: 3rem;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
  }

  @media (max-width: ${breakpoints.desktopMD}px) {
    padding: 0rem 2rem;
  }

  @media (max-width: ${breakpoints.desktopXS}px) {
    padding: 0rem;
  }

  @media (max-width: ${breakpoints.tabletLG}px) {
    .sidebar {
      width: 16rem;
      height: auto;
    }
  }

  @media (max-width: ${breakpoints.tabletMD}px) {
    flex-direction: column;

    .sidebar {
      width: 100%;
      height: auto;
      display: flex;
      flex-direction: row-reverse;
      margin-bottom: 2rem;
    }
  }

  @media (max-width: ${breakpoints.mobileLG}px) {
    .sidebar {
      padding: 1rem 0rem;
      padding-top: 0rem;
    }

    .content {
      padding: 0rem 1rem;

      .info-sort-container {
        height: 2.5rem;
      }
    }
  }
`;

const DynamicContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
`;

export const ErrorScreen = styled.div`
  width: 100%;
  height: 20rem;
  display: flex;
  align-items: center;
  justify-content: center;

  p {
    font-size: 1.25rem;
    font-family: RobotoRegular;
    text-transform: capitalize;
    color: red;
  }
`;

export default MainScreen;
