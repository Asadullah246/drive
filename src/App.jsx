
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/home/Home'
import Dashboard from './pages/home/Dashboard'
import Category1 from './pages/home/Category1'

function App() {

  return (
    <>
    <Routes>
    <Route path="/" element={<Home></Home>}></Route>

    <Route path="/" element={<Dashboard></Dashboard>}>
          <Route index element={<Home></Home>}></Route>
          <Route path="/category-1" element={<Category1></Category1>}></Route>

        </Route>

    </Routes>

    </>
  )
}

export default App
