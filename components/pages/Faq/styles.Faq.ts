import { Column } from 'components/ui/Column/Column';
import styled from 'styled-components';

export const FaqContainer = styled('div')`
  display: flex;
  flex-direction: row;

  @media ${props => props.theme.queries.tabletXL} {
    flex-direction: column;
  }
`;

export const LeftColumnContainer = styled(Column)`
  width: 100%;
  margin-right: 57px;

  @media ${props => props.theme.queries.tabletXL} {
    margin-right: 0px;
    max-width: unset;
  }
`;

export const RightColumnContainer = styled(Column)`
  width: 100%;

  @media ${props => props.theme.queries.tabletXL} {
    max-width: unset;
  }
`;

export const FaqItem = styled(Column)`
  margin-bottom: 20px !important;
`;

export const IsolatedAreaContainer = styled('div')`
  padding-top: 20px;
  padding-bottom: 20px;
  padding-left: 40px;
`;
