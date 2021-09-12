import React from 'react'

function First(props) {
    return (
        <div className='First'>
            <button className='btn' onClick={props.showSecond}>Add Names</button>
        </div>
    )
}

export default First
