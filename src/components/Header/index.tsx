import React, { ReactElement, useState } from 'react';
import styled from 'styled-components';
import { Modal } from '../../elements';
import { StaticImage } from 'gatsby-plugin-image';
import { breakpoints } from '../../helpers/breakpoints';

enum MODAL_TYPES {
  CART = 'CART',
  INFO = 'INFO',
}

const GoSolrLogo = (): ReactElement => {
  return (
    <LogoContainer>
      <StaticImage
        className="logo-image"
        src={`../../images/gosolr-logo-new.svg`}
        alt={'Go Solr logo'}
        objectFit="contain"
        objectPosition="center"
      />
    </LogoContainer>
  );
};

const LogoContainer = styled.div`
  width: 3.45rem;
  height: 100%;
  background-color: var(--black);
  border-radius: 2.5rem;
  display: flex;
  justify-content: center;
  align-items: center;

  .logo-image {
    width: fit-content;
    height: 3.45rem;
  }

  @media (max-width: ${breakpoints.tabletMD}px) {
    .logo-image {
      height: 3.25rem;
    }
  }

  @media (max-width: ${breakpoints.mobileLG}px) {
    .logo-image {
      height: 2.25rem;
    }
  }
`;

interface HeaderProps {
  onHomeScreen: boolean;
}

const Header: React.FC<HeaderProps> = ({ onHomeScreen }: HeaderProps) => {
  const [isModalOpen, setModalOpen] = useState<boolean>(false);
  const [modelInView, setModalInView] = useState<MODAL_TYPES>();

  const handleModalOpen = (modal?: MODAL_TYPES): void => {
    setModalOpen(!isModalOpen);
    modal && setModalInView(modal);
  };

  return (
    <MainContainer>
      <Modal
        data-testid={'candidateInfoModal'}
        open={isModalOpen}
        onClose={handleModalOpen}
      >
        <ModalContainer>
          {modelInView === MODAL_TYPES.INFO && (
            <CandidateView>
              <p className="name">{'Yenzokuhle Mdladla'}</p>
              <p className="title">{'Developer'}</p>
              <p className="candidate">{'Candidate'}</p>
            </CandidateView>
          )}
        </ModalContainer>
      </Modal>
      <div className="header-container">
        <GoSolrLogo />
        <h1>{'Energy Calculator'}</h1>
        <div className="right-corner">
          <PictureButton
            data-testid={'pictureButton'}
            onClick={() => handleModalOpen(MODAL_TYPES.INFO)}
          >
            <StaticImage
              className="candidate"
              src={`../../images/candidate.jpeg`}
              alt={'Candidate image'}
              objectPosition="center"
            />
          </PictureButton>
        </div>
      </div>
    </MainContainer>
  );
};

const MainContainer = styled.header`
  width: 100%;

  h1 {
    font-size: 1.35rem;
    font-family: 'roboto', sans-serif;
    font-weight: 400;
    font-style: normal;
    text-transform: uppercase;
    color: var(--white);
  }

  .header-container {
    height: 5rem;
    background-color: var(--black);
    border-radius: 2.5rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: relative;
    align-self: center;
    padding: 0rem 2rem;
  }

  .right-corner {
    width: auto;
    height: auto;
    display: flex;
    align-items: center;
    column-gap: 1rem;
  }

  @media (max-width: ${breakpoints.tabletMD}px) {
    height: 4.5rem;
  }

  @media (max-width: ${breakpoints.tabletMD}px) {
    h1 {
      font-size: 1.25rem;
      word-wrap: break-word;
      text-align: center;
    }
  }

  @media (max-width: ${breakpoints.mobileLG}px) {
    h1 {
      font-size: 1.2rem;
    }
  }
`;

const ModalContainer = styled.div`
  width: auto;
  height: auto;
  position: absolute;
  right: 3rem;
  top: 8rem;
  background-color: white;
  z-index: 20;
  border-radius: 18px;
`;

const CandidateView = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  padding: 2rem;
  padding-right: 5rem;
  row-gap: 0.5rem;

  p {
    font-family: 'roboto', sans-serif;
    font-weight: 400;
    font-style: normal;
    text-transform: capitalize;
  }

  .name {
    color: var(--black);
    font-size: 1.3rem;
  }

  .title {
    color: var(--black);
    font-size: 1.175rem;
  }

  .candidate {
    color: var(--gosolr-yellow-primary);
    font-size: 1rem;
  }
`;

const PictureButton = styled.div`
  width: 2.75rem;
  height: 2.75rem;
  border-radius: 50%;
  border: 1px solid var(--gosolr-yellow--dark-primary);
  cursor: pointer;

  .candidate {
    width: 100%;
    height: 100%;
    border-radius: 50%;
  }

  &:hover {
    transform: scale(1.04);
  }

  &:active {
    transform: scale(1);
  }

  @media (max-width: ${breakpoints.mobileLG}px) {
    width: 2.45rem;
    height: 2.45rem;
  }
`;

export default Header;
