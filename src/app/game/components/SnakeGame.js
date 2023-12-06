"use client"
import { useState, useEffect } from 'react';
import style from '../../../styles/pages/game/SnakeGame/style.module.css'

const numRows = 20;
const numCols = 20;

const SnakeGame = () => {

  const generateFood = () => {
    const row = Math.floor(Math.random() * numRows);
    const col = Math.floor(Math.random() * numCols);
    return { row, col };
  };


  const initialSnake = [{ row: 10, col: 10 }];
  const [snake, setSnake] = useState(initialSnake);
  const [direction, setDirection] = useState('RIGHT');
  const [food, setFood] = useState(generateFood());
  const [gameOver, setGameOver] = useState(false);
  const [score, setScore] = useState(0);
  const [moved, setMoved] = useState(false);

  const resetGame = () => {
    setSnake(initialSnake);
    setDirection('RIGHT');
    setFood(generateFood());
    setGameOver(false);
    setScore(0);
  };

  useEffect(() => {
    const handleKeyPress = (e) => {
      switch (e.key) {
        case 'ArrowUp':
          if (direction !== 'DOWN' && !moved) setDirection('UP'), setMoved(true);
          break;
        case 'ArrowDown':
          if (direction !== 'UP' && !moved) setDirection('DOWN'), setMoved(true);
          break;
        case 'ArrowLeft':
          if (direction !== 'RIGHT' && !moved) setDirection('LEFT'), setMoved(true);
          break;
        case 'ArrowRight':
          if (direction !== 'LEFT' && !moved) setDirection('RIGHT'), setMoved(true);
          break;
        default:
          break;
      }
    };




    const moveSnake = () => {
      if (gameOver) return;

      const newSnake = [...snake];
      const head = { ...newSnake[0] };

      switch (direction) {
        case 'UP':
          head.row -= 1;
          setMoved(false);
          break;
        case 'DOWN':
          head.row += 1;
          setMoved(false);
          break;
        case 'LEFT':
          head.col -= 1;
          setMoved(false);
          break;
        case 'RIGHT':
          head.col += 1;
          setMoved(false);
          break;
        default:
          break;
      }

      if (checkCollision(head)) {
        setGameOver(true);
        return;
      }

      newSnake.unshift(head);

      if (head.row === food.row && head.col === food.col) {
        setFood(generateFood());
        setScore((prevScore) => prevScore + 1);
      } else {
        newSnake.pop();
      }

      setSnake(newSnake);
    };

    const checkCollision = (head) => {
      return (
        head.row < 0 ||
        head.row >= numRows ||
        head.col < 0 ||
        head.col >= numCols ||
        snake.some((segment) => segment.row === head.row && segment.col === head.col)
      );
    };


    const gameLoop = setInterval(moveSnake, 200);

    window.addEventListener('keydown', handleKeyPress);

    return () => {
      clearInterval(gameLoop);
      window.removeEventListener('keydown', handleKeyPress);
    };
  }, [snake, direction, food, gameOver]);

  const className = gameOver ? style.fieldRed : style.field ;

  return (
    

    <div className={style.wrapper}>
      <h1>Snake Game</h1>
      <p>Score: {score}</p>
      <div className={className}>
        {Array.from({ length: numRows }, (_, rowIndex) => (
          <div key={rowIndex} style={{ display: 'flex' }}>
            {Array.from({ length: numCols }, (_, colIndex) => (
              <div className={style.square}
                key={colIndex}
                // style={{
                //   width: '20px',
                //   height: '20px',
                //   border: '1px solid #ccc',
                //   position: 'relative',
                // }}
              >
                {snake[0].row === rowIndex && snake[0].col === colIndex && (
                  <img
                    src="/images/head.png"
                    alt="Snake Head"
                    style={{
                      width: '100%',
                      height: '100%',
                      borderRadius: '50%', 
                      transform: `rotate(${getRotation()}deg)`,
                    }}
                  />
                )}
                {snake.slice(1).some((segment) => segment.row === rowIndex && segment.col === colIndex) && (
                  <div style={{ 
                    // backgroundColor: '#B7D569',
                    background: "radial-gradient(#B7D569, #567F1B)",
                    borderRadius: '50%', 
                    width: '100%', 
                    height: '100%' }} />
                )}
                {food.row === rowIndex && food.col === colIndex && (
                  <div
                    style={{
                      backgroundImage: `url(/images/apple.png)`,
                      backgroundSize: 'cover',
                      width: '100%',
                      height: '100%',
                    }}
                  />
                )}
              </div>
            ))}
          </div>
        ))}
      </div>
      <div className={style.gameOver}>
        {gameOver && <p>Game Over!</p>}
      </div>      
      <div>
        <button className={style.button} onClick={resetGame}>Restart Game</button>
      </div>
    </div>


  );

  function getRotation() {
    switch (direction) {
      case 'UP':
        return 0;
      case 'DOWN':
        return 180;
      case 'LEFT':
        return -90;
      case 'RIGHT':
        return 90;
      default:
        return 0;
    }
  }
  
};

export default SnakeGame;