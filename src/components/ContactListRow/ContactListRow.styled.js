import styled from 'styled-components';

export const Info = styled.span`
  text-align: start;
  font-weight: ${p => p.theme.fontWeights.medium};
  flex-basis: calc(100%);
  font-size: ${p => p.theme.fontSizes[0]}px;

  :nth-of-type(3) {
    display: none;
  }

  @media screen and (min-width: 500px) {
    flex-basis: calc(100% / 2);
    font-size: ${p => p.theme.fontSizes[2]}px;
  }

  @media screen and (min-width: 768px) {
    font-size: ${p => p.theme.fontSizes[3]}px;
  }
  @media screen and (min-width: 1200px) {
    font-size: ${p => p.theme.fontSizes[4]}px;
    :nth-of-type(3) {
      display: block;
    }
    @media screen and (min-width: 1500px) {
      font-size: ${p => p.theme.fontSizes[5]}px;
    }
  }
`;

export const InfoBtn = styled.button`
  display: inline-flex;
  flex-basis: 30px;
  justify-content: center;
  align-items: center;
  margin-left: auto;
  padding: ${p => p.theme.space[0]}px ${p => p.theme.space[1]}px;
  color: ${p => p.theme.colors.textBlack};
  font-weight: ${p => p.theme.fontWeights.bold};
  font-size: ${p => p.theme.fontSizes[1]}px;
  border-radius: ${p => p.theme.radii.min};
  background-color: ${p => p.theme.colors.primary};
  border: ${p => p.theme.borders.none};
  cursor: pointer;
  transition: background-color 300ms ease-in-out;

  svg {
    display: block;
    color: ${p => p.theme.colors.textBlack};
  }

  :hover {
    background-color: ${p => p.theme.colors.active};
    svg {
      color: ${p => p.theme.colors.text};
    }
  }

  @media screen and (max-width: 499px) {
    svg {
      width: 5px;
      height: 5px;
    }
  }
  @media screen and (min-width: 500px) {
    svg {
      width: 8px;
      height: 8px;
    }
  }
  @media screen and (min-width: 768px) {
    flex-basis: 40px;

    svg {
      margin-right: auto;
      width: 12px;
      height: 12px;
    }
    @media screen and (min-width: 768px) {
      padding: ${p => p.theme.space[1]}px ${p => p.theme.space[3]}px;
    }
  }
`;
