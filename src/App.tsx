import { Route, Routes } from 'react-router-dom'
import { SearchPage } from './features/search'

function App() {
  return (
    <Routes>
      <Route index element={<SearchPage />} />
    </Routes>
  )
}

export default App
