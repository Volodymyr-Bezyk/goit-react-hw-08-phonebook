import styled from 'styled-components';

export const Info = styled.span`
  flex-basis: calc((100%-90px) / 3);
  text-align: start;
`;

export const InfoBtn = styled.button`
  display: inline-flex;
  flex-basis: 60px;
  justify-content: center;
  padding: ${p => p.theme.space[1]}px ${p => p.theme.space[2]}px;

  color: ${p => p.theme.colors.textBlack};
  font-weight: ${p => p.theme.fontWeights.bold};
  font-size: ${p => p.theme.fontSizes[1]}px;
  border-radius: ${p => p.theme.radii.min};
  background-color: ${p => p.theme.colors.primary};
  border: ${p => p.theme.borders.none};
  cursor: pointer;
  transition: background-color 300ms ease-in-out;

  svg {
    color: ${p => p.theme.colors.textBlack};
  }

  :hover {
    background-color: ${p => p.theme.colors.active};
    svg {
      color: ${p => p.theme.colors.text};
    }
  }
`;
