import React, { useState } from "react";
import axios from "axios";
import "./ExcelForm.css"

const ExcelForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    city: "",
    description: "",
    grades: "",
    num1: 0,
    num2: 0,
    num3: 0,
  });

  const handleChange = (event) => {
    
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post(
        "http://localhost:8000/api/update-excel",
        formData
      );
      console.log("Server response:", response.data);
    } catch (error) {
      console.error("Error submitting data:", error);
    }
  };

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Name"
        />
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Email"
        />
        <input
          type="text"
          name="city"
          value={formData.city}
          onChange={handleChange}
          placeholder="City"
        />
        <input
          type="text"
          name="description"
          value={formData.description}
          onChange={handleChange}
          placeholder="Description"
        /> 
        <input
          type="text"
          name="grades"
          value={formData.grades}
          onChange={handleChange}
          placeholder="Grades"
        /> 

        <input
          type="number"
          name="num1"
          value={formData.num1}
          onChange={handleChange}
          placeholder="Number 1"
        />
        <input
          type="number"
          name="num2"
          value={formData.num2}
          onChange={handleChange}
          placeholder="Number 2"
        />
        <input
          type="number"
          name="num3"
          value={formData.num3}
          onChange={handleChange}
          placeholder="Number 3"
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default ExcelForm;
