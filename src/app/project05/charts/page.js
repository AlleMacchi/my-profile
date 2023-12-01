"use client"
import React, {useState} from "react";
import style from '../../../styles/pages/project05/charts/style.module.css'
import LineChart from "../components/LineChart/LineChart";

export default function Charts(){

    const InitialData =[
        {
            "key": 0,  
            "time": "12:01",
            "sp": 0,
            "pv": 0
        },
        {
            "key": 1,
            "time": "12:02",
            "sp": 0,
            "pv": 0
        },
        {
            "key": 2,
            "time": "12:03",
            "sp": 0,
            "pv": 0
        },
        {
            "key": 3,
            "time": "12:04",
            "sp": 0,
            "pv": 0
        },
        {
            "key": 4,
            "time": "12:05",
            "sp": 0,
            "pv": 0
        },
        {
            "key": 5,
            "time": "12:06",
            "sp": 0,
            "pv": 0
        },
        {
            "key": 6,
            "time": "12:07",
            "sp": 0,
            "pv": 0
        }
    ] 


    const optionData1 =[
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
    ] 

    const optionData2 =[
        {
            "key": 0,  
            "time": "13:01",
            "sp": 100,
            "pv": 10
        },
        {
            "key": 1,
            "time": "13:02",
            "sp": 100,
            "pv": 8
        },
        {
            "key": 2,
            "time": "13:03",
            "sp": 100,
            "pv": 108
        },
        {
            "key": 3,
            "time": "13:04",
            "sp": 100,
            "pv": 139
        },
        {
            "key": 4,
            "time": "13:05",
            "sp": 100,
            "pv": 65
        },
        {
            "key": 5,
            "time": "13:06",
            "sp": 100,
            "pv": 110
        },
        {
            "key": 6,
            "time": "13:07",
            "sp": 100,
            "pv": 100
        }
    ] 

    const [data, setData] = useState(InitialData)


    const [selectedOption1, setSelectedOption1] = useState(null);
  
    const options1 = [
      { value: 'Option1', label: 'Option 1' },
      { value: 'Option2', label: 'Option 2' },
      // Add more options as needed
    ];
  
    const handleOption1Change = (value) => {
        setSelectedOption1(value);
        if (value === 'Option1') {
            setData(optionData1);
        }else{setData(optionData2);}
      };
    
    return(       
    <div className={style.container} >
        <h1>Charts</h1>   

        <div className={style.wrapper}>
            <div className={style.selectionContainer}>
                <div className={style.selectionoption}>
                    <label>Option:</label>
                    <select value={selectedOption1 || ''} onChange={(e) => handleOption1Change(e.target.value)}>
                    <option value="" disabled>Select Options</option>
                    {options1.map((option) => (
                        <option key={option.value} value={option.value}>{option.label}</option>
                    ))}
                    </select>
                </div>

                <div>
                    <p>Selected Options: {selectedOption1 || 'None'}</p>
                </div>
            </div>


            <div className={style.chart}>
                <LineChart 
                    title=''
                    height="100%"
                    data={data}
                />
            </div>  
        </div>
        <div className={style.footer}>
        </div> 
    </div>
        )
}
