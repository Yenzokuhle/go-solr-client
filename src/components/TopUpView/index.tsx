import React, { ReactElement } from 'react';
import styled from 'styled-components';
import { InputField, PrimaryButton } from '../../elements';
import { breakpoints } from '../../helpers/breakpoints';
import { StaticImage } from 'gatsby-plugin-image';
import { FieldArray } from 'formik';
import PlusIcon from '../../images/icons/plus.svg';
import { getTotalTopUps } from '../../helpers/utils';

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
    border: 1.5px solid var(--gosolr-yellow-secondary);

    p {
      color: var(--gosolr-yellow-secondary);
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
      <FieldArray
        name="topUps"
        render={({ form, push, remove }) => {
          const { values, setFieldValue } = form;
          const total = getTotalTopUps(values?.topUps);
          return (
            <>
              <div className="top-up-info">
                <div className="info-text">
                  <p className="light">How do you</p>
                  <p className="mid">
                    top up <span>electricity per month?</span>
                  </p>
                </div>
                <div className="top-up-actions">
                  <BorderButton
                    title="Prepaid"
                    isActive={values?.topUps?.length >= 2}
                    handleClick={() =>
                      values?.topUps?.length >= 2
                        ? null
                        : setFieldValue('topUps', [
                            { name: `topUps[0].name`, value: 0 },
                            { name: `topUps[1].name`, value: 0 },
                          ])
                    }
                  />
                  <BorderButton
                    title="Postpaid"
                    isActive={values?.topUps?.length === 1}
                    handleClick={() =>
                      values?.topUps?.length === 1
                        ? null
                        : setFieldValue('topUps', [
                            { name: `topUps[0].name`, value: 0 },
                          ])
                    }
                  />
                </div>
              </div>
              <div className="top-up-items">
                {values?.topUps?.length === 0 ? (
                  <Default>
                    <StaticImage
                      className="logo-image"
                      src={`../../images/newsletter-illustration.svg`}
                      alt={'Go Solr logo'}
                      objectFit="contain"
                      objectPosition="center"
                    />
                  </Default>
                ) : (
                  <TopUpFields>
                    <div className={'list'}>
                      {' '}
                      {values?.topUps.map((item: number, idx: number) => (
                        <InputField
                          key={`input-field-${idx + 1}`}
                          name={`topUps[${idx}].name`}
                          val={`topUps[${idx}].value`}
                          value={values.topUps[idx].value}
                          label={`Top up ${idx + 1}`}
                          type={'number'}
                          hideIcon={idx < 2}
                          handleDelete={() => remove(idx)}
                        />
                      ))}
                    </div>
                    {values?.topUps?.length >= 2 && (
                      <AddField
                        onClick={() =>
                          push({
                            name: `topUps[${values?.topUps.length}].name`,
                            value: 0,
                          })
                        }
                      >
                        <img
                          src={PlusIcon}
                          alt={`Add new top up input field`}
                        />
                      </AddField>
                    )}
                  </TopUpFields>
                )}
              </div>
              <div className="top-up-totals">
                <Total>
                  <span>Total p/m: </span>
                  {`R ${total}`}
                </Total>
                <PrimaryButton
                  title="Calculate"
                  handleClick={() => handleContinue(3)}
                  isDisabled={values?.topUps.length === 0 || total === 0}
                />
              </div>
            </>
          );
        }}
      />
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
    flex-direction: column;
    justify-content: space-between;
    padding-bottom: 2rem;
    border-bottom: 1px solid #ededed;

    .info-text {
      display: flex;
      align-items: center;
      column-gap: 0.5rem;
      padding-bottom: 1rem;
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
      width: 100%;
      height: 100%;
      display: flex;
      column-gap: 1.5rem;
    }
  }

  .top-up-items {
    width: 100%;
    flex: 1;
    margin-top: 2rem;
    margin-bottom: 2rem;
  }

  .top-up-totals {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
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

  @media (max-width: ${breakpoints.mobileMD}px) {
    .top-up-info {
      .info-text {
        flex-direction: column;
        align-items: flex-start;
        row-gap: 2px;
      }
    }
  }
`;

const Total = styled.p`
  font-size: 1.35rem;
  font-family: 'roboto', sans-serif;
  font-weight: 500;
  font-style: normal;
  color: var(--black);

  span {
    font-size: 1.1rem;
    font-weight: 400;
  }

  @media (max-width: ${breakpoints.mobileMD}px) {
    font-size: 1.2rem;

    span {
      font-size: 14px;
    }
  }
`;

const TopUpFields = styled.div`
  width: 100%;
  min-height: 13rem;
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  .list {
    max-width: 18rem;
    height: min-content;
    display: flex;
    flex-direction: column;
    row-gap: 0.7rem;
  }

  @media (max-width: ${breakpoints.mobileLG}px) {
    column-gap: 2rem;
    .list {
      flex: 1;
    }
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

const AddField = styled.div`
  width: 2rem;
  height: 2rem;
  border-radius: 50%;
  border: 1px solid var(--black);
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    width: 20px;
    height: 20px;
  }

  &:hover {
    transform: scale(1.04);
  }

  &:active {
    transform: scale(1.02);
  }
`;

export default TopUpView;
