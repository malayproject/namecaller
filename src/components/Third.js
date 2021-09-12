import React from 'react'

function Third(props) {
    return (
        <div className="Third" id="Third">
            <div className="showNext general btn" id="showNext" onClick={props.getNextName}>
                Show next name
            </div>
            <div className="showDisplayed general btn" id="showDisplayed" onClick={props.showFifth}>
                Show displayed names
            </div>
        </div>
    )
}

export default Third
