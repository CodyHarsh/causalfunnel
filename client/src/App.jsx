// Importing necessary styles, components, and dependencies
import './App.css'
import { useSelector } from 'react-redux'
import Loader from './components/Loader'
import ApiError from './components/Error Pages/ApiError'
import { Route, Routes } from 'react-router-dom'
import Answersheet from './components/Submission Page/Answersheet'
import PageNotFound from './components/Error Pages/PageNotFound'
import Home from './Home'
import Logo from './components/Navbar/Logo'

// Main App component
function App() {
  // Accessing the responseCode from the Redux store
  const responseCode = useSelector((state) => state.questions.responseCode);

  return (
    <>
      {/* Rendering the Logo component */}
      <Logo/>

      {/* Conditional rendering based on the response code from the Redux store */}
      {responseCode === 1 ? (
        // Displaying a Loader component when the response code is 1. Which means no data is fetched till yet
        <Loader />
      ) : responseCode === 0 ? (
        // Displaying different routes when the response code is 0
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/submit" element={<Answersheet />} />
          <Route path="*" element={<PageNotFound /> } />
        </Routes>
      ) : (
        // Displaying ApiError component when the response code is not 0 or 1
        <ApiError />
      )}
    </>
  )
}

// Exporting the App component as the default export
export default App
