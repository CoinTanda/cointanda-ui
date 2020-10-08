import { Button } from 'components/ui/Button/Button';
import { Row } from 'components/ui/Row/Row';
import styled from 'styled-components';

export const HomeContainer = styled('div')`
  color: red;
`;

export const VideoContainer = styled('div')`
  margin-right: 42px;
`;

export const MoreInfoContainer = styled(Row)`
  margin-top: 5px;
  margin-left: 29px;
  margin-bottom: 23px;
  align-items: center;
  cursor: pointer;
  user-select: none;
`;

export const TextInfoItem = styled('div')`
  margin-left: 10px;
  font-size: 21px;
  position: relative;
  top: -6px;
  margin-bottom: 15px;
  letter-spacing: -0.014em;
  line-height: 27px;
  color: ${props => props.theme.colors.text3};

  span {
    color: ${props => props.theme.colors.text4};
    font-weight: 600;
  }
`;

export const ButtonConnectWallet = styled(Button)`
  width: 317px;
  height: 45px;

  &.MuiButton-root {
    .MuiButton-label {
      font-size: 24px;
    }
  }
`;
