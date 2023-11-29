"use client"
import React, { useState } from "react";
import style from '../../../../styles/pages/project05/menu/style.module.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faChartLine,
  faExclamationTriangle,
  faFileCode,
  faGear,
} from "@fortawesome/free-solid-svg-icons";
// eslint-disable-next-line no-lone-blocks
{
  /*https://fontawesome.com/search?q=sett&o=r&s=thin */
}

function Menu() {
  const [isActive, setIsActive] = useState(false);

  const handleClick = (event) => {
    // 👇️ toggle isActive state on click
    setIsActive((current) => !current);
  };

  return (
    <>
      <div className={`${style.menu_container} ${isActive ? style.open : ''}`}>
        <div className={style.menu_semi_circle_outer}></div>
        <div className={style.menu_semi_circle_inner}></div>

        <div className={style.menu_main_button} onClick={handleClick}>
          Menu
        </div>
        <div className={style.menu_outer_circle_main_button}></div>
        <div className={style.menu_outer_circle_external_main_button}></div>

        <div className={style.site_title}>
          <a href='/project05' className={` ${style.menu_secondary_button} ${style.menu_page_1}`}>
            <div className={style.menu_outer_circle_secondary_button}></div>
            <i>
              <FontAwesomeIcon icon={faHome} />
            </i>
            <div className={style.menu_secondary_button_title}>Home</div>
          </a>
        </div>

        <div>
          <a href='/project05/log' className={` ${style.menu_secondary_button} ${style.menu_page_2}`}>
            <div className={style.menu_outer_circle_secondary_button}></div>
            <i>
              <FontAwesomeIcon icon={faFileCode} />
            </i>
            <div className={style.menu_secondary_button_title}>Logs</div>
          </a>
        </div>

        <div>
          <a  href='/project05/charts' className={`${style.menu_secondary_button} ${style.menu_page_3}`}>
            <div className={style.menu_outer_circle_secondary_button}></div>
            <i>
              <FontAwesomeIcon icon={faChartLine} />
            </i>
            <div  className={style.menu_secondary_button_title}>Chart</div>
          </a>
        </div>

        <div>
          <a href='/project05/alarms' className={ `${style.menu_secondary_button}  ${style.menu_page_4}`}>
            <div className={style.menu_outer_circle_secondary_button}></div>
            <i>
              <FontAwesomeIcon icon={faExclamationTriangle} />
            </i>
            <div  className={style.menu_secondary_button_title}>Alarms</div>
          </a>
        </div>

        <div>
          <a href='/project05/setting' className={`${style.menu_secondary_button} ${style.menu_page_5}`}>          
            <div className={style.menu_outer_circle_secondary_button}></div>
            <i>
              <FontAwesomeIcon icon={faGear} />              
            </i>
            <div className={style.menu_secondary_button_title}>Setting</div>
          </a>
        </div>
      </div>
    </>
  );
}


export default Menu;
