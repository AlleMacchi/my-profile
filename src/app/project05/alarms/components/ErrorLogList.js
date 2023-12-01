// components/ErrorLogList.js
import React from 'react';
import style from '../../../../styles/pages/project05/alarms/ErrorLogList/style.module.css';

const ErrorLogList = ({ logs }) => {
  return (
    <div>
      <ul className={style.errorLogList}>
        {logs.map((log, index) => (
          <li key={index} className={style.errorLogItem}>
            <p>{log.error}</p>
            <p>{log.message}</p>
            <p>{log.timestamp}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ErrorLogList;
