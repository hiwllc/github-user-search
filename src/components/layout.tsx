import { Outlet } from 'react-router-dom'
import { Container } from './container'
import { Logo } from './logo'
import { Main } from './main'

export function Layout() {
  return (
    <Main>
      <Container>
        <Logo>gh.com/search</Logo>

        <Outlet />
      </Container>
    </Main>
  )
}
