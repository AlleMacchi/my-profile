/* eslint-disable no-lone-blocks */
import annotations from '../../../data/Position3D/annotations.json';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import style from '../../../styles/pages/project05/main/style.module.css'

function ButtonHomeView({gotoView}) {
    return (
    <div id={style.annotationsPanel}>
        <button key={0} className={style.annotationButton} onClick={() => gotoView(0)}>
        <i><FontAwesomeIcon icon={require("@fortawesome/free-solid-svg-icons")[annotations[0].icon]}/></i>
          {' ' + annotations[0].title} 
        </button>
    </div>
    )
  }

  export default ButtonHomeView;