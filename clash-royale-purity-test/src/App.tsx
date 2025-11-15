import './App.css'
import QuestionForm from "./components/QuestionForm"
import { BrowserRouter } from "react-router-dom"

function App() {
  return (
    <BrowserRouter>
      <QuestionForm />
    </BrowserRouter>
  )
}

export default App
