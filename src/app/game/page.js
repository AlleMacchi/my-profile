import style from '../../styles/pages/game/style.module.css';
import SnakeGame from './components/SnakeGame'

export default function Game(){
  return (
    <div className={style.container} >
      <div className={style.main}>
          <SnakeGame />
      </div>
    </div>
  )
}


