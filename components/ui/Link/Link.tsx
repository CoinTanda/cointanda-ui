import React, { FC } from 'react';
import NextLink, { LinkProps } from 'next/link';
import { LinkStyled } from './styles.Link';

export interface PropsLink extends LinkProps {
  className?: string;
}

export const Link: FC<PropsLink> = props => {
  return (
    <NextLink {...props}>
      <LinkStyled className={props.className}>{props.children}</LinkStyled>
    </NextLink>
  );
};
