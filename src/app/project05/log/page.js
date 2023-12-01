"use client"
import React, {useState} from "react";
import style from '../../../styles/pages/project05/log/style.module.css';
import ErrorLogList from './components/ErrorLogList';
import generateErrorLogs from './components/generateErrorLogs';

const simulatedErrorLogs = [
    { error: 'SyntaxError', message: 'Unexpected token', timestamp: '2023-01-01T12:34:56Z' },
    { error: 'TypeError', message: 'Cannot read property', timestamp: '2023-01-02T09:45:30Z' },
    // Add more simulated error logs as needed
  ];

export default function Log(){
    const [searchTerm, setSearchTerm] = useState('');
    const allLogs = generateErrorLogs();
    const filteredLogs = allLogs.filter(log =>
      JSON.stringify(log).toLowerCase().includes(searchTerm.toLowerCase())
    );


    return(       
        <div className={style.container} >
            <h1>Error Log Viewer</h1>
            <input
                type="text"
                placeholder="Search error logs"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
            />
            <ErrorLogList logs={filteredLogs} />    
        </div>
        )
}
