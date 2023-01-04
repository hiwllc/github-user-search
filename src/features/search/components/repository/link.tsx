import styled from 'styled-components'

export const RepositoryLink = styled.a`
  color: inherit;
  text-decoration: none;

  &:focus {
    outline: none;
    box-shadow: none;
  }

  &:before {
    content: '';
    width: 100%;
    height: 100%;
    display: block;

    top: 0;
    left: 0;
    position: absolute;
  }
`
