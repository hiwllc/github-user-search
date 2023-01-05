import { Route, Routes, useLocation } from 'react-router-dom'
import { Layout } from './components'
import { HistoryPage } from './features/history'
import { SearchPage } from './features/search'

function App() {
  const location = useLocation()

  const links =
    location.pathname === '/'
      ? [{ text: 'Histórico', path: '/historico' }]
      : [{ text: 'Busca', path: '/' }]

  return (
    <Routes>
      <Route path="/" element={<Layout links={links} />}>
        <Route index element={<SearchPage />} />
        <Route path="/historico" element={<HistoryPage />} />
      </Route>
    </Routes>
  )
}

export default App
