//--------------Importaciones---------------
// Rutas
import Exercise1 from './components/Exercise/Exercise1/Exercise1.jsx'
import AppExercise2 from './components/Exercise/Exercise2/AppExercise2.jsx'
import AppExercise3 from './components/Exercise/Exercise3/AppExercise3.jsx'
import AppExercise4 from './components/Exercise/Exercise4/AppExercise4.jsx'
import AppExercise5 from './components/Exercise/Exercise5/AppExercise5.jsx'
import AppExercise6 from './components/Exercise/Exercise6/AppExercise6.jsx'
import Error404 from './components/Error404/Error404.jsx'
import ExerciseGallery from './components/ExerciseGallery/ExerciseGallery.jsx'

// Componentes
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import NavbarMenu from './components/NavbarMenu/NavbarMenu.jsx'
import Footer from './components/Footer/Footer.jsx'

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
        <Route path='/exercise3' element={<AppExercise3/>} />
        <Route path='/exercise4' element={<AppExercise4/>} />
        <Route path='/exercise5' element={<AppExercise5/>} />
        <Route path='/exercise6' element={<AppExercise6/>} />
        <Route path='*' element={<Error404/>} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App