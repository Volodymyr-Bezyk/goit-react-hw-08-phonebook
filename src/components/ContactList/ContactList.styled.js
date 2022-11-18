import styled from 'styled-components';

export const Category = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: ${p => p.theme.borders.secondary}${p => p.theme.colors.primary};
  margin-bottom: ${p => p.theme.space[2]}px;

  @media screen and (min-width: 768px) {
    font-size: ${p => p.theme.space[3]}px;
    font-weight: ${p => p.theme.fontWeights.bold};
    text-transform: ${p => p.theme.caps.upper};
  }
`;

export const CategoryTag = styled.h2`
  font-size: ${p => p.theme.fontSizes[1]}px;
  text-align: start;

  color: ${p => p.theme.colors.primary};

  :nth-of-type(3) {
    display: none;
  }

  :last-child {
    text-align: end;
  }

  @media screen and (min-width: 500px) {
    font-size: ${p => p.theme.fontSizes[2]}px;
  }

  @media screen and (min-width: 768px) {
    font-size: ${p => p.theme.space[3]}px;
  }
  @media screen and (min-width: 1200px) {
    font-size: ${p => p.theme.fontSizes[4]}px;
    :nth-of-type(3) {
      display: block;
    }
    :not(:last-child) {
      padding-left: ${p => p.theme.space[3]}px;
    }
    @media screen and (min-width: 1500px) {
      font-size: ${p => p.theme.fontSizes[5]}px;
    }
  }
`;

export const Contact = styled.li`
  display: flex;
  margin-bottom: ${p => p.theme.space[1]}px;
  color: ${p => p.theme.colors.text};
`;
