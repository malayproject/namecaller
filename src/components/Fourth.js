import React, {useState} from 'react'

function Fourth(props) {

    return (
        <div className="Fourth" id="Fourth">
            <h4>You are next:</h4>
            <span className="nextName" id="nextName">{props.nextName}</span>
            <button className="btn okBtn1" id="okBtn1" onClick={props.showThird}>Back</button>
        </div>
    )
}

export default Fourth
