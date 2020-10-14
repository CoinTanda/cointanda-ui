import { Button } from 'components/ui/Button/Button';
import { Row } from 'components/ui/Row/Row';
import styled from 'styled-components';

export const HomeContainer = styled(Row)`
  color: red;

  @media ${props => props.theme.queries.laptopL} {
    flex-direction: column;
  }
`;

export const VideoContainer = styled('div')`
  margin-right: 42px;

  @media ${props => props.theme.queries.laptopL} {
    margin-right: 0;
    margin-bottom: 42px;
  }
`;

export const MoreInfoContainer = styled(Row)`
  margin-top: 5px;
  margin-left: 29px;
  margin-bottom: 27px;
  align-items: center;
  cursor: pointer;
  user-select: none;
`;

export const TextInfoItem = styled('div')`
  margin-top: -4px;
  margin-left: 10px;
  font-size: 21px;
  margin-bottom: 17px;
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

  @media ${props => props.theme.queries.mobileM} {
    width: 100%;
    height: unset;
  }
`;

export const VideoImg = styled('img')`
  @media ${props => props.theme.queries.laptopL} {
    width: 100%;
  }
`;
