const generateErrorLogs = () => {
    const errorLogs = [];
  
    for (let i = 0; i < 100; i++) {
      const errorTypes = ['Operator operation', 'Automatic operation', 'Unexpected operation'];
      const messages = ['Unexpected token', 'Cannot read property', 'Undefined variable','Start Motor Hp Pump','Start Motor Hardner Pump','Start Valve Hp Pump','Start Valve injector 01','Start Valve injector 02','Start Valve injector 03','Start Valve injector 04','Start Valve injector 05'];
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