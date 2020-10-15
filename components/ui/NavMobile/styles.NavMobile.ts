import styled from 'styled-components';
import { Row } from '../Row/Row';
import { IconButton } from '../IconButton/IconButton';
import { ButtonLanguage } from '../Layout/styles.Layout';
import { Column } from '../Column/Column';
import { IconStar } from '../IconStar/IconStar';

export const MenuContainer = styled('div')`
  position: fixed;
  width: 189px;
  padding-bottom: 15px;
  right: 0;
  top: 0;

  background-color: ${props => props.theme.colors.general1};
  border-radius: ${props => props.theme.borders.borderRadius1} 0 0
    ${props => props.theme.borders.borderRadius1};
`;

export const BurgerButton = styled(IconButton)`
  position: relative;
  left: 27px;
  height: 27px;

  @media ${props => props.theme.queries.mobileL} {
    left: 0px;
  }
`;

export const CloseButton = styled(IconButton)`
  position: absolute;
  right: 28px;
  top: 20px;
  z-index: 1;
`;

export const ButtonLanguageMobile = styled(ButtonLanguage)`
  position: absolute;
  right: 9px;
  top: 25px;
`;

export const ButtonsContainer = styled(Column)`
  margin-top: 101px;
  margin-left: 25px;
`;

export const ButtonSection = styled(Row)`
  align-items: center;
  margin-bottom: 13.6px;
`;

export const IconItem = styled(IconStar)`
  height: 18px;
  padding-top: 2px;
  padding-left: 2px;
`;

export const TextButton = styled('div')`
  margin-left: 8px;
  letter-spacing: 0em;
  color: ${props => props.theme.colors.buttonText1};
`;
