import styled from 'styled-components';
import { Column } from '../../ui/Column/Column';
import { Button } from '../../ui/Button/Button';
import { Row } from 'components/ui/Row/Row';

export const AboutContainer = styled('div')`
  display: flex;
  flex-direction: row;

  @media ${props => props.theme.queries.tabletXL} {
    flex-direction: column;
  }
`;

export const ProjectDescriptionContainer = styled(Column)`
  max-width: 50%;
  margin-right: 96px;

  @media ${props => props.theme.queries.tabletXL} {
    margin-right: 0px;
    max-width: unset;
    margin-bottom: 54px;
  }
`;

export const TandaTypesContainer = styled(Column)`
  max-width: 50%;

  @media ${props => props.theme.queries.tabletXL} {
    max-width: unset;
  }
`;

export const ButtonConnectWallet = styled(Button)`
  min-width: 317px;
  height: 45px;
  margin-top: 30px;

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

export const TandaType = styled(Row)`
  margin-bottom: 0px;
`;

export const IconTanda = styled('img')`
  height: 25px;
  margin-right: 15px;
`;

export const Opacity = styled('div')`
  opacity: 0.4;
`;
