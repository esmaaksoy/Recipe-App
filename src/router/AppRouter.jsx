import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Register from "../pages/Register";
import PrivateRouter from "./PrivateRouter";
import Details from "../pages/Details";
import Login from "../pages/Login";
import Navbar from "../Components/Navbar"
import Footer from '../Components/Footer'
import Blog from "../pages/Blog";
import Menu from "../pages/Menu";

const AppRouter = () => {
  return (
    <>
     <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/menu" element={<Menu/>} />
        <Route path="login" element={<Login/>} />
        <Route path="register" element={<Register/>} />
        <Route path="blog" element={<Blog/>}/>
        <Route path="dashboard" element={<PrivateRouter/>}>
          <Route path="details" element={<Details/>} />
        </Route>
      </Routes>
      <Footer/>
    </>
  );
};

export default AppRouter;
