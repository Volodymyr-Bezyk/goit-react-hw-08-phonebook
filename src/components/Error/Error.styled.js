import styled from 'styled-components';

export const ErrorWrap = styled.div`
  padding: ${p => p.theme.space[1]}px ${p => p.theme.space[2]}px;
  color: ${p => p.theme.colors.accent};
  background-color: ${p => p.theme.colors.disabled};
  font-weight: ${p => p.theme.fontWeights.bold};
  font-size: ${p => p.theme.fontSizes[6]}px;
`;
