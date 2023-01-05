import { Outlet } from 'react-router-dom'
import { Container } from './container'
import { Flex } from './flex'
import { HeaderLink } from './header-link'
import { Logo } from './logo'
import { Main } from './main'

type Props = {
  links: {
    text: string
    path: string
  }[]
}

export function Layout({ links }: Props) {
  return (
    <Main>
      <Container>
        <Flex justifyContent="space-between">
          <Logo>gh.com/search</Logo>
          {Boolean(links.length)
            ? links.map(link => (
                <HeaderLink key={link.path} to={link.path}>
                  {link.text}
                </HeaderLink>
              ))
            : null}
        </Flex>

        <Outlet />
      </Container>
    </Main>
  )
}
