import { Router } from 'i18n';
import React, { FC, useState } from 'react';
import { LogoContainer, LogoImg } from './styles.Logo';
import LogoIdle from 'assets/full_logo.png';
import LogoHover from 'assets/full_logo_hover.png';
import LogoClick from 'assets/full_logo_click.png';

export const Logo: FC = () => {
  const [hovering, setHovering] = useState(false);
  const [mouseDown, setMouseDown] = useState(false);

  return (
    <LogoContainer
      onMouseEnter={() => setHovering(true)}
      onMouseLeave={() => setHovering(false)}
      onMouseDown={() => setMouseDown(true)}
      onMouseUp={() => setMouseDown(false)}
      onClick={() => Router.push('/')}
    >
      <LogoImg src={LogoIdle} />
      <LogoImg
        src={LogoHover}
        style={{ opacity: hovering && !mouseDown ? 1 : 0, transition: 'all 0.3s' }}
      />
      <LogoImg src={LogoClick} style={{ opacity: mouseDown ? 1 : 0 }} />
    </LogoContainer>
  );
};
