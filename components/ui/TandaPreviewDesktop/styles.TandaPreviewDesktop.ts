import styled from 'styled-components';
import { TitleText } from '../TitleText/TitleText';
import { Column } from '../Column/Column';
import { Row } from '../Row/Row';
import { Button } from '../Button/Button';

export const TandaPreviewContainerDesktop = styled(Column)`
  position: relative;
  width: 100%;
  min-height: 396px;
  padding: 13px 40px;
  border-radius: ${props => props.theme.borders.borderRadius1};
  border: ${props => props.theme.borders.border1};
  margin-bottom: 31px;
`;

export const DataContainer = styled(Column)`
  margin-left: 39px;
`;

export const DataRowContainer = styled(Row)`
  margin-bottom: 15px;
`;

export const TandaTitle = styled(TitleText)`
  margin-bottom: 6px;
`;

export const ButtonTanda = styled(Button)`
  position: absolute;
  top: 16px;
  right: 21px;

  &.MuiButton-root {
    padding: 0 48px;

    @media ${props => props.theme.queries.tabletXL} {
      padding: 0 3px;
    }

    .MuiButton-label {
      font-size: 29px;

      @media ${props => props.theme.queries.tabletXL} {
        font-size: 21px;
      }
    }
  }
`;

export const ThumbImage = styled('img')`
  height: 200px;
`;

export const TextKey = styled('div')`
  font-size: 1.27em;
  margin-right: 3px;
  color: ${props => props.theme.colors.text5};
`;

export const TextValue = styled('div')`
  font-size: 1.27em;
  font-weight: 600;
  color: ${props => props.theme.colors.text4};
`;
