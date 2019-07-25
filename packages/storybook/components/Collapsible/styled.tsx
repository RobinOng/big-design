import { Flex } from '@bigcommerce/big-design';
import { theme as defaultTheme } from '@bigcommerce/big-design-theme';
import styled from 'styled-components';

export const StyledFlex = styled(Flex)`
  cursor: pointer;
  margin-bottom: ${({ theme }) => theme.spacing.small};
`;

StyledFlex.defaultProps = { theme: defaultTheme };