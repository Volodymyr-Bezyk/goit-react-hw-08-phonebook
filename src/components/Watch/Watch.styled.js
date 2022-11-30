import styled from 'styled-components';

export const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
  padding: ${p => p.theme.space[2]}px ${p => p.theme.space[2]}px;
`;

export const WatchWrap = styled.div`
  padding: ${p => p.theme.space[2]}px ${p => p.theme.space[2]}px;
`;
