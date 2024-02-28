const express = require("express");
const xlsx = require("xlsx"); // Use uppercase 'XLSX'
const fs = require("fs");
const path = require("path");
const cors = require("cors");

const app = express();
const port = 8000;

const excelFilePath = path.join(__dirname, "downloads", "data.xlsx");
const excelFilePathOutput = path.join(__dirname, "downloads", "output.xlsx");



app.use(express.json());
app.use(cors());


app.post("/api/update-excel", (req, res) => {
  try {
    const workbook = xlsx.readFile(excelFilePath);
    const sheetName = "Finances";

    let worksheet = workbook.Sheets[sheetName];
    if (!worksheet) {
      worksheet = xlsx.utils.json_to_sheet([]);
      xlsx.utils.book_append_sheet(workbook, worksheet, sheetName);
    }

    // Construct organized data
    const formattedData = [
      { A: "User Details" }, 
      {}, 
      { A: "Name", B: "Email", C: "Location", D: "Description", E: "Grade", F: "Number 1", G: "Number 2", H: "Number 3" }, 
    ];

    // Process the single object from req.body
    formattedData.push({
      A: req.body.name,
      B: req.body.email,
      C: req.body.city,
      D: req.body.description,
      E: req.body.grades, 
      F: parseInt(req.body.num1, 10) || 0,  
      G: parseInt(req.body.num2, 10) || 0,
      H: parseInt(req.body.num3, 10) || 0,
    });

    // Update the worksheet
    xlsx.utils.sheet_add_json(worksheet, formattedData, {
      origin: "A1",
      skipHeader: false,
    });

    xlsx.writeFile(workbook, excelFilePath);
    res.send("Excel file updated successfully");
  } catch (error) {
    console.error(error);
    res.status(500).send("Error updating Excel file");  
  }
});

app.get("/api/excel-data", (req, res) => {
  try {
    const workbook = xlsx.readFile(excelFilePathOutput);
    const sheetName = "Sheet1";
    const worksheet = workbook.Sheets[sheetName];
    const jsonData = xlsx.utils.sheet_to_json(worksheet);
    
    res.json(jsonData);
  } catch (error) {
    console.error("Error reading Excel:", error);
    res.status(500).send("Server error");
  }
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
