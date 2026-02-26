
import { BrowserRouter, Route } from 'react-router-dom'
import { Routes } from 'react-router-dom'
import HomePage from './pages/HomePage'
import LoginPage from './Components/LoginPage'
import RegisterPage from './Components/RegisterPage'
import CreateExpense from './Components/CreateExpense'

function App() {
  return (
<div>

   <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage/>} />
        <Route path="/register" element={<RegisterPage/>} />
        <Route path="/add" element={<CreateExpense />} />
      </Routes>
    </BrowserRouter>
  
</div>
  )
}

export default App

