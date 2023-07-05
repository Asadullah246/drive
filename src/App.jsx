
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/home/Home'
import Dashboard from './pages/home/Dashboard'
import Category1 from './pages/home/Category1'
import ProductDetails from './pages/home/ProductDetails'
import UploadProduct from './pages/home/UploadProduct'
import "./styles/style.css"

function App() {

  return (
    <>
    <Routes>
    <Route path="/" element={<Home></Home>}></Route>

    <Route path="/" element={<Dashboard></Dashboard>}>
          <Route index element={<Home></Home>}></Route>
          <Route path="/category-1" element={<Category1></Category1>}></Route>
          <Route path="/details" element={<ProductDetails></ProductDetails>}></Route>
          <Route path="/upload" element={<UploadProduct></UploadProduct>}></Route>

        </Route>

    </Routes>

    </>
  )
}

export default App
