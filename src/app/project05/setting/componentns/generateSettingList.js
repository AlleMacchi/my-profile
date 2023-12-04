const generateSettingList = () => {
    const errorLogs = [];
  
    for (let i = 0; i < 100; i++) {
      const idKey = i;
      const nameSetting = ['Motor Speed', 'Motor Warning Speed', 'Motor Alarm Speed','Valve Open Position', 'Valve Warning Position', 'Valve Alarm Position',];
      const valueSetting = [10, 20, 25,35,45,40,12,90,55,82,76];
      const randomName = nameSetting[Math.floor(Math.random() * nameSetting.length)] + ' ' + i;
      const randomValue = valueSetting[Math.floor(Math.random() * valueSetting.length)];
  
      const log = {
        id: idKey,
        name: randomName,
        value: randomValue,
      };
  
      errorLogs.push(log);
    }
  
    return errorLogs;
  };
  
  export default generateSettingList;