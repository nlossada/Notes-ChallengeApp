import './App.css'
import { Route, Routes, useLocation } from 'react-router-dom'
import Landing from './components/Landing/Landing'
import Notes from './components/Notes/Notes'
import Categories from './components/Categories/Categories'
import FormAddNote from './components/FormAddNote/FormAddNote'
import FormAddCategory from './components/FormAddCategory/FormAddCategory'
import FormEditNote from './components/FormEditNote/FormEditNote'
import NotFound from './components/NotFound/NotFound'
import NavBar from './components/NavBar/NavBar'



function App() {
  const location = useLocation()

  return (
    <>
      {
        location.pathname === "/" ? null : <NavBar />
      }
      <Routes>

        <Route
          path='/'
          element={<Landing />}
        />
        <Route
          path='/notes'
          element={<Notes />}
        />
        <Route
          path='/categories'
          element={<Categories />}
        />
        <Route
          path='/addNote'
          element={<FormAddNote />}
        />
        <Route
          path='/addCategory'
          element={<FormAddCategory />}
        />
        <Route
          path='/editNote/:id'
          element={<FormEditNote />}
        />
        <Route
          path='*'
          element={<NotFound />}
        />
      </Routes>
    </>
  )
}

export default App
