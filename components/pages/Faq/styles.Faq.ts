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
  max-width: 50%;
  margin-right: 57px;

  @media ${props => props.theme.queries.tabletXL} {
    margin-right: 0px;
    max-width: unset;
  }
`;

export const RightColumnContainer = styled(Column)`
  max-width: 50%;

  @media ${props => props.theme.queries.tabletXL} {
    max-width: unset;
  }
`;

export const FaqItem = styled(Column)``;
