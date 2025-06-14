import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import Homepage from "./homepage.jsx";
import About from "./About.jsx";
import Jobs from "./Jobs.jsx";
import News from "./news.jsx";

import "./App.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/about" element={<About />} />
        <Route path="/jobs" element={<Jobs />} />
        <Route path="/news" element={<News />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);