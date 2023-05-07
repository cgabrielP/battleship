import React, { useEffect, useState } from 'react'
import '../css/Board.css'
import ReactDOMServer from 'react-dom/server';

const Board = () => {
  const [blocks, setBlocks] = useState([]);
  const [blocksPC, setBlocksPC] = useState([]);

  const createBlocks = () => {
    const newBlocks = [];
    for (let i = 0; i < 100; i++) {
      newBlocks.push(<div key={i} id={i} className='block'></div>);
    }
    setBlocks(newBlocks);
    setBlocksPC([...newBlocks]); // Creamos una copia independiente para los bloques de la computadora
  }

  const addShip = (ship) => {
    let randomBool = Math.random() < 0.5
    let isHorizontal = randomBool
    let randomStart = Math.floor(Math.random() * 100)

    let shipBlocks = []

    for (let i = 0; i < ship.length; i++) {
      if (isHorizontal) {
        shipBlocks.push(blocksPC[(randomStart) + i])
      } else {
        shipBlocks.push(blocksPC[randomStart + i * 10])
      }
    }
    console.log(shipBlocks);
    let newBlocksPC = [...blocksPC]; // Creamos una copia independiente para los bloques de la computadora
    shipBlocks.forEach(block => {
      if (block.props.className === 'block') {
        let newBlock = React.cloneElement(block, { className: `${block.props.className} ${ship.name}` });
        newBlocksPC[block.props.id] = newBlock;
      }
    });
    setBlocksPC(newBlocksPC);
    console.log(ReactDOMServer.renderToStaticMarkup(shipBlocks))
  }

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

  useEffect(() => {
    createBlocks();
  }, []);

  return (
    <>
      <div className='board-container'>
        <div className='game-board2' id="computer">{blocksPC}</div>
        <div className='game-board'>{blocks}</div>
        <button onClick={() => addShip(ships[4])}>testing</button>
      </div>
    </>
  )
}

export default Board
