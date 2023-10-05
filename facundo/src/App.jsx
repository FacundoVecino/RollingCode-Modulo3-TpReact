//--------------Importaciones---------------
// Rutas
import AppExercise2 from './components/Exercise/Exercise2/AppExercise2.jsx'
import Exercise1 from './components/Exercise/Exercise1/Exercise1.jsx'
import Error404 from './components/Error404/Error404.jsx'
import ExerciseGallery from './components/ExerciseGallery/ExerciseGallery.jsx'

// Componentes
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import NavbarMenu from './components/NavbarMenu/NavbarMenu.jsx'

// Estilos
import '/node_modules/bootstrap/dist/css/bootstrap.css'
import '/node_modules/bootstrap/dist/js/bootstrap.js'

const App = () => {
  return (
    <BrowserRouter>
    <NavbarMenu />
      <Routes>
        <Route path='/' element={<ExerciseGallery/>} />
        <Route path='/exercise1' element={<Exercise1/>} />
        <Route path='/exercise2' element={<AppExercise2/>} />
        <Route path='*' element={<Error404/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App