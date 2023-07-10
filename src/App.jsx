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
import RequireAuth from "./components/RequireAuth";
import AllMember from "./pages/home/AllMember";

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
        <Route path="/" element={<RequireAuth><Home></Home></RequireAuth>}></Route>
        <Route path="login" element={<Login></Login>}></Route>

        <Route path="/" element={<RequireAuth><Dashboard></Dashboard></RequireAuth>}>
          <Route index element={<RequireAuth><Home></Home></RequireAuth>}></Route>
          <Route
            path="/:id"
            element={<RequireAuth><ProductDetails></ProductDetails></RequireAuth>}
          ></Route>

          <Route
            path="/upload"
            element={<RequireAuth><UploadProduct></UploadProduct></RequireAuth>}
          ></Route>
          <Route path="/mydoc" element={<RequireAuth><MyDoc></MyDoc></RequireAuth>}></Route>
          <Route path="/alluser" element={<RequireAuth><AllMember></AllMember></RequireAuth>}></Route>
          <Route path="/allfiles" element={<RequireAuth><AllProducts /></RequireAuth>}></Route>
        </Route>
      </Routes>
    </>
  );
}

export default App;
