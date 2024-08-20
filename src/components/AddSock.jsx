import React, { useState } from 'react';

const AddSock = () => {
  // State to handle form inputs
  const [formData, setFormData] = useState({
    userId: '',
    size: 'Small',
    color: '',
    pattern: '',
    material: '',
    condition: 'New',
    forFoot: 'Left',
    waterResistant: false,
    padded: false,
    antiBacterial: false,
  });

  // Handle input changes
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    const timestamp = new Date().toISOString();
    const sockData = {
      userId: formData.userId,
      sockDetails: {
        size: formData.size,
        color: formData.color,
        pattern: formData.pattern,
        material: formData.material,
        condition: formData.condition,
        forFoot: formData.forFoot,
      },
      additionalFeatures: {
        waterResistant: formData.waterResistant,
        padded: formData.padded,
        antiBacterial: formData.antiBacterial,
      },
      addedTimestamp: timestamp,
    };

    try {
      const response = await fetch('https://ecs.the-sock-exchange.com/api/socks', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(sockData),
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      // Handle successful submission
      alert('Sock added successfully');
      setFormData({
        userId: '',
        size: 'Small',
        color: '',
        pattern: '',
        material: '',
        condition: 'New',
        forFoot: 'Left',
        waterResistant: false,
        padded: false,
        antiBacterial: false,
      });
    } catch (error) {
      // Handle errors
      console.error('Error:', error);
      alert('Failed to add sock');
    }
  };

  return (
    <div className="container">
      <h2>Add a New Sock</h2>
      <form className="p-3" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="userId">User ID</label>
          <input
            type="text"
            className="form-control"
            id="userId"
            name="userId"
            value={formData.userId}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="size">Size</label>
          <select
            className="form-control"
            id="size"
            name="size"
            value={formData.size}
            onChange={handleChange}
          >
            <option>Small</option>
            <option>Medium</option>
            <option>Large</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="color">Color</label>
          <input
            type="text"
            className="form-control"
            id="color"
            name="color"
            value={formData.color}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="pattern">Pattern</label>
          <input
            type="text"
            className="form-control"
            id="pattern"
            name="pattern"
            value={formData.pattern}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="material">Material</label>
          <input
            type="text"
            className="form-control"
            id="material"
            name="material"
            value={formData.material}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="condition">Condition</label>
          <select
            className="form-control"
            id="condition"
            name="condition"
            value={formData.condition}
            onChange={handleChange}
          >
            <option>Used</option>
            <option>New</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="forFoot">For Foot</label>
          <select
            className="form-control"
            id="forFoot"
            name="forFoot"
            value={formData.forFoot}
            onChange={handleChange}
          >
            <option>Left</option>
            <option>Right</option>
            <option>Both</option>
          </select>
        </div>
        <div className="row">
          <div className="form-check col">
            <input
              className="form-check-input"
              type="checkbox"
              id="waterResistant"
              name="waterResistant"
              checked={formData.waterResistant}
              onChange={handleChange}
            />
            <label className="form-check-label" htmlFor="waterResistant">
              Water Resistant
            </label>
          </div>
          <div className="form-check col">
            <input
              className="form-check-input"
              type="checkbox"
              id="padded"
              name="padded"
              checked={formData.padded}
              onChange={handleChange}
            />
            <label className="form-check-label" htmlFor="padded">
              Padded
            </label>
          </div>
          <div className="form-check col">
            <input
              className="form-check-input"
              type="checkbox"
              id="antiBacterial"
              name="antiBacterial"
              checked={formData.antiBacterial}
              onChange={handleChange}
            />
            <label className="form-check-label" htmlFor="antiBacterial">
              Anti Bacterial
            </label>
          </div>
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};

export default AddSock;
