import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import AdminValidator from "./AdminValidator";
import FastTrack from "./FastTrack";

import "./App.scss";

export default function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<FastTrack />} />
          <Route path="/admin" element={<AdminValidator />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}
