import styled from 'styled-components';

export const Category = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: ${p => p.theme.space[2]}px;
  font-size: ${p => p.theme.space[3]}px;
  font-weight: ${p => p.theme.fontWeights.bold};
  color: ${p => p.theme.colors.text};
  text-transform: ${p => p.theme.caps.upper};
`;

export const CategoryTag = styled.h2`
  font-size: ${p => p.theme.space[3]}px;
  flex-basis: calc((100%-90px) / 3);
  text-align: start;
  border-bottom: ${p => p.theme.borders.secondary};

  :last-child {
    flex-basis: 60px;
  }
`;

export const Contact = styled.li`
  display: flex;
  margin-bottom: ${p => p.theme.space[1]}px;
  font-size: ${p => p.theme.space[3]}px;
  font-weight: ${p => p.theme.fontWeights.bold};
  color: ${p => p.theme.colors.text};
`;
