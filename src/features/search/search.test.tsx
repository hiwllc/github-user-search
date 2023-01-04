import { screen, render } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { SearchPage } from './pages'

test('user can change the search input value', () => {
  render(<SearchPage />)

  const input = screen.getByPlaceholderText(/procure por um usuário do github/i)

  userEvent.type(input, `uselessdev`)

  expect(input).toBeInTheDocument()
  expect(input).toHaveValue('uselessdev')
})
