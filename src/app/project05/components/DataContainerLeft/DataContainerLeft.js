import style from '../../../../styles/pages/project05/main/DataContainerLeft/style.module.css'
import AnalogValue from '../AnalogValue/AnalogValue'
import BarChart from '../BarChart/BarChart'

import { useState, useEffect } from 'react';


function DataContainerLeft(){   

    const HpSpeedSL ={
        key: 0, 
        value:90,
        unit:"Hz",
        title:"HP Pump Speed",
        warn:60,
        alm:80
    };

    // Pressure Dynamic
    const initialData = [
    {
        "key": 0, 
        "name": "1",
        "main": 40.12,
        "aux": 24.25
    },
    {
        "key": 1, 
        "name": "2",
        "main": 80.12,
        "aux": 24.25
    },
    {
        "key": 2, 
        "name": "3",
        "main": 80.12,
        "aux": 24.25
    },
    {
        "key": 3, 
        "name": "4",
        "main": 80.12,
        "aux": 24.25
    },
    {
        "key": 4, 
        "name": "5",
        "main": 80.12,
        "aux": 24.25
    },
    {
        "key": 5, 
        "name": "6",
        "main": 80.12,
        "aux": 24.25
    },
    {
        "key": 6, 
        "name": "7",
        "main": 80.12,
        "aux": 24.25
    },
    {
        "key": 7, 
        "name": "8",
        "main": 80.12,
        "aux": 24.25
    },
    {
        "key": 8, 
        "name": "9",
        "main": 80.12,
        "aux": 24.25
    },
    {
        "key": 9, 
        "name": "10",
        "main": 80.12,
        "aux": 24.25
    }
]

const [data, setData] = useState(initialData);

useEffect(() => {
    const intervalId = setInterval(() => {
      setData((prevData) => {
        const newData = prevData.map((element, index) => {
          // Clone the element to avoid modifying the original array
          const newElement = { ...element };

          // Shift "main" and "aux" by one step
          if (index < prevData.length - 1) {
            newElement.main = prevData[index + 1].main;
            newElement.aux = prevData[index + 1].aux;
          } else {
            // For the last element, use random values
            newElement.main = Math.random() * (95 - 70) + 70;
            newElement.aux = Math.random() * (60 - 40) + 40;
          }

          return newElement;
        });

        return newData;
      });
    }, 1000);

    // Clean up the interval when the component unmounts
    return () => clearInterval(intervalId);
  }, []);

     // Pressure Dynamic
     const initialDataSecond = [
        {
            "key": 0, 
            "name": "1",
            "main": 40.12,
            "aux": 24.25
        },
        {
            "key": 1, 
            "name": "2",
            "main": 80.12,
            "aux": 24.25
        },
        {
            "key": 2, 
            "name": "3",
            "main": 80.12,
            "aux": 24.25
        },
        {
            "key": 3, 
            "name": "4",
            "main": 80.12,
            "aux": 24.25
        },
        {
            "key": 4, 
            "name": "5",
            "main": 80.12,
            "aux": 24.25
        },
        {
            "key": 5, 
            "name": "6",
            "main": 80.12,
            "aux": 24.25
        },
        {
            "key": 6, 
            "name": "7",
            "main": 80.12,
            "aux": 24.25
        },
        {
            "key": 7, 
            "name": "8",
            "main": 80.12,
            "aux": 24.25
        },
        {
            "key": 8, 
            "name": "9",
            "main": 80.12,
            "aux": 24.25
        },
        {
            "key": 9, 
            "name": "10",
            "main": 80.12,
            "aux": 24.25
        }
    ]
    
    const [dataSecond, setDataSecond] = useState(initialDataSecond);
    
    useEffect(() => {
        const intervalId = setInterval(() => {
          setDataSecond((prevData) => {
            const newData = prevData.map((element, index) => {
              // Clone the element to avoid modifying the original array
              const newElement = { ...element };
    
              // Shift "main" and "aux" by one step
              if (index < prevData.length - 1) {
                newElement.main = prevData[index + 1].main;
                newElement.aux = prevData[index + 1].aux;
              } else {
                // For the last element, use random values
                newElement.main = Math.random() * (95 - 70) + 70;
                newElement.aux = Math.random() * (60 - 40) + 40;
              }
    
              return newElement;
            });
    
            return newData;
          });
        }, 1000);
    
        // Clean up the interval when the component unmounts
        return () => clearInterval(intervalId);
      }, []);

    return(
        <div id={style.DataContainerLeft} className={style.DataContainer}>
            <h2> Dosing SL </h2>
            <div className={style.Widget_row}>
                <AnalogValue 
                    value={HpSpeedSL.value}
                    unit={HpSpeedSL.unit}
                    title={HpSpeedSL.title}
                    warn={HpSpeedSL.warn}
                    alm={HpSpeedSL.alm}
                />
            </div>
            <div className={style.Widget_row}>
            <BarChart 
                    title='Glue Inectors'
                    data={data}
                />
            </div>
            <div className={style.Widget_row}>
            <BarChart 
                    title='Hardner Inectors'
                    data={dataSecond}
                />
            </div>
        </div>
    )
}

export default DataContainerLeft;