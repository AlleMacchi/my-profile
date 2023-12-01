const generateErrorLogs = () => {
    const errorLogs = [];
  
    for (let i = 0; i < 100; i++) {
      const errorTypes = ['SyntaxError', 'TypeError', 'ReferenceError'];
      const messages = ['Unexpected token', 'Cannot read property', 'Undefined variable','Alarm Motor Hp Pump','Alarm Motor Hardner Pump','Alarm Valve Hp Pump','Alarm Valve injector 01','Alarm Valve injector 02','Alarm Valve injector 03','Alarm Valve injector 04','Alarm Valve injector 05'];
      const randomErrorType = errorTypes[Math.floor(Math.random() * errorTypes.length)];
      const randomMessage = messages[Math.floor(Math.random() * messages.length)];
  
      const log = {
        error: randomErrorType,
        message: randomMessage,
        timestamp: new Date().toISOString(),
      };
  
      errorLogs.push(log);
    }
  
    return errorLogs;
  };
  
  export default generateErrorLogs;