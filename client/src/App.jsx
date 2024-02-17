import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './components/Home'
import Navbar from './components/Navbar'
import Aboutus from './components/Aboutus'
import Login from './components/Login'
import Jobs from './components/Jobs'
import Signup from './components/Signup'

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/jobs' element={<Jobs />}></Route>
        <Route path='/login' element={<Login />}></Route>
        <Route path='/aboutus' element={<Aboutus />}></Route>
        <Route path='/signup' element={<Signup />}></Route>

        
      </Routes>
    </BrowserRouter>
  )
}

export default App
