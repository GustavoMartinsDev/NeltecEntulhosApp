import React from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Header from "./Pages/Header";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Header />} />
      <Route path="*" element={<Header />} />
    </Routes>
  );
}

export default App;
