import React from 'react'

const Menu = ({ setView }) => {
    return (
        <>
            <div>Menu</div>
            <button onClick={()=> setView(true)}>Jugar</button>
        </>
    )
}

export default Menu