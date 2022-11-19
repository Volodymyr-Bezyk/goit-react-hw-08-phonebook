import styled from 'styled-components';

export const AppBarWrap = styled.div`
  display: flex;
  justify-content: space-between;
  padding: ${p => p.theme.space[2]}px ${p => p.theme.space[0]}px;
  margin-bottom: ${p => p.theme.space[2]}px;

  @media screen and (max-width: 767px) {
    display: none;
  }
`;

export const FilterBtn = styled.button`
  display: inline-flex;
  justify-content: center;
  padding: ${p => p.theme.space[1]}px ${p => p.theme.space[3]}px;
  color: ${p => p.theme.colors.text};
  font-weight: ${p => p.theme.fontWeights.bold};
  font-size: ${p => p.theme.fontSizes[3]}px;
  border-radius: ${p => p.theme.radii.med};
  /* background-color: ${p => p.theme.colors.accent}; */
  background-color: ${p =>
    p.selected ? p.theme.colors.active : p.theme.colors.accent};

  border: ${p => p.theme.borders.none};
  cursor: pointer;
  transition: background-color 300ms ease-in-out;

  :not(:first-child) {
    margin-left: ${p => p.theme.space[2]}px;
  }
`;

export const InfoText = styled.p`
  color: ${p => p.theme.colors.text};
  font-weight: ${p => p.theme.fontWeights.bold};
  font-size: ${p => p.theme.fontSizes[4]}px;
  text-decoration: underline;
`;
