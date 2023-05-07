import React, { useEffect, useState } from 'react'
import '../css/Board.css'
const Board = () => {
    const [blocks, setBlocks] = useState([]);

    const createBlocks = () => {
      const newBlocks = [];
      for (let i = 0; i < 100; i++) {
        newBlocks.push(<div key={i} id={i} className='block'></div>);
      }
      setBlocks(newBlocks);
    }
    useEffect(() => {
        createBlocks();addShip()
      }, []);

      class Ship {
        constructor(name, length) {
          this.name = name;
          this.length = length;
        }
      }
      
      const ships = [
        new Ship('destroyer', 2),
        new Ship('cruiser', 3),
        new Ship('submarine', 3),
        new Ship('battleship', 4),
        new Ship('carrier', 5)
      ];
      const addShip=()=>{
        let randomBool=Math.random()<0.5
        console.log(randomBool);
        let isHorizontal = randomBool
        let randomStart= Math.floor(Math.random()*100)
        console.log(randomBool)
    }
  
    return (
        <>
            <div className='board-container'>
                <div className='game-board'>{blocks}</div>
                <div className='game-board2'>{blocks}</div>
            </div>
        </>
    )
}

export default Board