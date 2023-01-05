import * as React from 'react'
import { CodeBracketIcon, StarIcon } from '@heroicons/react/24/outline'
import { useSelector, useDispatch } from 'react-redux'
import { useLocation } from 'react-router-dom'
import { Flex } from '../../../components'
import { EmptyState } from '../../../components/empty-state'
import { RootState } from '../../../lib/store'
import { searchUser } from '../actions/search'
import {
  Repository,
  RepositoryDescription,
  RepositoryLink,
  RepositoryMetadata,
  RepositoryName,
  RepositoryTag,
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
import { useLocalStorage } from '../../../hooks/use-localstorage'

export const SearchPage = () => {
  const location = useLocation()
  const queryParams = new URLSearchParams(location.search)
  const search = queryParams.get('search')

  const [term, setTerm] = React.useState(search ?? '')
  const { value, save } = useLocalStorage<{ term: string; date: string }[]>(
    'github-search',
    []
  )

  const {
    data: { repositories, status, user },
  } = useSelector((state: RootState) => state)
  const dispatch = useDispatch()

  const handleSearchTerm = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTerm(event.target.value.trim())
  }

  const handleSearchSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    // @ts-expect-error Dispatch is not assignable of type 'AnyAction'
    dispatch(searchUser(term))
  }

  // lets save the search in localStorage
  React.useEffect(() => {
    if (status === 'success' && Boolean(term.length) && search !== term) {
      save([...value, { term, date: user?.at as string }])
    }
    // não passamos o term nem o save aqui pra evitar salvar no
    // no histórico buscas não realizadas (caso do term). E evitar
    // loop infinito (caso do save)
    // idealmente nós tratariamos esses estados em outro local.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [status, user, search])

  React.useEffect(() => {
    if (search) {
      // @ts-expect-error Dispatch is not assignable of type 'AnyAction'
      dispatch(searchUser(search))
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [search])

  return (
    <>
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

      {status === 'idle' ? <EmptyState>Nenhuma busca ainda.</EmptyState> : null}

      {status === 'error' ? (
        <EmptyState>Nenhum usuário encontrado.</EmptyState>
      ) : null}

      {Boolean(user) ? (
        <UserCard>
          <UserImage src={user?.avatar_url} alt={user?.name} />
          <UserHeader>
            <UserName>{user?.name}</UserName>
            <Flex>
              <UserHandler href={user?.html_url}>@{user?.login}</UserHandler>
              <UserEmail>{user?.email ?? 'Sem e-mail público'}</UserEmail>
            </Flex>
            <UserBio>{user?.bio ?? 'Esse usuário não tem bio.'}</UserBio>
          </UserHeader>
        </UserCard>
      ) : null}

      {Boolean(repositories?.length)
        ? repositories?.map(repository => (
            <Repository key={repository.id}>
              <RepositoryName>
                <RepositoryLink href={repository.html_url}>
                  {repository.name}
                </RepositoryLink>
              </RepositoryName>
              <RepositoryDescription>
                {repository.description}
              </RepositoryDescription>
              <Flex>
                {repository.topics.map(topic => (
                  <RepositoryTag key={topic}>{topic}</RepositoryTag>
                ))}
              </Flex>
              <RepositoryMetadata>
                {repository.language ? (
                  <span>
                    <CodeBracketIcon width={16} height={16} />{' '}
                    {repository.language}
                  </span>
                ) : null}
                <span>
                  <StarIcon width={16} height={16} />
                  {repository.stargazers_count}
                </span>
              </RepositoryMetadata>
            </Repository>
          ))
        : null}
    </>
  )
}
