import React, { FC } from 'react';
import { IconButtonStyled } from './styles.IconButton';

interface PropsIconButton {
  src: string;
  onClick?: () => void;
  className?: string;
}

export const IconButton: FC<PropsIconButton> = ({ onClick, className, src }) => {
  return <IconButtonStyled src={src} onClick={onClick} className={className} />;
};
