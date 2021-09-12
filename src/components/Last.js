import React from 'react'

function Last(props) {
    return (
        <div className='Last'>
            <div>All names displayed.</div>
            <button className='btn' onClick={props.showSecond}>Add Names</button>
        </div>
    )
}

export default Last
