import { Column } from './../../ui/Column/Column';
import { Row } from 'components/ui/Row/Row';
import { TitleText } from 'components/ui/TitleText/TitleText';
import styled from 'styled-components';
import { Button } from 'components/ui/Button/Button';

export const TandaContainer = styled('div')`
  display: flex;
  flex-direction: column;
  position: relative;
  width: 100%;
  min-height: 396px;
  padding: 24px 40px;
  border-radius: ${props => props.theme.borders.borderRadius1};
  border: ${props => props.theme.borders.border1};
  margin-bottom: 31px;

  @media ${props => props.theme.queries.mobileXl} {
    padding: 5px 20px;
    border: unset;
  }

  @media ${props => props.theme.queries.mobileM} {
    padding: 0;
    border: unset;
  }
`;

export const ResponsiveContainer = styled('div')`
  display: flex;
  flex-direction: row;

  @media ${props => props.theme.queries.tabletXL} {
    flex-direction: column-reverse;
  }
`;

export const SectionLeftColumn = styled(Column)`
  width: 100%;
  min-width: 500px;
  margin-right: 50px;

  @media ${props => props.theme.queries.tabletXL} {
    min-width: unset;
    margin-right: 0;
  }
`;

export const SectionRightColumn = styled(Column)`
  width: 100%;
  max-width: 470px;

  @media ${props => props.theme.queries.tabletXL} {
    max-width: 700px;
    margin-bottom: 50px;
  }
`;

export const DataContainer = styled(Column)`
  margin-left: 39px;

  @media ${props => props.theme.queries.mobileXl} {
    margin-left: 0;
  }
`;

export const DataRowContainer = styled(Row)`
  margin-bottom: 15px;
  flex-wrap: wrap;
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
  padding-top: 4px;
  height: 200px;

  @media ${props => props.theme.queries.tablet} {
    height: 150px;
  }

  @media ${props => props.theme.queries.mobileXl} {
    display: none;
  }
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

export const DepositedContainer = styled('div')`
  padding: 32px;
  width: 100%;
  height: 100%;
  background-color: ${props => props.theme.colors.background3};
  border-radius: ${props => props.theme.borders.borderRadius1};

  @media ${props => props.theme.queries.mobileM} {
    padding: 10px;
  }
`;

export const WonContainer = styled(DepositedContainer)`
  background-color: ${props => props.theme.colors.background4};
`;

export const DepositedButtonsContainer = styled(Row)`
  flex-wrap: wrap;
  justify-content: space-between;
  margin-top: 53px;

  div:last-child {
    margin-bottom: 10px;
    margin-right: 10px;
    max-width: unset;
  }

  div {
    margin-bottom: 10px;
  }

  @media ${props => props.theme.queries.mobileXl} {
    flex-direction: column-reverse;
    div {
      width: 100%;
      max-width: unset;
    }

    button {
      width: 100%;
    }
  }
`;

export const WonButtonsContainer = styled(Row)`
  justify-content: flex-end;
  margin-top: 53px;
`;

export const WinDataRowContainer = styled(Row)`
  align-items: baseline;

  span {
    margin-left: 7px;
  }
`;

export const BottomButtonsContainer = styled(DepositedButtonsContainer)`
  margin-top: 60px;
  max-width: 391px;

  button {
    padding: 0 54px !important;

    @media ${props => props.theme.queries.mobileXl} {
      padding: 0 40px !important;
    }
  }
`;
