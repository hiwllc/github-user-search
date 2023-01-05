import styled from 'styled-components'

export const ListItem = styled.li`
  padding: 8px 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;

  &:hover span,
  &:focus-within span {
    color: #4299e1;
  }

  &:first-of-type {
    padding-top: 0;
  }

  &:last-of-type {
    padding-bottom: 0;
  }

  & span {
    color: #718096;
  }
`
