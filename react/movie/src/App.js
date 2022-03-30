import { Route, Routes } from 'react-router-dom'
import Navigation from './Components/Navigation'
import DefaultLayout from './Layout/DefaultLayout'

import Movies from './pages/movies'
import Home from './pages/home'
import ActorsPage from './pages/ActorsPage'
import ActorPage from './pages/ActorPage'

function App() {
  return (
    <>
      <Navigation />
      <Routes>
        <Route element={<DefaultLayout />}>
          <Route index element={<Home />} />
          <Route path="home" element={<Home />} />
          <Route path="movies">
            <Route index element={<Movies />} />
          </Route>
          <Route path="actors">
            <Route index element={<ActorsPage />} />
            <Route path=":slug" element={<ActorPage />} />
          </Route>        
          </Route>
      </Routes>
    </>
  )
}

export default App