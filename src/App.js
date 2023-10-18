import { BrowserRouter, Routes, Route } from "react-router-dom";
import logo from "./logo.svg";
import Navbar from "./Navbar";
import Layout from "./Layout";
import Home from "./Home";
import AllCars from "./AllCars";
import AllCarDetails from "./AllCarDetails";
import ReqCar from "./ReqCar";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />}></Route>
            <Route path="/allcars" element={<AllCars />}></Route>
            <Route path="/detailofcar/:id" element={<AllCarDetails />}></Route>
            <Route path="/reqcar/add" element={<ReqCar />}></Route>
            <Route path="/detailofcar/edit/:id" element={<ReqCar />}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
