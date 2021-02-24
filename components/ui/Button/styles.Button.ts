import Button from '@material-ui/core/Button';
import styled from 'styled-components';

export const ButtonContainer = styled('div')``;

export const ButtonStyled = styled(Button)`
  &.MuiButton-root {
    min-width: unset;
    min-height: unset;
    padding: 0 32px;

    .MuiButton-label {
      z-index: 1;
    }

    .MuiButton-label {
      font-family: ${props => props.theme.fonts.font1};
      font-size: 20px;
      color: ${props => props.theme.colors.buttonText2};
      font-weight: ${props => props.theme.fonts.weight1};
      letter-spacing: 0.01em;
      white-space: nowrap;
    }

    @keyframes MuiTouchRipple-keyframes-enter {
      0% {
        opacity: 0.1;
        transform: scale(0);
      }
      50% {
        opacity: 1;
      }
      100% {
        transform: scale(1);
      }
    }
    @keyframes MuiTouchRipple-keyframes-exit {
      100% {
        opacity: 0;
      }
    }

    .MuiTouchRipple-root {
      .MuiTouchRipple-ripple {
        background-color: ${props => props.theme.colors.buttonBackground3};

        .MuiTouchRipple-child {
          background-color: ${props => props.theme.colors.buttonBackground3};
        }
      }
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

  &.MuiButton-root:hover {
    background-color: ${props => props.theme.colors.buttonBackground2};
    box-shadow: none;

    .MuiButton-outlined {
      border: none;
    }

    .MuiButton-label {
      color: ${props => props.theme.colors.buttonText1};
      font-weight: ${props => props.theme.fonts.weight1};
    }
    &.MuiButton-contained {
      background-color: ${props => props.theme.colors.buttonBackground4};
    }
  }

  &.MuiButton-root:active {
    box-shadow: none;
    background-color: ${props => props.theme.colors.buttonBackground3};

    .MuiButton-outlined {
      border: none;
    }

    .MuiButton-label {
      color: ${props => props.theme.colors.buttonText1};
      font-weight: ${props => props.theme.fonts.weight1};
    }
  }

  &.selected {
    box-shadow: none;
    background-color: ${props => props.theme.colors.buttonBackground4};

    .MuiButton-label {
      color: ${props => props.theme.colors.buttonText1};
      font-weight: ${props => props.theme.fonts.weight1};
    }
  }

  &.MuiButton-outlined {
    text-transform: none;
    border: 1px solid ${props => props.theme.colors.borderColor2};
  }
  &.MuiButton-contained {
    .MuiButton-label {
      color: ${props => props.theme.colors.buttonText1};
      font-weight: ${props => props.theme.fonts.weight1};
    }
  }
`;
