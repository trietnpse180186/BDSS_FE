import { useState } from "react";

import "./App.css";
import Login from "./pages/Login";
import HomePage from "./pages/HomePage";
import { BrowserRouter } from "react-router";
import WebRoutes from "./routes/WebRoutes";
function App() {
  return (
    <>
      <WebRoutes />
    </>
  );
}

export default App;
