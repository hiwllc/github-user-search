import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const ListLink = styled(Link)`
  text-decoration: none;

  &:before {
    content: '';

    top: 0;
    left: 0;
    position: absolute;

    width: 100%;
    height: 100%;
    display: block;
  }
`
