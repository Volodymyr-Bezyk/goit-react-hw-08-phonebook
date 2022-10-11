import styled from 'styled-components';

export const Title = styled.h2`
  display: flex;
  align-items: center;
  margin-bottom: ${p => p.theme.space[3]}px;
  font-size: ${p => p.theme.space[4]}px;
  color: ${p => p.theme.colors.text};
`;
export const TitleText = styled.span`
  display: inline-block;
  margin-right: ${p => p.theme.space[4]}px;
`;
export const Label = styled.label`
  color: ${p => p.theme.colors.text};
  font-size: ${p => p.theme.space[3]}px;
`;

export const Input = styled.input`
  padding: ${p => p.theme.space[1]}px;
  outline: none;
  border: none;
  background-color: ${p => p.theme.colors.transparent};
  border-bottom: ${p => p.theme.borders.secondary};
  border-bottom-color: ${p => p.theme.colors.text};
  caret-color: ${p => p.theme.colors.text};
  color: ${p => p.theme.colors.text};
  width: 60%;
  transition: border-bottom-color 300ms ease-in-out;

  :focus {
    border-bottom-color: ${p => p.theme.colors.primary};
  }
`;

export const AddBtn = styled.button`
  display: inline-flex;
  margin-left: ${p => p.theme.space[3]}px;
  padding: ${p => p.theme.space[1]}px ${p => p.theme.space[2]}px;

  color: ${p => p.theme.colors.textBlack};
  font-weight: ${p => p.theme.fontWeights.bold};
  font-size: ${p => p.theme.fontSizes[1]}px;
  border-radius: ${p => p.theme.radii.min};
  background-color: ${p => p.theme.colors.primary};
  border: ${p => p.theme.borders.none};
  cursor: pointer;
  transition: background-color 300ms ease-in-out;

  :hover {
    background-color: ${p => p.theme.colors.active};
  }
`;
