import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import List from "./pages/list/List";
import Single from './pages/single/Single'
import New from './pages/new/New'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { productInputs, userInputs } from "./formsource";
import './style/style.scss'
import { useContext } from "react";
import { darkModeContext } from "./context/darkModeContext";
function App() {
  const { darkMode } = useContext(darkModeContext);
  return (
    <div className= {darkMode?"app dark":"app"}>
      <BrowserRouter>
      <Routes>
        <Route path = "/" element={<Home/>}/>
        <Route path = "/login" element={<Login/>}/>
        <Route path = "/users" element={<List/>}/>
        <Route path = "/users/:userId" element={<Single/>}/>
        <Route path = "/users/new" element={<New inputs={userInputs} title="Add New User"/>}/>
        <Route path = "/products" element={<List/>}/>
        <Route path = "/products/:productId" element={<Single/>}/>
        <Route path = "/products/new" element={<New inputs={productInputs} title="Add New Product"/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
