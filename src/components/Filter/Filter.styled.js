import styled from 'styled-components';

export const Label = styled.label`
  display: block;
  margin-bottom: ${p => p.theme.space[2]}px;
  color: ${p => p.theme.colors.text};
  font-size: ${p => p.theme.sizes[3]}px;
`;

export const Title = styled.p`
  font-size: ${p => p.theme.fontSizes[7]}px;
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
