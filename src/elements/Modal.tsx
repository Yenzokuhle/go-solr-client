import React from 'react';
import styled from 'styled-components';

import { default as MuiModal } from '@mui/material/Modal';

type Props = {
  children: React.ReactNode;
  open: boolean;
  onClose: () => void;
};

const Modal: React.FC<Props> = ({ children, open, onClose }: Props) => {
  return (
    <MuiModal open={open} onClose={onClose}>
      <Container>{children}</Container>
    </MuiModal>
  );
};

const Container = styled.div`
  width: auto;
  height: auto;
`;

export default Modal;
