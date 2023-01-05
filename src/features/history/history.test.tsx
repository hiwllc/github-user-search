import userEvent from '@testing-library/user-event'
import { render, screen, waitForElementToBeRemoved } from '../../test-renders'
import App from '../../App'

jest.useFakeTimers()

test('should search by github user and see history', async () => {
  render(<App />)

  const historyLink = screen.getByText(/histórico/i)

  expect(historyLink).toBeInTheDocument()
  userEvent.click(historyLink)

  expect(screen.getByRole(/link/, { name: /busca/i })).toBeInTheDocument()
  userEvent.click(screen.getByRole(/link/, { name: /busca/i }))

  const input = screen.getByPlaceholderText(/procure por um usuário do github/i)

  userEvent.type(input, 'octocat')
  userEvent.click(screen.getByText(/buscar/i))

  await waitForElementToBeRemoved(() =>
    screen.queryByText(/nenhuma busca ainda/i)
  )

  jest.advanceTimersByTime(10000)

  userEvent.click(screen.getByRole(/link/, { name: /histórico/i }))

  expect(screen.getByText(/octocat/i)).toBeInTheDocument()
  expect(screen.getByText(/há 10 segundos/)).toBeInTheDocument()

  userEvent.click(screen.getByRole(/link/, { name: /busca/i }))
  userEvent.type(
    screen.getByPlaceholderText(/procure por um usuário do github/i),
    'octodog'
  )
  userEvent.click(screen.getByText(/buscar/i))

  await screen.findByText(/the octodog/i)

  expect(screen.getByText(/the octodog/i)).toBeInTheDocument()
  expect(screen.getByText(/a repository/i)).toBeInTheDocument()

  jest.advanceTimersByTime(10000)

  userEvent.click(screen.getByRole(/link/, { name: /histórico/i }))
  userEvent.click(screen.getByText(/octocat/i))

  await screen.findByText(/the octocat/i)
  expect(screen.getByText(/the octocat/i)).toBeInTheDocument()
})
