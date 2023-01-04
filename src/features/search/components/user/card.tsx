import styled from 'styled-components'

export const UserCard = styled.article`
  gap: 1rem;
  width: 100%;
  display: grid;
  padding: 1rem;
  border-radius: 0.5rem;
  background-color: white;
  grid-template-columns: 60px 1fr;

  @media (min-width: 768px) {
    gap: 2rem;
    grid-template-columns: 120px 1fr;
  }
`
