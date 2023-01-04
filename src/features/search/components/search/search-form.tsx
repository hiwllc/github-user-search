import styled from 'styled-components'

export const SearchForm = styled.div`
  width: 100%;
  display: flex;
  padding: 12px 16px;
  border-radius: 8px;
  align-items: center;
  background-color: white;
  transition: all 0.1s ease-in;

  &:focus-within {
    box-shadow: 0 0 16px rgba(0, 0, 0, 0.1);

    & svg {
      color: #4299e1;
    }
  }
`
