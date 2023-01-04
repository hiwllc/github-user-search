import styled from 'styled-components'
import { Card } from '../../../../components'

export const Repository = styled(Card)`
  position: relative;
  transition: all 0.2s;

  &:hover,
  &:focus-within {
    box-shadow: 0 0 32px rgba(0, 0, 0, 0.1);
  }
`
