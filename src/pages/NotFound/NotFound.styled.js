import styled from 'styled-components';

export const Title = styled.p`
  display: none;
  @media screen and (min-width: 520px) {
    display: flex;
    align-items: center;
    color: ${p => p.theme.colors.text};
    font-size: ${p => p.theme.fontSizes[5]}px;
  }
`;

export const RedirectBtn = styled.button`
  display: inline-flex;
  margin-left: ${p => p.theme.space[3]}px;
  padding: ${p => p.theme.space[1]}px ${p => p.theme.space[2]}px;
  color: ${p => p.theme.colors.textBlack};
  font-size: ${p => p.theme.fontSizes[2]}px;
  border-radius: ${p => p.theme.radii.min};
  background-color: ${p => p.theme.colors.primary};
  border: ${p => p.theme.borders.none};
  cursor: pointer;
  transition: background-color 300ms ease-in-out;

  :hover {
    background-color: ${p => p.theme.colors.active};
  }

  @media screen and (min-width: 520px) {
    padding: ${p => p.theme.space[2]}px ${p => p.theme.space[4]}px;
  }
`;
