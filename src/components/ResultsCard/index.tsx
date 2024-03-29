import React from 'react';
import styled from 'styled-components';
import { breakpoints } from '../../helpers/breakpoints';
import useAxios from '../../hooks/useAxios';
import { useFormikContext } from 'formik';
import { getTotalTopUps } from '../../helpers/utils';

type Props = {
  amountSpent: number;
};

const ResultsCard: React.FC<Props> = ({ amountSpent }: Props) => {
  const { values } = useFormikContext();

  const [data, error, loading] = useAxios({
    url: '/calculate',
    method: 'post',
    data: {
      amount: getTotalTopUps(values?.topUps),
    },
    headers: {
      'Content-Type': 'application/json',
    },
  });

  if (loading) <p>Loading yow</p>;
  if (error)
    return (
      <ErrorScreen>
        <p>{'Something went wrong ...'}</p>
      </ErrorScreen>
    );

  return (
    <MainContainer>
      <PriceInfoResults>
        <div className="horizontal vertical">
          <p className="dual-style-text">
            Cost <span>without GoSolr</span>
          </p>
          <p className="old-price" data-testid={'inputPrice'}>
            {`R ${data?.data?.data?.amount}`}
          </p>
        </div>
        <AverageBreak>
          <span>Average estimations</span>
          <div className="line" />
        </AverageBreak>
        <div className="horizontal vertical">
          <p className="dual-style-text">
            Savings <span>with GoSolr</span>
          </p>
          <p className="average-price" data-testid={'recommAveragePrice'}>
            {`R ${data?.data?.data?.savingsGoSolr}`}
          </p>
        </div>
        <div className="horizontal vertical">
          <p className="dual-style-text">
            Total <span>without GoSolr</span>
          </p>
          <p className="average-price" data-testid={'recommTotalWitoutPrice'}>
            {`R ${data?.data?.data?.costTotal}`}
          </p>
        </div>
        <div className="horizontal vertical">
          <p className="dual-style-text">Difference</p>
          <p className="average-price" data-testid={'recommDifferencePrice'}>
            {`R ${
              data?.data?.data?.costTotal - getTotalTopUps(values?.topUps)
            }`}
          </p>
        </div>
      </PriceInfoResults>

      <Recommendation>
        <div className="badge">
          <Badge>Recommended</Badge>
        </div>

        <div className="horizontal solution">
          <p className="recommend-solution">Solution</p>
          <p className="recommend-price">{data?.data?.data?.solution}</p>
        </div>
        <div className="horizontal pricing">
          <p className="recommend-solution">Price</p>
          <p className="recommend-price">{`R ${data?.data?.data?.solutionPrice}`}</p>
        </div>
      </Recommendation>
    </MainContainer>
  );
};

const MainContainer = styled.div`
  min-width: 30rem;
  height: 25rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-left: 2rem;

  .horizontal {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 2rem;
  }

  .vertical {
    margin-bottom: 1rem;
  }

  .badge {
    width: 100%;
    height: auto;
    padding-bottom: 0.5rem;
    display: flex;
    justify-content: flex-end;
    border-left: 1px solid #dbdbdb;
    border-right: 1px solid #dbdbdb;
  }

  @media (max-width: ${breakpoints.mobileLG}px) {
    margin-left: 0rem;
    min-width: 100%;
  }
`;

const PriceInfoResults = styled.div`
  width: 100%;
  flex: 1;
  border-top: 1px solid #dbdbdb;
  border-left: 1px solid #dbdbdb;
  border-right: 1px solid #dbdbdb;
  border-top-left-radius: 28px;
  border-top-right-radius: 28px;
  display: flex;
  flex-direction: column;
  font-family: 'roboto', sans-serif;
  font-style: normal;
  color: var(--black);
  padding-top: 2rem;

  .dual-style-text {
    font-weight: 400;
    font-size: 1rem;

    span {
      font-size: 1.3rem;
      font-weight: 500;
    }
  }

  .old-price {
    font-weight: 700;
    font-size: 1.4rem;
  }

  .average-price {
    font-weight: 200;
    font-size: 1.1rem;
  }

  @media (max-width: ${breakpoints.mobileMD}px) {
    padding-top: 1/4rem;

    .dual-style-text {
      font-size: 12px;

      span {
        font-size: 1.1rem;
      }
    }

    .old-price {
      font-size: 1.2rem;
    }

    .average-price {
      font-size: 1rem;
    }
  }
`;

const Recommendation = styled.div`
  width: 100%;
  height: auto;

  .solution {
    height: 3rem;
    background-color: var(--gosolr-yellow-primary);
  }

  .pricing {
    height: 3rem;
    background-color: var(--gosolr-yellow--dark-primary);
    border-bottom-left-radius: 28px;
    border-bottom-right-radius: 28px;
  }

  p {
    font-family: 'roboto', sans-serif;
    font-style: normal;
  }

  .recommend-solution {
    font-size: 1rem;
    font-weight: 500;
    color: var(--black);
  }

  .recommend-price {
    font-size: 1.3rem;
    font-weight: 700;
    color: var(--white);
    text-transform: capitalize;
  }

  @media (max-width: ${breakpoints.mobileMD}px) {
    .recommend-solution {
      font-size: 12px;
    }

    .recommend-price {
      font-size: 1.1rem;
    }
  }
`;

const Badge = styled.div`
  width: auto;
  height: auto;
  background-color: var(--black);
  font-size: 12px;
  font-family: 'roboto', sans-serif;
  font-weight: 400;
  font-style: normal;
  color: var(--gosolr-yellow-secondary);
  padding: 0.4rem 2rem;
  right: 0;
  border-top-left-radius: 30px;
  border-bottom-left-radius: 30px;

  @media (max-width: ${breakpoints.mobileMD}px) {
    padding: 0.3rem 1.5rem;
  }
`;

const AverageBreak = styled.div`
  width: 100%;
  height: auto;
  padding: 0rem 2rem;
  display: flex;
  align-items: center;
  margin-bottom: 1rem;

  span {
    font-size: 14px;
    font-family: 'roboto', sans-serif;
    font-style: normal;
    font-weight: 200;
    color: var(--black);
  }

  .line {
    flex: 1;
    height: 1px;
    background-color: #f1f1f1;
    margin-left: 1rem;
  }
`;

export const ErrorScreen = styled.div`
  width: 100%;
  height: 18rem;
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

export default ResultsCard;
