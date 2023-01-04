import {
  CodeBracketIcon,
  EnvelopeIcon,
  StarIcon,
} from '@heroicons/react/24/outline'
import { Layout, Flex } from '../../../components'
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
  return (
    <Layout>
      <SearchForm as="form">
        <SearchIcon />
        <SearchInput placeholder="Procure por um usuário do github" />
        <SearchButton>Buscar</SearchButton>
      </SearchForm>

      <UserCard as="section">
        <UserImage src="https://avatars.githubusercontent.com/u/6943919?v=4" />
        <div>
          <UserHeader>
            <UserName>Wallace Oliveira</UserName>
            <Flex as="p">
              <UserHandler href="https://github.com/uselessdev">
                @uselessdev
              </UserHandler>
              <UserEmail>
                <EnvelopeIcon width={16} height={16} />
                wallacebatistaoliveira@gmail.com
              </UserEmail>
            </Flex>
          </UserHeader>

          <UserBio>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam,
            assumenda amet. Pariatur quidem, fugit voluptatum amet commodi neque
            a nobis sed, quasi necessitatibus, deserunt est quas maxime
            consequuntur facere saepe.
          </UserBio>
        </div>
      </UserCard>

      <Repository>
        <RepositoryName>
          <RepositoryLink href="https://github.com/uselessdev/expressive">
            Expressive
          </RepositoryLink>
        </RepositoryName>
        <RepositoryDescription>
          A simple and small boilerplate for NodeJS with Express
        </RepositoryDescription>

        <Flex>
          <RepositoryTag>nodejs</RepositoryTag>
          <RepositoryTag>boilerplate</RepositoryTag>
          <RepositoryTag>express</RepositoryTag>
        </Flex>

        <RepositoryMetadata>
          <span>
            <CodeBracketIcon width={16} height={16} /> Javascript
          </span>
          <span>
            <StarIcon width={16} height={16} />
            164
          </span>
        </RepositoryMetadata>
      </Repository>
    </Layout>
  )
}
