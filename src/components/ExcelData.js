import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ExcelData = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:8000/api/excel-data'); 
        setData(response.data);
        console.log(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1>Excel Data</h1>
      <table>
        <tbody>
          {data.map((item, index) => (
            <tr key={index}>
              <td>{item.Name}</td>
              <td>{item.Value}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ExcelData;
