import React, {useState} from 'react'

function Fifth(props) {

const getListJSX = () => {
    let str = []
    props.displayedNames.forEach((elem, ind) => {
        str.push(<li key={ind}>{elem}</li>)
    });
    return (
        <ol>{str}</ol>
    )
}

    return (
        <div className="Fifth" id="Fifth">
            <h4>Names displayed:</h4>
            <div className="displayedNamesDiv" id="displayedNamesDiv">{getListJSX()}</div>
            <button className="btn okBtn2" id="okBtn2" onClick={props.showThird}>Back</button>
        </div>
    )
}

export default Fifth
