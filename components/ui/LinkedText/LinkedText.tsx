import React, { FC } from 'react';
import { LinkedTextStyled } from './LinkedText.styles';

export const LinkedText: FC = ({ children }) => {
  return <LinkedTextStyled>{children}</LinkedTextStyled>;
};
