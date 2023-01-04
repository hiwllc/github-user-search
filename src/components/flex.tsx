import styled from 'styled-components'

export const Flex = styled.div`
  gap: 0.5rem;
  display: flex;
  align-items: center;
  flex-direction: row;
  flex-wrap: wrap;

  @media (min-width: 768px) {
    gap: 1rem;
  }
`
