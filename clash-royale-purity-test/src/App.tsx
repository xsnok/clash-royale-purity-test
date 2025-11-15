import './App.css'
import Scores from './components/Scores'
import QuestionForm from './components/QuestionForm'
import Index from './pages/Index'
import { BrowserRouter, Routes, Route } from "react-router-dom"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={
          <Index>
            <QuestionForm />
          </Index>
          } />
        <Route path="/score/:score" element={
          <Index>
            <Scores />
          </Index>
        } />
      </Routes>
    </BrowserRouter>
  )
}

export default App
