import React from "react";
import { useState } from 'react';
import style from '../../../../styles/pages/project05/AnalogValue/style.module.css';

function AnalogValue(props) {
  // let value = props.value;
  const [value, setvalue] = useState(40);
  let unit = props.unit;
  let title = props.title;
  let WaringThreshold = props.warn;
  let AlarmThreshold = props.alm;

  // Initialize variables
  let Style;
  let hasThresholds;
  let degree = (360 * value) / 100;
  let degreeWar = (360 * WaringThreshold) / 100;
  let degreeAlm = (360 * AlarmThreshold) / 100;
  let degreeWarStart = (360 * WaringThreshold) / 100 - 10;
  let degreeAlmStart = (360 * AlarmThreshold) / 100 - 10;
  let classValue = "AnalogValue-value";

  // Style colors
  const OneColorStyle = {
    background:
      "conic-gradient(var(--light-blue) 0deg, var(--light-blue) " +
      degree +
      "deg" +
      ",#3d3d3d " +
      degree +
      "deg, #3d3d3d 270deg)",
  };
  const WarningColorStyle = {
    background:
      "conic-gradient(var(--light-blue) 0deg, var(--light-blue) " +
      degreeWarStart +
      "deg" +
      ",var(--yellow) " +
      degreeWar +
      "deg,var(--yellow) " +
      degree +
      "deg" +
      ",#3d3d3d " +
      degree +
      "deg, #3d3d3d 270deg)",
  };
  const AlarmColorStyle = {
    background:
      "conic-gradient(var(--light-blue) 0deg, var(--light-blue) " +
      degreeWarStart +
      "deg" +
      ",var(--yellow) " +
      degreeWar +
      "deg,var(--yellow) " +
      degreeAlmStart +
      "deg" +
      ",var(--red) " +
      degreeAlm +
      "deg,var(--red) " +
      degree +
      "deg" +
      ",#3d3d3d " +
      degree +
      "deg, #3d3d3d 270deg)",
  };

  // Check If I have a Threshold
  if (WaringThreshold === 0 && AlarmThreshold === 0) {
    hasThresholds = false;
  } else {
    hasThresholds = true;
  }

  // Pass the correct progress color style for the return function
  if (hasThresholds) {
    switch (true) {
      case value >= 0 && value < WaringThreshold:
        Style = OneColorStyle;
        break;
      case value >= WaringThreshold && value < AlarmThreshold:
        Style = WarningColorStyle;
        break;
      case value >= AlarmThreshold:
        Style = AlarmColorStyle;
        break;
      default:
    }
  } else {
    Style = OneColorStyle;
  }

  // Check if Is Warning or Alarm
  if (hasThresholds) {
    if (value >= WaringThreshold && value < AlarmThreshold) {
      classValue = "AnalogValue_value_warn_active";
    } else if (value >= AlarmThreshold) {
      classValue = "AnalogValue_value_alarm_active";
    } else {
      classValue = "AnalogValue_value";
    }
  } else {
    classValue = "AnalogValue_value";
  }

  // Slide Bar
  

  const handleSliderChange = (event) => {
    setvalue(parseInt(event.target.value, 10));
  };

  return (
    <div id={style.AnalogValue_container}>
      <div id={style.AnalogValue_title}>
        <span id={style.AnalogValue_name}>{title}</span>
      </div>
      <div id={style.AnalogValue_circular_progress_bar}>
        <div id={style.AnalogValue_circle_outer}>
          <div id={style.AnalogValue_circle_color_progress} style={Style}>
            <div id={style.AnalogValue_circle_inner}>
              <div id={style.AnalogValue_text_container}>
                <span className={style[classValue]}>{value} </span>
                <span id={style.AnalogValue_unit}>{unit}</span>
              </div>

            </div>
          </div>
        </div>
      </div>
      <div id={style.SlideBar}>
      <input
        type="range"
        min="0"
        max="100"
        value={value}
        onChange={handleSliderChange}
      />
    </div>
    </div>
  );
}

export default AnalogValue;
