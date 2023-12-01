"use client"
import React, {useState} from "react";
import style from '../../../styles/pages/project05/log/style.module.css';
import ErrorLogList from './components/ErrorLogList';
import generateErrorLogs from './components/generateErrorLogs';

export default function Log(){
    const [searchTerm, setSearchTerm] = useState('');
    const allLogs = generateErrorLogs();
    const filteredLogs = allLogs.filter(log =>
      JSON.stringify(log).toLowerCase().includes(searchTerm.toLowerCase())
    );


    return(      
        <>
        <div className={style.container} >
            <h1>Log Viewer</h1>
            <input
                type="text"
                placeholder="Search logs"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
            />
            <div className={style.titleList}>
                <h2>Type</h2>
                <h2>Message</h2>
                <h2>Time</h2>
            </div>
            <div className={style.dataList}>
                    <ErrorLogList logs={filteredLogs} /> 
            </div>
        </div>
        <div className={style.footer}>
        </div>  
        </> 
        )
}
