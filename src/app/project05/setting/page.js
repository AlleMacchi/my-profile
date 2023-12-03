"use client"
import React, { useState }  from "react";
import style from '../../../styles/pages/project05/setting/style.module.css'

const dataArray = [
  { id: 1, name: "Item 1", price: 10.00 },
  { id: 2, name: "Item 2", price: 19.00 },
  { id: 3, name: "Item 3", price: 7.00 },
  { id: 4, name: "Item 4", price: 8.00 },
];




const Setting = () => {
  const [updatedArray, setUpdatedArray] = useState([...dataArray]);
  const [editedPrices, setEditedPrices] = useState({});

  const handleEditChange = (itemId, value) => {
    setEditedPrices((prev) => ({ ...prev, [itemId]: value }));
  };

  const updatePrice =  async (itemId) => {
    const newPrice = parseFloat(editedPrices[itemId]);
    if (!isNaN(newPrice)) {
      const updatedItems = updatedArray.map((item) =>
        item.id === itemId ? { ...item, price: newPrice } : item
      );
      setUpdatedArray(updatedItems);
    }
  };


  return (
    <div className={style.container}>
      <h1>Setting</h1>
      <ul>
        {updatedArray.map((item) => (
          <li key={item.id}>
            <strong>{item.name}</strong> - $
            <strong>{item.price}</strong>
            <input
              type="number"
              value={editedPrices[item.id] || item.price}
              onChange={(e) => handleEditChange(item.id, e.target.value)}
            />
            <button onClick={() => updatePrice(item.id)}>Confirm</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Setting;