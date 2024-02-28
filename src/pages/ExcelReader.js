import { useState, useEffect } from "react";
import * as XLSX from "xlsx";

import "../pages/ExcelReader.css";

function ExcelReader() {
  const [data, setData] = useState([]);

  useEffect(() => {
    loadExcelFile();
  }, []);

  const loadExcelFile = () => {
    const filePath = "http://localhost:3000/student_report.xlsx"; // Update with your server URL
    fetch(filePath)
      .then((response) => response.blob())
      .then((blob) => {
        const reader = new FileReader();
        reader.onload = (e) => {
          const data = e.target.result;
          const workbook = XLSX.read(data, { type: "binary" });
          const sheetName = workbook.SheetNames[0];
          const sheet = workbook.Sheets[sheetName];
          const parsedData = XLSX.utils.sheet_to_json(sheet);
          setData(parsedData);
        };
        reader.readAsBinaryString(blob);
      })
      .catch((error) => {
        console.error("Error loading Excel file:", error);
      });
  };
  

  return (
    <div className="container">
      <h1 className="title">Excel File Reader</h1>

      {data.length > 0 && (
        <table className="table">
          <thead>
            <tr>
              {Object.keys(data[0]).map((key) => (
                <th key={key}>{key}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {data.map((row, index) => (
              <tr key={index}>
                {Object.values(row).map((value, index) => (
                  <td key={index}>{value}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default ExcelReader;
