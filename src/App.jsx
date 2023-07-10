import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import Dashboard from "./pages/home/Dashboard";
import Category1 from "./pages/home/Category1";
import ProductDetails from "./pages/home/ProductDetails";
import UploadProduct from "./pages/home/UploadProduct";
import "./styles/style.css";
import MyDoc from "./pages/home/MyDoc";
import AllProducts from "./pages/home/AllProducts";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Login from "./pages/home/Login";

function App() {
  return (
    <>
      <ToastContainer
        position="top-center"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        style={{ zIndex: 9999999 }}
      />

      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="login" element={<Login></Login>}></Route>  

        <Route path="/" element={<Dashboard></Dashboard>}>
          <Route index element={<Home></Home>}></Route>
          <Route
            path="/:id"
            element={<ProductDetails></ProductDetails>}
          ></Route>
          <Route path="/category-1" element={<Category1></Category1>}></Route>

          <Route
            path="/upload"
            element={<UploadProduct></UploadProduct>}
          ></Route>
          <Route path="/mydoc" element={<MyDoc></MyDoc>}></Route>
          <Route path="/allfiles" element={<AllProducts />}></Route>
        </Route>
      </Routes>
    </>
  );
}

export default App;
