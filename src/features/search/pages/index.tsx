import * as React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Flex, Layout } from '../../../components'
import { EmptyState } from '../../../components/empty-state'
import { RootState } from '../../../lib/store'
import { searchUser } from '../actions/search'
import {
  SearchButton,
  SearchForm,
  SearchIcon,
  SearchInput,
  UserBio,
  UserCard,
  UserEmail,
  UserHandler,
  UserHeader,
  UserImage,
  UserName,
} from '../components'

export const SearchPage = () => {
  const [term, setTerm] = React.useState('')
  const { user } = useSelector((state: RootState) => state)
  const dispatch = useDispatch()

  const handleSearchTerm = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTerm(event.target.value.trim())
  }

  const handleSearchSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    // @ts-expect-error Dispatch is not assignable of type 'AnyAction'
    dispatch(searchUser(term))
  }

  return (
    <Layout>
      <SearchForm as="form" onSubmit={handleSearchSubmit}>
        <SearchIcon />
        <SearchInput
          value={term}
          name="search"
          onChange={handleSearchTerm}
          placeholder="Procure por um usuário do github"
        />
        <SearchButton>Buscar</SearchButton>
      </SearchForm>

      {user.status === 'idle' ? (
        <EmptyState>Nenhuma busca ainda.</EmptyState>
      ) : null}

      {Boolean(user.data) ? (
        <UserCard>
          <UserImage src={user.data?.avatar_url} alt={user.data?.name} />
          <UserHeader>
            <UserName>{user.data?.name}</UserName>
            <Flex>
              <UserHandler href={user?.data?.html_url}>
                @{user.data?.login}
              </UserHandler>
              <UserEmail>{user.data?.email ?? 'Sem e-mail público'}</UserEmail>
            </Flex>
            <UserBio>{user.data?.bio ?? 'Esse usuário não tem bio.'}</UserBio>
          </UserHeader>
        </UserCard>
      ) : null}
    </Layout>
  )
}
