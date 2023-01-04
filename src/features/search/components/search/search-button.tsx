import styled from 'styled-components'

export const SearchButton = styled.button`
  height: 42px;
  width: max-content;
  padding: 12px 24px;
  border-radius: 8px;
  border-width: 0;
  border-color: #4299e1;
  background-color: #4299e1;
  color: white;
  cursor: pointer;
  line-height: 1.5;

  &:disabled {
    opacity: 0.4;
    cursor: not-allowed;
  }

  &:focus,
  &:hover {
    outline-color: #63b3ed;
    background-color: #63b3ed;
  }
`
