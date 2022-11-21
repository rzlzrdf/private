import React from "react";
import "./App.css"
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Home from "./Pages/Home/Home";
import Portofolio from "./Pages/Porto/Portofolio";
import Services from "./Pages/Services/Services.js";


function App() {
  return (
    <div className="App">
    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route index element={<Home k/>} />
          <Route path="portofolio" element={<Portofolio/>} />
          <Route path="service" element={<Services />} />
        </Route>
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
