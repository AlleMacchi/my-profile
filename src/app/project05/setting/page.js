"use client"
import React, { useState }  from "react";
import style from '../../../styles/pages/project05/setting/style.module.css'
import generateSettingList from './componentns/generateSettingList';


const dataArray = [
  { id: 1, name: "Motor Hp speed", value: 10.00 },
  { id: 2, name: "Valve HP delay", value: 19.00 },
  { id: 3, name: "Motor Hardner speed", value: 7.00 },
  { id: 4, name: "Valve Hardner delay", value: 8.00 },
];




const Setting = () => {
  const [updatedArray, setUpdatedArray] = useState([...generateSettingList()]);
  const [editedvalues, setEditedvalues] = useState({});


  const [searchTerm, setSearchTerm] = useState('');
  const allLogs = updatedArray;
  const filteredLogs = allLogs.filter(log =>
    JSON.stringify(log).toLowerCase().includes(searchTerm.toLowerCase())
  );



  const handleEditChange = (itemId, value) => {
    setEditedvalues((prev) => ({ ...prev, [itemId]: value }));
  };

  const updatevalue =  async (itemId) => {
    const newvalue = parseFloat(editedvalues[itemId]);
    if (!isNaN(newvalue)) {
      const updatedItems = updatedArray.map((item) =>
        item.id === itemId ? { ...item, value: newvalue } : item
      );
      setUpdatedArray(updatedItems);
    }
  };


  return (
    <>
    <div className={style.container}>
      <h1>Setting</h1>

      <input
          type="text"
          placeholder="Search setting"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
      />
      <div className={style.titleList}>
          <h2>Type</h2>
          <h2>Actual Value</h2>
          <h2>New Value</h2>
          <h2>Confirm</h2>
      </div>
      <div className={style.dataList}>
        <div>
          <ul className={style.errorLogList}>
            {filteredLogs.map((item) => (
              <li key={item.id} className={style.errorLogItem}>
                <div className={style.TypeItem}><strong>{item.name}: </strong></div>
                <div><strong>{item.value}</strong></div>
                <div >
                  <input className={style.InputItem}
                    type="number"
                    value={editedvalues[item.id] || item.value}
                    onChange={(e) => handleEditChange(item.id, e.target.value)}
                  />
                </div>
                <div><button className={style.button} onClick={() => updatevalue(item.id)}>Confirm</button></div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
    <div className={style.footer}>
    </div>  
    </>
  );
};

export default Setting;