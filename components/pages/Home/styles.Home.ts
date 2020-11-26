import { Button } from 'components/ui/Button/Button';
import { Row } from 'components/ui/Row/Row';
import styled from 'styled-components';

export const HomeContainer = styled(Row)`
  color: red;

  @media ${props => props.theme.queries.tabletXL} {
    flex-direction: column;
  }
`;

export const VideoContainer = styled('div')`
  margin-right: 42px;

  @media ${props => props.theme.queries.tabletXL} {
    margin-right: 0;
    margin-bottom: 19px;
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

  @media ${props => props.theme.queries.tabletXL} {
    font-size: 16px;
    font-weight: 600;
    line-height: 20px;
    padding-top: 4px;
    margin-bottom: 8px;
  }
`;

export const ButtonConnectWallet = styled(Button)`
  min-width: 317px;
  height: 45px;

  &.MuiButton-root {
    padding: 0 48px;

    @media ${props => props.theme.queries.tabletXL} {
      padding: 0 3px;
    }

    .MuiButton-label {
      font-size: 24px;

      @media ${props => props.theme.queries.tabletXL} {
        font-size: 21px;
      }
    }
  }

  @media ${props => props.theme.queries.tabletXL} {
    width: 232px;
    height: unset;
  }
`;

export const VideoResponsiveWrapper = styled('div')`
  position: relative;
  padding-bottom: 56.125%;
  width: 606px;
  border: ${props => props.theme.borders.border1};

  iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }

  @media ${props => props.theme.queries.tabletXL} {
    width: 100%;
  }
`;
