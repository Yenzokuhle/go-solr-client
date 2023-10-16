import React, { ReactElement } from 'react';
import styled from 'styled-components';
import { PrimaryButton } from '../../elements';
import { breakpoints } from '../../helpers/breakpoints';
import { StaticImage } from 'gatsby-plugin-image';

type BorderButtonProps = {
  title: string;
  isActive: boolean;
  handleClick: () => void;
};

export const BorderButton = ({
  title,
  isActive,
  handleClick,
}: BorderButtonProps): ReactElement => {
  return (
    <BorderButtonContainer
      data-testid={'borderButton'}
      className={isActive ? 'is-active' : ''}
      onClick={handleClick}
    >
      <p>{title}</p>
    </BorderButtonContainer>
  );
};
const BorderButtonContainer = styled.div`
  width: auto;
  height: min-content;
  border-radius: 24px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.35rem 1rem;
  border: 1.5px solid #929292;
  cursor: pointer;
  //box-shadow: rgba(249, 219, 97, 0.1) 2px 3px 6px;

  p {
    font-size: 1.1rem;
    font-family: 'roboto', sans-serif;
    font-weight: 400;
    font-style: normal;
    text-transform: capitalize;
    color: var(--black);
    text-align: center;
  }

  &.is-active {
    transform: scale(1.1);
    border: 1.5px solid var(--gosolr-yellow-secondary);

    p {
      font-size: 1.15rem;
      color: var(--white);
      font-weight: 500;
    }
  }

  &:hover {
    transform: scale(1.1);
    border: 1.5px solid var(--gosolr-yellow-secondary);

    p {
      color: var(--gosolr-yellow-secondary);
    }
  }

  &:active {
    transform: scale(1.02);
  }

  @media (max-width: ${breakpoints.tabletLG}px) {
    p {
      font-size: 1rem;
    }
  }

  @media (max-width: ${breakpoints.mobileLG}px) {
    p {
      width: max-content;
      font-size: 1rem;
    }
  }
`;

type Props = {
  handleContinue: (stage: number) => void;
};

const TopUpView: React.FC<Props> = ({ handleContinue }: Props) => {
  return (
    <MainContainer>
      <div className="top-up-info">
        <div className="info-text">
          <p className="light">How many electricity </p>
          <p className="mid">
            top ups <span>per month?</span>
          </p>
        </div>
        <div className="top-up-actions">
          <BorderButton
            title="Prepaid"
            isActive={false}
            handleClick={() => console.log('BorderButton --> clicked ...')}
          />
          <BorderButton
            title="Postpaid"
            isActive={false}
            handleClick={() => console.log('BorderButton --> clicked ...')}
          />
        </div>
      </div>
      <div className="top-up-items">
        <Default>
          <StaticImage
            className="logo-image"
            src={`../../images/newsletter-illustration.svg`}
            alt={'Go Solr logo'}
            objectFit="contain"
            objectPosition="center"
          />
        </Default>
      </div>
      <div className="top-up-totals">
        <Total>
          <span>Total PM: </span> R0
        </Total>
        <PrimaryButton
          title="Calculate"
          handleClick={() => handleContinue(3)}
          isDisabled={false}
        />
      </div>
    </MainContainer>
  );
};

const MainContainer = styled.main`
  width: 100%;
  min-height: 100%;
  display: flex;
  flex-direction: column;

  .top-up-info {
    width: 100%;
    height: auto;
    display: flex;
    justify-content: space-between;
    padding-bottom: 2rem;
    border-bottom: 1px solid #ededed;
    align-items: center;

    .info-text {
      display: flex;
      flex-direction: column;
    }

    .light {
      display: flex;
      flex-direction: row;
      align-items: center;
      font-size: 1.2rem;
      font-family: 'roboto', sans-serif;
      font-weight: 400;
      font-style: normal;
      color: var(--black);
    }

    .mid {
      font-size: 1.5rem;
      font-family: 'roboto', sans-serif;
      font-weight: 500;
      font-style: normal;
      color: var(--gosolr-yellow-primary);

      span {
        color: var(--black);
      }
    }

    .top-up-actions {
      width: auto;
      height: 100%;
      display: flex;
      column-gap: 2rem;
    }
  }

  .top-up-items {
    width: 100%;
    flex: 1;
    margin-top: 1rem;
    margin-bottom: 1rem;
  }

  .top-up-totals {
    width: 100%;
    display: flex;
    justify-content: space-between;
  }

  @media (max-width: ${breakpoints.tabletSM}px) {
    .top-up-info {
      .light {
        font-size: 1rem;
      }

      .mid {
        font-size: 1.25rem;
      }

      .top-up-actions {
        column-gap: 1rem;
      }
    }
  }

  @media (max-width: ${breakpoints.mobileLG}px) {
    .top-up-info {
      .top-up-actions {
        column-gap: 0.5rem;
      }
    }
  }
`;

const Total = styled.p`
  font-size: 1.5rem;
  font-family: 'roboto', sans-serif;
  font-weight: 500;
  font-style: normal;
  color: var(--black);

  span {
    font-size: 1.2rem;
    font-weight: 400;
  }
`;

const Default = styled.div`
  width: 100%;
  height: 12rem;
  display: flex;
  justify-content: center;
  padding-top: 1.5rem;

  .logo-image {
    width: auto;
    height: 100%;
  }
`;

export default TopUpView;
