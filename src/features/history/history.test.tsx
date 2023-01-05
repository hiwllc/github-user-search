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
})
