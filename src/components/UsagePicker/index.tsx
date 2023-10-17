import React from 'react';
import styled from 'styled-components';
import { breakpoints } from '../../helpers/breakpoints';
import { PrimaryButton } from '../../elements';
import { ENERGY_USING_ITEMS } from '../../helpers/constants';
import { FieldArray } from 'formik';

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
        <div className="intro-text">
          <p className="light">Tell us about your</p>
          <p className="mid">
            home <span>electricity usage</span>
          </p>
        </div>
      </div>
      <FieldArray
        name="energyUsers"
        render={({ form, push, remove }) => {
          const { values } = form;
          return (
            <>
              <Picker>
                {ENERGY_USING_ITEMS.map((item: BoxItem, idx) => {
                  const existsInArray = form.values?.energyUsers.findIndex(
                    (energyItem: BoxItem) => energyItem.name === item.name
                  );
                  return (
                    <BoxItem
                      key={`energy-item-${idx + 1}`}
                      onClick={() =>
                        existsInArray < 0 ? push(item) : remove(existsInArray)
                      }
                      className={existsInArray >= 0 ? 'box-active' : ''}
                    >
                      <div className="icon-box">
                        <p>{item.value}</p>
                      </div>
                    </BoxItem>
                  );
                })}
              </Picker>
              <PrimaryButton
                title="Continue"
                isDisabled={values?.energyUsers.length === 0}
                handleClick={() => handleContinue(2)}
              />
            </>
          );
        }}
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

  .intro-text {
    width: 100%;
    height: auto;
    display: flex;
  }

  .light {
    display: flex;
    flex-direction: row;
    align-items: center;
    font-size: 1.3rem;
    font-family: 'roboto', sans-serif;
    font-weight: 400;
    font-style: normal;
    color: var(--black);
    padding-right: 10px;
  }

  .mid {
    font-size: 1.7rem;
    font-family: 'roboto', sans-serif;
    font-weight: 500;
    font-style: normal;
    color: var(--gosolr-yellow-primary);

    span {
      color: var(--black);
    }
  }

  @media (max-width: ${breakpoints.tabletMD}px) {
    //align-items: center;
    padding-bottom: 1rem;
  }

  @media (max-width: ${breakpoints.tabletSM}px) {
    .light {
      font-size: 1rem;
    }

    .mid {
      font-size: 1.25rem;
    }
  }

  @media (max-width: ${breakpoints.mobileLG}px) {
    align-items: center;

    .intro-text {
      flex-direction: column;
      align-items: center;
      row-gap: 4px;
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

  @media (max-width: ${breakpoints.mobileLG}px) {
    width: 100%;
  }
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
    width: 4.5rem;
    height: 4.5rem;
    background-color: #f7f6f6;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;

    p {
      font-size: 1rem;
      font-family: 'roboto', sans-serif;
      font-weight: 400;
      font-style: normal;
      color: var(--black);
      word-break: normal;
      text-align: center;
    }
  }

  &.box-active {
    div {
      background-color: var(--gosolr-yellow-primary);
    }

    p {
      color: var(--black);
      font-weight: 500;
    }
  }

  &:hover {
    p {
      color: var(--gosolr-yellow-primary);
      font-weight: 500;
    }

    &.box-active {
      p {
        color: var(--white);
      }
    }
  }

  &:active {
    transform: scale(1.1);
  }
`;

export default UsagePicker;
