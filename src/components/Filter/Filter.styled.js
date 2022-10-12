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
  display: block;
  margin-bottom: ${p => p.theme.space[2]}px;
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
  width: ${p => p.theme.sizes.w.max};
  transition: border-bottom-color 300ms ease-in-out;

  :focus {
    border-bottom-color: ${p => p.theme.colors.primary};
  }
`;
