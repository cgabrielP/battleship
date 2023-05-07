import React, { useRef, useState } from 'react'
import "../css/Table.css"
const Table = () => {
    const [rotation, setRotation] = useState(0)
    const optionContainer = useRef(null)
    const flip = () => {
        const shipTypes = Array.from(optionContainer.current.children)
        //declarar nueva variable para que el valor no se quede un paso atras
        const newRotation = rotation === 0 ? 90 : 0;
        setRotation(newRotation);
        shipTypes.forEach(shipType => shipType.style.transform = `rotate(${newRotation}deg)`);
    }


    return (
        <>
            <div>Table</div>
            <div className="option-container" ref={optionContainer}>
                <div className='destroyer destroyer-preview' draggable="true"></div>
                <div className='submarine-preview submarine' draggable="true"></div>
                <div className='cruiser-preview cruiser' draggable="true"></div>
                <div className='battleship-preview battleship' draggable="true"></div>
                <div className='carrier-preview carrier' draggable="true"></div>
            </div>
            <button onClick={flip}>Flip</button>
        </>
    )
}

export default Table