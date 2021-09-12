import React, {useState} from 'react'

function Second(props) {

    const [textVal, setTextVal] = useState('')
    const handleChange = e => {
        setTextVal(e.target.value)
        //console.log(textVal)
    }

    return (
        <div className="Second" id="Second">
            <h4 className={props.isEmpty? 'errMsg' : 'errMsg hidden'} id="errMsg">no names added</h4>
            <textarea name="nameList" className="nameList" id="nameList" autoFocus cols="40" rows="10" placeholder="add comma separated names..." value={textVal} onChange={handleChange}></textarea>
            <button className="btn submitBtn" id="submitBtn" onClick={() => props.setNames(textVal)}>Submit</button>
        </div>
    )
}

export default Second
