import styled from 'styled-components';
import { Field } from 'formik';
import { ErrorMessage as Error } from 'formik';

export const Label = styled.label`
  display: block;
  margin-bottom: ${p => p.theme.space[2]}px;
  color: ${p => p.theme.colors.text};
  font-size: ${p => p.theme.space[3]}px;
`;

export const Input = styled(Field)`
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

export const ErrorMessage = styled(Error)`
  color: ${p => p.theme.colors.error};
  font-weight: ${p => p.theme.fontWeights.bold};
  font-size: ${p => p.theme.fontSizes[1]}px;
`;
