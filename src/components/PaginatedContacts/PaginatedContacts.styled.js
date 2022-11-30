import styled from 'styled-components';
import ReactPaginate from 'react-paginate';

export const StyledPaginatedContacts = styled(ReactPaginate)`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: ${p => p.theme.space[2]}px;

  @media screen and (min-width: 320px) {
    margin-top: ${p => p.theme.space[3]}px;
  }

  @media screen and (min-width: 768px) {
    margin-top: ${p => p.theme.space[5]}px;
  }

  li a {
    display: inline-block;
    font-family: inherit;
    border-radius: ${p => p.theme.radii.max};
    padding: ${p => p.theme.space[1]}px ${p => p.theme.space[1]}px;
    border: 1px solid ${p => p.theme.colors.paginationBg};
    background-color: ${p => p.theme.colors.paginationBg};
    font-size: ${p => p.theme.fontSizes[1]}px;
    cursor: pointer;
    transition: background-color 250ms ease-in;

    @media screen and (min-width: 320px) {
      padding: ${p => p.theme.space[1]}px ${p => p.theme.space[1]}px;
      font-size: ${p => p.theme.fontSizes[1]}px;
    }
    @media screen and (min-width: 500px) {
      padding: ${p => p.theme.space[1]}px ${p => p.theme.space[2]}px;
      font-size: ${p => p.theme.fontSizes[2]}px;
    }
    @media screen and (min-width: 768px) {
      padding: ${p => p.theme.space[1]}px ${p => p.theme.space[3]}px;
      font-size: ${p => p.theme.fontSizes[3]}px;
    }
  }

  li:hover:not(.selected):not(.disabled) a {
    background-color: ${p => p.theme.colors.active};
  }

  li.previous a,
  li.next a {
    border: 1px solid ${p => p.theme.colors.additionalPagColor};
    background-color: ${p => p.theme.colors.additionalPagColor};
    font-weight: ${p => p.theme.fontWeights.bold};
    color: ${p => p.theme.colors.textBlack};
  }
  li.selected a {
    background-color: ${p => p.theme.colors.primary};
    color: ${p => p.theme.colors.textBlack};
    font-weight: ${p => p.theme.fontWeights.bold};
  }
  li.disabled a {
    color: ${p => p.theme.colors.textBlack};
    background-color: ${p => p.theme.colors.disabled};
  }
  li.disable,
  li.disabled a {
    cursor: default;
  }
`;
