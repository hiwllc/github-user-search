import * as React from 'react'
import { Container } from './container'
import { Logo } from './logo'
import { Main } from './main'

export function Layout({ children }: React.PropsWithChildren<unknown>) {
  return (
    <Main>
      <Container>
        <Logo>gh.com/search</Logo>

        {children}
      </Container>
    </Main>
  )
}
