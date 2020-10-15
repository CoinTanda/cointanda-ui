import React, { FC } from 'react';
import icon from '../../../assets/bullet_point.png';
import iconWhite from '../../../assets/bullet_point_white.png';
import { IconStarStyled } from './styles.IconStar';

interface PropsIconStar {
  whiteVersion?: boolean;
  className?: string;
}

export const IconStar: FC<PropsIconStar> = ({ whiteVersion, className }) => {
  return <IconStarStyled src={whiteVersion ? iconWhite : icon} className={className} />;
};
