// components/ErrorLogList.js
import React from 'react';
import style from '../../../../styles/pages/project05/log/ErrorLogList/style.module.css';

const ErrorLogList = ({ logs }) => {
  return (
    <div>
      <h2>Error Logs:</h2>
      <ul className={style.errorLogList}>
        {logs.map((log, index) => (
          <li key={index} className={style.errorLogItem}>
            <p>Error: {log.error}</p>
            <p>Message: {log.message}</p>
            <p>Timestamp: {log.timestamp}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ErrorLogList;
