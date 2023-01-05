import styled from 'styled-components'

type Props = {
  justifyContent?:
    | 'center'
    | 'flex-start'
    | 'flex-end'
    | 'space-between'
    | 'space-evenly'
}

export const Flex = styled.div<Props>`
  gap: 0.5rem;
  display: flex;
  align-items: center;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: ${props => props.justifyContent ?? 'flex-start'};

  @media (min-width: 768px) {
    gap: 1rem;
  }
`
