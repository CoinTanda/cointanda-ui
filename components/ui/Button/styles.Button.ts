import Button from '@material-ui/core/Button';
import styled from 'styled-components';

export const ButtonContainer = styled('div')``;

export const ButtonStyled = styled(Button)`
  &.MuiButton-root {
    min-width: unset;
    min-height: unset;
    border-radius: ${props => props.theme.borders.borderRadius1};
    padding: 0 32px;

    .MuiButton-label {
      font-family: ${props => props.theme.fonts.font1};
      font-size: 20px;
      font-weight: 600;
      letter-spacing: 0.01em;
      white-space: nowrap;
    }

    .MuiTouchRipple-child {
      background-color: ${props => props.theme.colors.background1};
      opacity: 1;
    }
  }

  &.MuiButton-root:hover {
    background-color: ${props => props.theme.colors.buttonBackground2};
    border-color: transparent;

    .MuiButton-label {
      color: ${props => props.theme.colors.buttonText1};
    }
  }

  &.MuiButton-contained {
    color: ${props => props.theme.colors.buttonText1};
    background-color: ${props => props.theme.colors.buttonBackground2};
    box-shadow: none;
  }

  &.MuiButton-contained.Mui-disabled {
    color: ${props => props.theme.colors.buttonText1};
    background-color: ${props => props.theme.colors.buttonBackgroundDisabled};
  }

  &.MuiButton-contained:hover {
    background-color: ${props => props.theme.colors.buttonBackground3};
    box-shadow: none;
  }

  &.MuiButton-contained:active {
    box-shadow: none;
  }

  &.MuiButton-outlined {
    text-transform: none;

    .MuiButton-label {
      color: ${props => props.theme.colors.buttonText2};
      font-weight: 600;
    }
  }
`;
