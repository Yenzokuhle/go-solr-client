import { useField, useFormikContext } from 'formik';
import { StaticImage } from 'gatsby-plugin-image';
import React, { useState } from 'react';
import styled from 'styled-components';
import TrashIcon from '../../images/icons/empty.svg';

interface Props {
  name: string;
  label: string;
  type: string;
  val: string;
  hideIcon: boolean;
  value: number;
  className?: string;
  charCount?: number;
  handleDelete: () => void;
}

const InputField: React.FC<Props> = ({
  name,
  label,
  className,
  val,
  hideIcon,
  type,
  charCount,
  handleDelete,
  ...props
}: Props) => {
  const { value } = props;
  const [field, meta] = useField(name);
  const [inputValue, setInputValue] = useState(value);
  const { setFieldValue } = useFormikContext();

  const handleChange = (e) => {
    setInputValue(e.currentTarget.value);
    setFieldValue(val, parseInt(e.currentTarget.value));
  };

  return (
    <Container inFocus={false} hasValue={false} className={className}>
      <Unit>
        <p>{'R'}</p>
      </Unit>
      <input
        type={type}
        placeholder={label}
        {...field}
        {...props}
        value={inputValue}
        onChange={handleChange}
      />
      {!hideIcon && (
        <DeleteView>
          <img
            src={TrashIcon}
            className="delete-icon"
            alt={'delete input form button'}
            onClick={handleDelete}
          />
        </DeleteView>
      )}
    </Container>
  );
};

const Container = styled.div<{
  inFocus: boolean;
  error: boolean;
  hasValue: boolean;
}>`
  width: 100%;
  position: relative;
  padding: 0.55rem 0.8rem;
  border: 1px solid #231d1d;
  display: flex;
  flex-direction: row;
  align-items: center;
  column-gap: 0.5rem;
  border-radius: 16px;

  input {
    font-size: 100%;
    width: 100%;
    position: relative;
    border: none;
    font-size: 1.1rem;
    font-family: 'roboto', sans-serif;
    font-weight: 400;
    font-style: normal;
    color: var(--black);

    &::placeholder {
      color: #231d1d;
    }

    color: ${(props) => {
      if (props.inFocus && !props.error) {
        return 'var(--nflrs-blue-secondary)';
      } else if (!props.inFocus) {
        return 'var(--light-gray-three)';
      }
      return '#000';
    }};

    &:active,
    &:focus {
      outline: none;
    }
  }

  /*Removes type number arrows on Chrome, Safari, Edge, Opera */
  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  .error {
    position: absolute;
    left: 0;
    bottom: 0;
    padding-left: 1rem;

    &:active,
    &:focus {
      outline: none;
    }
  }

  span {
    font-size: 12px;
    color: red;
  }
`;

const Unit = styled.div`
  width: 2rem;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  border-right: 1px solid var(--black);

  p {
    font-size: 14px;
    font-family: 'roboto', sans-serif;
    font-weight: 400;
    font-style: normal;
    color: var(--black);
  }

  .delete-icon {
    width: 24px;
    height: 24px;
    margin-right: 0.35rem;

    svg {
      width: 100%;
      height: 100%;
    }
  }
`;

const DeleteView = styled.div`
  width: auto;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

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

export default InputField;
