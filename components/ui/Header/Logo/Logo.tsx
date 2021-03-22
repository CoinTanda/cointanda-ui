import { Router } from 'i18n';
import React, { FC, useState } from 'react';
import { LogoContainer, LogoImg, Logotype } from './styles.Logo';
import Icon from 'assets/CT_icon.png';
import IconHover from 'assets/CT_icon_hi.png';
import IconClicked from 'assets/CT_icon_act.png';
import BrandName from 'assets/cointanda_logotype.png';
// import LogoIdle from 'assets/full_logo.png';
// import LogoHover from 'assets/full_logo_hover.png';
// import LogoClick from 'assets/full_logo_click.png';

export const Logo: FC = () => {
  const [hovering, setHovering] = useState(false);
  const [mouseDown, setMouseDown] = useState(false);

  return (
    <LogoContainer
      onMouseEnter={() => setHovering(true)}
      onMouseLeave={() => setHovering(false)}
      onMouseDown={() => setMouseDown(true)}
      onMouseUp={() => setTimeout(() => setMouseDown(false), 200)}
      onClick={() => Router.push('/')}
    >
      <LogoImg src={ mouseDown ? IconClicked : (hovering) ? IconHover : Icon}/>
      <Logotype src={BrandName} />
    </LogoContainer>
  );
};
