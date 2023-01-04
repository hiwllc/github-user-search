import styled from 'styled-components'
import { Card } from '../../../../components'

export const UserCard = styled(Card)`
  grid-template-columns: 60px 1fr;

  @media (min-width: 768px) {
    gap: 2rem;
    grid-template-columns: 120px 1fr;
  }
`
