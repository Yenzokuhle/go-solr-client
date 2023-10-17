import React, { ReactElement } from 'react';
import styled from 'styled-components';
import { CATEGORY_LIST } from '../../helpers/constants';
import { CategoryItem } from '../../helpers/types';
import { breakpoints } from '../../helpers/breakpoints';

type PillProps = {
  title: string;
  isActive: boolean;
  idx: number;
};

const Pill = ({ title, isActive, idx }: PillProps): ReactElement => {
  return (
    <PillContainer
      className={isActive ? 'is-active' : ''}
      data-testid={isActive && `sidebarStage-${idx}`}
    >
      <p>{title}</p>
    </PillContainer>
  );
};
const PillContainer = styled.div`
  width: 100%;
  height: auto;
  background-color: var(--light-gray);
  border-radius: 2.5rem;
  padding: 0.6rem 0.9rem;

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
    background-color: var(--gosolr-yellow-secondary);

    p {
      font-size: 1.15rem;
      color: var(--white);
      font-weight: 500;
    }
  }

  @media (max-width: ${breakpoints.tabletLG}px) {
    padding: 0.5rem 0.85rem;

    p {
      font-size: 1rem;
    }
  }

  @media (max-width: ${breakpoints.tabletMD}px) {
    width: auto;
    padding: 0.5rem 1.25rem;

    p {
      font-size: 1rem;
    }
  }

  @media (max-width: ${breakpoints.mobileLG}px) {
    padding: 0.5rem 1rem;

    &.is-active {
      background-color: var(--gosolr-yellow-secondary);

      p {
        font-size: 1rem;
        font-weight: 500;
      }
    }

    p {
      width: max-content;
      font-size: 1rem;
    }
  }

  @media (max-width: ${breakpoints.mobileMD}px) {
    padding: 0.5rem 0.8rem;

    &.is-active {
      p {
        font-size: 14px;
      }
    }

    p {
      width: max-content;
      font-size: 12px;
    }
  }
`;

export type SidebarList = {
  title: string;
  isActive: boolean;
};
interface Props {
  stage: number;
}

const Sidebar: React.FC<Props> = ({ stage }: Props) => {
  return (
    <MainContainer data-testid={'sideBar'}>
      <div className="category-list">
        {CATEGORY_LIST.map((item: CategoryItem, idx: number) => {
          return (
            <Pill
              key={`pill-item-${idx + 1}`}
              title={item.value}
              isActive={stage >= idx + 1}
              idx={idx + 1}
            />
          );
        })}
      </div>
    </MainContainer>
  );
};

const MainContainer = styled.div`
  width: 100%;
  //height: 100%;

  .category-list {
    width: 100%;
    height: auto;
    display: flex;
    flex-direction: column;
    row-gap: 1rem;
    padding: 0rem 2.5rem;
  }

  @media (max-width: ${breakpoints.tabletLG}px) {
    .category-list {
      padding: 0rem 1.5rem;
    }
  }

  @media (max-width: ${breakpoints.tabletMD}px) {
    height: auto;

    .category-list {
      min-width: 100%;
      flex-direction: row;
      column-gap: 1rem;
      margin-top: 0rem;
      padding: 0rem;
      overflow-x: auto;
      justify-content: flex-end;
    }
  }

  @media (max-width: ${breakpoints.tabletMD}px) {
    height: auto;

    .category-list {
      column-gap: 10px;
    }
  }
`;

export default Sidebar;
