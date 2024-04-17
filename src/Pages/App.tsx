import React from "react";
import "../styles/App.css";
import { Route, Routes } from "react-router-dom";
import Header from "./Header";
import styles from "../styles/app.module.scss";

function App() {
  return (
    <div className={styles.wrapper}>
      <Routes>
        <Route path="/" index element={<Header />} />
        <Route path="*" element={<Header />} />
      </Routes>
    </div>
  );
}

export default App;
