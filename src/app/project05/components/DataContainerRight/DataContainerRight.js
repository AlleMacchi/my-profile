import style from '../../../../styles/pages/project05/main/DataContainerRight/style.module.css';
import AnalogValue from '../AnalogValue/AnalogValue';
import LineChart from '../LineChart/LineChart'

import { useState, useEffect } from 'react';


function DataContainerRight(){   

    const HpSpedCL ={
        key: 0, 
        value:60,
        unit:"Hz",
        title:"HP Pump Speed",
        warn:80,
        alm:85
    };


// Pressure Dynamic
const [data, setData] = useState([
    {
        "key": 0,  
        "time": "12:01",
        "sp": 100,
        "pv": 0
    },
    {
        "key": 1,
        "time": "12:02",
        "sp": 100,
        "pv": 28
    },
    {
        "key": 2,
        "time": "12:03",
        "sp": 100,
        "pv": 68
    },
    {
        "key": 3,
        "time": "12:04",
        "sp": 100,
        "pv": 109
    },
    {
        "key": 4,
        "time": "12:05",
        "sp": 100,
        "pv": 95
    },
    {
        "key": 5,
        "time": "12:06",
        "sp": 100,
        "pv": 100
    },
    {
        "key": 6,
        "time": "12:07",
        "sp": 100,
        "pv": 100
    }
  ])


  useEffect(() => {
    const intervalId = setInterval(() => {
      // Generate a random value between 90 and 100 for "pv"
      const newPv = Math.floor(Math.random() * (105 - 95 + 1) + 95);

      // Update the array, keeping the size constant
      setData((prevData) => {
        const newData = prevData.slice(1); // Remove the first element
        const lastKey = newData[newData.length - 1]?.key || 0;
        const newElement = {
          key: lastKey + 1,
          time: getCurrentTime(), // You can implement this function to get the current time
          sp: 100,
          pv: newPv,
        };
        return [...newData, newElement];
      });
    }, 1000);

    // Clean up the interval when the component unmounts
    return () => clearInterval(intervalId);
  }, []); // The empty dependency array ensures that the effect runs only once on mount

// Pressure Dynamic
const [dataSecond, setDataSecond] = useState([
    {
        "key": 0,  
        "time": "12:01",
        "sp": 100,
        "pv": 0
    },
    {
        "key": 1,
        "time": "12:02",
        "sp": 100,
        "pv": 28
    },
    {
        "key": 2,
        "time": "12:03",
        "sp": 100,
        "pv": 68
    },
    {
        "key": 3,
        "time": "12:04",
        "sp": 100,
        "pv": 109
    },
    {
        "key": 4,
        "time": "12:05",
        "sp": 100,
        "pv": 95
    },
    {
        "key": 5,
        "time": "12:06",
        "sp": 100,
        "pv": 100
    },
    {
        "key": 6,
        "time": "12:07",
        "sp": 100,
        "pv": 100
    }
  ])


  useEffect(() => {
    const intervalId = setInterval(() => {
      // Generate a random value between 90 and 100 for "pv"
      const newPv = Math.floor(Math.random() * (105 - 95 + 1) + 95);

      // Update the array, keeping the size constant
      setDataSecond((prevData) => {
        const newData = prevData.slice(1); // Remove the first element
        const lastKey = newData[newData.length - 1]?.key || 0;
        const newElement = {
          key: lastKey + 1,
          time: getCurrentTime(), // You can implement this function to get the current time
          sp: 100,
          pv: newPv,
        };
        return [...newData, newElement];
      });
    }, 1000);

    // Clean up the interval when the component unmounts
    return () => clearInterval(intervalId);
  }, []); // The empty dependency array ensures that the effect runs only once on mount

    return(
        <div id={style.DataContainerRight} className={style.DataContainer}>
            <h2> Dosing CL </h2>
            <div className={style.Widget_row}>
                <AnalogValue 
                    value={HpSpedCL.value}
                    unit={HpSpedCL.unit}
                    title={HpSpedCL.title}
                    warn={HpSpedCL.warn}
                    alm={HpSpedCL.alm}
                />
            </div>
            <div className={style.Widget_row}>
                <LineChart 
                    title='Glue Pressure'
                    data={data}
                />
            </div>
            <div className={style.Widget_row}>
                <LineChart 
                    title='Harder Pressure'
                    data={dataSecond}
                />
            </div>
        </div>
    )
}

// Function to get the current time in "HH:mm" format
function getCurrentTime() {
    const now = new Date();
    const hours = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');
    return `${hours}:${minutes}`;
  }

export default DataContainerRight;