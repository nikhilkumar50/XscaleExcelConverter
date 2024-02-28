import React, { useState } from "react";
import "./ProductReport.css";
import TableRow from "../components/Tablerow";



const cities = [
  "Mumbai",
  "Delhi",
  "Bangalore",
  "Kolkata",
  "Chennai",
  "Hyderabad",
  "Pune",
  "Ahmedabad",
  "Jaipur",
  "Lucknow",
]; 

const ProductReport = () => {
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    productName: "",
    geo: "",
    upfrontProductDevelopmentCost: 0,
    otherFixedAdminCost: 0,
    upfrontImplementationCost: 0,
    ongoingProductDevelopmentCost: 0,
    otherFixedInfrastructureCost: 0,
    salesAndMarketingCost: 0,
    otherCost1: 0,
    otherCost2: 0,
    infrastructureCostPerUserPerYear: 0,
    supportCostPerUserPerYear: 0,
    onboardingCostPerUserPerYear: 0,
    incrementalSalesAndMarketingCostPerYear: 0,
    otherCost3: 0,
    otherCost4: 0,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: name.includes("Cost") ? parseFloat(value) : value,
    });
  };

  return (
    <div className="form-container">
      <div className="top-section">
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Name"
            value={formData.name}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="description">Description:</label>
          <input
            type="text"
            id="description"
            name="description"
            placeholder="Description"
            value={formData.description}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="productName">Product Name:</label>
          <input
            type="text"
            id="productName"
            name="productName"
            placeholder="Product Name"
            value={formData.productName}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="geo">Geo:</label>
          <select
            id="geo"
            name="geo"
            value={formData.geo}
            onChange={handleChange}
          >
            <option value="">Select Geo</option>
            {cities.map((city) => (
              <option key={city} value={city}>
                {city}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="bottom-section">
        <div className="left-section">
          <h2>Fixed Cost for First Year</h2>
          <div className="input-group">
            <label htmlFor="upfrontProductDevelopmentCost">
              Upfront Product Development Cost
            </label>
            <input
              type="number"
              name="upfrontProductDevelopmentCost"
              id="upfrontProductDevelopmentCost"
              value={formData.upfrontProductDevelopmentCost}
              onChange={handleChange}
            />
          </div>
          <div className="input-group">
            <label htmlFor="otherFixedAdminCost">Other Fixed Admin Cost</label>
            <input
              type="number"
              name="otherFixedAdminCost"
              id="otherFixedAdminCost"
              value={formData.otherFixedAdminCost}
              onChange={handleChange}
            />
          </div>
          <div className="input-group">
            <label htmlFor="upfrontImplementationCost">
              UpFront Implementation Cost
            </label>
            <input
              type="number"
              name="upfrontImplementationCost"
              id="upfrontImplementationCost"
              value={formData.upfrontImplementationCost}
              onChange={handleChange}
            />
          </div>
          <div className="input-group">
            <label htmlFor="ongoingProductDevelopmentCost">
              OnGoing Product Development Cost
            </label>
            <input
              type="number"
              name="ongoingProductDevelopmentCost"
              id="ongoingProductDevelopmentCost"
              value={formData.ongoingProductDevelopmentCost}
              onChange={handleChange}
            />
          </div>
          <div className="input-group">
            <label htmlFor="otherFixedInfrastructureCost">
              Other Fixed Infrastructure Cost
            </label>
            <input
              type="number"
              name="otherFixedInfrastructureCost"
              id="otherFixedInfrastructureCost"
              value={formData.otherFixedInfrastructureCost}
              onChange={handleChange}
            />
          </div>
          <div className="input-group">
            <label htmlFor="salesAndMarketingCost">
              Sales And Marketing Cost
            </label>
            <input
              type="number"
              name="salesAndMarketingCost"
              id="salesAndMarketingCost"
              value={formData.salesAndMarketingCost}
              onChange={handleChange}
            />
          </div>
          <div className="input-group">
            <label htmlFor="otherCost1">Extra_Cost_Space1</label>
            <input
              type="number"
              name="otherCost1"
              id="otherCost1"
              value={formData.otherCost1}
              onChange={handleChange}
            />
          </div>
          <div className="input-group">
            <label htmlFor="otherCost2">Extra_Cost_Space2</label>
            <input
              type="number"
              name="otherCost2"
              id="otherCost2"
              value={formData.otherCost2}
              onChange={handleChange}
            />
          </div>

          {/* Add remaining input fields */}
        </div>
        <div className="right-section">
          <h2>Variable Cost for first Year</h2>
          <div className="input-group">
            <label htmlFor="infrastructureCostPerUserPerYear">
              Infrastructure Cost Per User/Per Year
            </label>
            <input
              type="number"
              name="infrastructureCostPerUserPerYear"
              id="infrastructureCostPerUserPerYear"
              value={formData.infrastructureCostPerUserPerYear}
              onChange={handleChange}
            />
          </div>
          <div className="input-group">
            <label htmlFor="supportCostPerUserPerYear">
              Support Cost Per User/Per Year
            </label>
            <input
              type="number"
              name="supportCostPerUserPerYear"
              id="supportCostPerUserPerYear"
              value={formData.supportCostPerUserPerYear}
              onChange={handleChange}
            />
          </div>
          <div className="input-group">
            <label htmlFor="onboardingCostPerUserPerYear">
              OnBoarding Cost Per User/Per Year
            </label>
            <input
              type="number"
              name="onboardingCostPerUserPerYear"
              id="onboardingCostPerUserPerYear"
              value={formData.onboardingCostPerUserPerYear}
              onChange={handleChange}
            />
          </div>
          <div className="input-group">
            <label htmlFor="incrementalSalesAndMarketingCostPerYear">
              Incremental Sales And Marketing Cost Per Year
            </label>
            <input
              type="number"
              name="incrementalSalesAndMarketingCostPerYear"
              id="incrementalSalesAndMarketingCostPerYear"
              value={formData.incrementalSalesAndMarketingCostPerYear}
              onChange={handleChange}
            />
          </div>

          <div className="input-group">
            <label htmlFor="otherCost3">Extra_Cost_Space3</label>
            <input
              type="number"
              name="otherCost3"
              id="otherCost3"
              value={formData.otherCost3}
              onChange={handleChange}
            />
          </div>
          <div className="input-group">
            <label htmlFor="otherCost4">Extra_Cost_Space4</label>
            <input
              type="number"
              name="otherCost4"
              id="otherCost4"
              value={formData.otherCost4}
              onChange={handleChange}
            />
          </div>
          {/* Add remaining input fields */}
        </div>
      </div>
      <div className="table-section">
        <table>
          <thead>
            <tr>
              <th>YOY% Change</th>
              <th>Y1-Y2</th>
              <th>Y2-Y3</th>
              <th>Y3-Y4</th>
              <th>Y4-Y5</th>
              <th>Y5-Y6</th>
            </tr>
          </thead>
          <tbody>
            <TableRow label="YOY% change in product development cost" />
            <TableRow label="YOY% change in admin cost" />
            <TableRow label="YOY% change in infrastructure cost" />
            <TableRow label="YOY% change in sales and marketing cost" />
            <TableRow label="YOY% change in other cost_1" />
            <TableRow label="YOY% change in other cost_2" />
            <TableRow label="YOY% change in onboarding cost" />
            <TableRow label="YOY% change in infrastructure or usage-based cost per user per year" />
            <TableRow label="YOY% change in implementation cost per user" />
            <TableRow label="YOY% change in support cost per user" />
            <TableRow label="YOY% change in incremental sales and marketing cost per user" />
            <TableRow label="YOY% change in other cost3" />
            <TableRow label="YOY% change in other cost4" />
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ProductReport;
