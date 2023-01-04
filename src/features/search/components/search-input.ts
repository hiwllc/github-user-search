import styled from 'styled-components'

export const SearchInput = styled.input`
  width: 100%;
  height: 42px;
  padding: 0 16px;
  border: none;
  color: #4a5568;
  font-size: 1rem;

  &:focus {
    outline: none;
  }

  &::placeholder {
    color: #a9a9a9;
  }
`
