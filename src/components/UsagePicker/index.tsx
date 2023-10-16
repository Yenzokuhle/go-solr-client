import React from 'react';
import styled from 'styled-components';
import { breakpoints } from '../../helpers/breakpoints';
import { PrimaryButton } from '../../elements';
import { ENERGY_USING_ITEMS } from '../../helpers/constants';

type Props = {
  activeItem?: boolean;
  handleContinue: (stage: number) => void;
};

export enum BACK_UP_STATUS {
  BACKED = 'Backed up',
  NOTBACKED = 'Not backed up',
}
export type BoxItem = {
  name: string;
  value: string;
  status: BACK_UP_STATUS;
};

const UsagePicker: React.FC<Props> = ({
  activeItem,
  handleContinue,
}: Props) => {
  return (
    <MainContainer>
      <div className="action-text">
        <div className="light">
          Tell us about your
          <p className="mid">
            home <span>electricity usage</span>
          </p>
        </div>
      </div>
      <Picker>
        {ENERGY_USING_ITEMS.map((item: BoxItem, idx) => (
          <BoxItem key={`energy-item-${idx + 1}`}>
            <div className="icon-box"></div>
            <p>{item.value}</p>
          </BoxItem>
        ))}
      </Picker>
      <PrimaryButton
        title="Continue"
        isDisabled={false}
        handleClick={() => handleContinue(2)}
      />
    </MainContainer>
  );
};

const MainContainer = styled.main`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;

  &.action-text {
    width: 100%;
    height: auto;
  }

  .light {
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    font-size: 1.3rem;
    font-family: 'roboto', sans-serif;
    font-weight: 400;
    font-style: normal;
    color: var(--black);
  }

  .mid {
    font-size: 1.7rem;
    font-family: 'roboto', sans-serif;
    font-weight: 500;
    font-style: normal;
    color: var(--gosolr-yellow-primary);
    padding-left: 0.5rem;

    span {
      color: var(--black);
    }
  }

  @media (max-width: ${breakpoints.tabletMD}px) {
    //align-items: center;
  }

  @media (max-width: ${breakpoints.tabletSM}px) {
    .light {
      font-size: 1rem;
    }

    .mid {
      font-size: 1.25rem;
    }
  }
`;

const Picker = styled.div`
  max-width: 37.5rem;
  height: auto;
  margin-top: 2rem;
  margin-bottom: 2.5rem;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
  gap: 1rem;
`;

const BoxItem = styled.div`
  width: 100%;
  height: 100%;
  //background-color: dodgerblue;
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 0.5rem;
  cursor: pointer;

  .icon-box {
    width: 4rem;
    height: 4rem;
    background-color: #f7f6f6;
    border-radius: 50%;
  }

  p {
    font-size: 1rem;
    font-family: 'roboto', sans-serif;
    font-weight: 400;
    font-style: normal;
    color: var(--black);
  }

  &:hover {
    .icon-box {
      background-color: var(--gosolr-yellow-primary);
    }

    p {
      color: var(--gosolr-yellow-primary);
      font-weight: 500;
    }
  }

  &:active {
    transform: scale(1.1);
  }
`;

export default UsagePicker;
