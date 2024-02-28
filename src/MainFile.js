import React from "react";
import App from "./App";
import { Routes, Route } from "react-router-dom";
import ExcelReader from  "./pages/ExcelReader"
import ProductReport from "./pages/ProductReport";
import ExcelForm from "./components/ExcelForm";
import ExcelData from "./components/ExcelData";
const MainFile = () => {
  return (
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/reader" element={<ExcelReader />} />
      <Route path="/form" element={<ProductReport/>}/>
      <Route path="/excelform" element={<ExcelForm/>}/>
      <Route path="/readfile" element={<ExcelData/>}/>
    </Routes>
  );
};

export default MainFile;
