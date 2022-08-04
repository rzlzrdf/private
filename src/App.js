import React from "react";
import "./App.css"
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Header from "./Components/Header/Header";
import Contact from "./Pages/Contact";
import Home from "./Pages/Home/Home";
import Portofolio from "./Pages/Portofolio";


function App() {
  return (
    <div className="App">
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route path="/">
          <Route index element={<Home/>} />
          <Route path="portofolio" element={<Portofolio/>} />
          <Route path="contact" element={<Contact/>} />
        </Route>
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
