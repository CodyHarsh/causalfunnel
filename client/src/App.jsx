import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useDispatch, useSelector } from 'react-redux'
import { increment } from './redux-store/slices/currentQuestion'
import Loader from './components/Loader'
import LandingQuiz from './components/LandingQuiz'
import ApiError from './components/Error Pages/ApiError'
import { Route, Routes } from 'react-router-dom'
import Answersheet from './components/Submission Page/Answersheet'
import PageNotFound from './components/Error Pages/PageNotFound'
import Home from './Home'
import Logo from './components/Navbar/Logo'


function App() {
  const responseCode = useSelector((state) => state.questions.responseCode);
  return (
    <>
      <Logo/>
      {
        responseCode === 1 ? (<Loader />) : (
          responseCode === 0  ? (
          <Routes>
            <Route path = "/" element={<Home/>}/>
            <Route path = "/submit" element={<Answersheet />} />
            <Route path = "/quiz" element ={<div> Harsh</div>} />
            <Route path = "*" element={<PageNotFound /> } />
          </Routes>
            
            ) : 
              
            (< ApiError />)
          
        )
      }
      
    </>
  )
}

export default App
