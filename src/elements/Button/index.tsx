import { Link } from 'gatsby';
import React, { useState } from 'react';
import styled, { css } from 'styled-components';
import { breakpoints } from '../../helpers/breakpoints';

export enum BUTTON_TYPE {
  BUTTON = 'BUTTON',
}

export enum BUTTON_STYLE_TYPE {
  PRIMARY = 'PRIMARY',
  SECONDARY = 'SECONDARY',
}

interface Props {
  title: string;
  handleClick?: () => void;
  isDisabled: boolean;
}

const PrimaryButton: React.FC<Props> = ({
  title,
  handleClick,
  isDisabled,
}: Props) => {
  return (
    <Container
      onClick={() => (!isDisabled ? handleClick && handleClick() : null)}
      data-testid={'primaryButton'}
      disabled={isDisabled}
      type={'button'}
    >
      <p>{title}</p>
    </Container>
  );
};

const Container = styled.button`
  width: min-content;
  height: auto;
  border-radius: 1.2rem;
  display: flex;
  align-items: center;
  cursor: pointer;
  background-color: var(--black);
  box-shadow: rgba(13, 152, 212, 0.1) 2px 6px 12px;
  padding: 0.5rem 1rem;
  border: none;

  p {
    font-size: 1rem;
    font-family: 'roboto', sans-serif;
    font-weight: 400;
    font-style: normal;
    color: var(--white);
    text-align: center;
  }

  &:hover {
    background-color: var(--gosolr-yellow-secondary);
    transform: scale(1.02);
  }

  &:active {
    transform: scale(1);
  }

  &:disabled {
    background-color: #a2a2a2;
    cursor: not-allowed;
  }

  @media (max-width: ${breakpoints.mobileLG}px) {
    border-radius: 1.15rem;

    p {
      font-size: 0.85rem;
    }
  }
`;

export default PrimaryButton;
