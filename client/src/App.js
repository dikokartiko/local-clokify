import "./App.css";
import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import SignIn from "./views/Auth/SignIn";
import AttendanceLog from "./views/AttendanceLog/AttendanceLog";
import AttendanceLive from "./views/AttendanceLive/index";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SignIn />} />
        <Route path="/attandance-live" element={<AttendanceLive />} />
        <Route path="/attandance-log" element={<AttendanceLog />} />
      </Routes>
      <ToastContainer />
    </BrowserRouter>
  );
}

export default App;
