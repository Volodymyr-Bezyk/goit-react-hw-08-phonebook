import styled from 'styled-components';

export const CheckboxLabel = styled.label`
  display: none;
  justify-content: center;
  align-items: center;

  @media screen and (min-width: 768px) {
    display: flex;
    margin-right: ${p => p.theme.space[2]}px;
    cursor: pointer;
  }
`;

export const HideInput = styled.input`
  position: absolute;
  width: 1px;
  height: 1px;
  margin: -1px;
  border: 0;
  padding: 0;

  white-space: nowrap;
  clip-path: inset(100%);
  clip: rect(0 0 0 0);
  overflow: hidden;

  :checked + svg {
    fill: ${p => p.theme.colors.active};
  }
`;
