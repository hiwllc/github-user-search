import { Layout } from '../../../components'
import {
  SearchButton,
  SearchForm,
  SearchIcon,
  SearchInput,
} from '../components'

export const SearchPage = () => {
  return (
    <Layout>
      <SearchForm>
        <SearchIcon />
        <SearchInput placeholder="Procure por um usuário do github" />
        <SearchButton>Buscar</SearchButton>
      </SearchForm>
    </Layout>
  )
}
