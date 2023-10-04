import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import FoundAnimation from './components/FoundAnimation/FoundAnimation.jsx'
import ExerciseGallery from './components/ExerciseGallery/ExerciseGallery'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ExerciseGallery />
    <FoundAnimation />
  </React.StrictMode>,
)
