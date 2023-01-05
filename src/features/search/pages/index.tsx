import * as React from 'react'
import { CodeBracketIcon, StarIcon } from '@heroicons/react/24/outline'
import { useSelector, useDispatch } from 'react-redux'
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

export const SearchPage = () => {
  const [term, setTerm] = React.useState('')
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
