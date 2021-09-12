import React, { useState } from 'react'
import First from './First'
import Second from './Second'
import Third from './Third'
import Fourth from './Fourth'
import Fifth from './Fifth'
import Last from './Last'
function AppBody()    {

    const [count, setCount] = useState(0)
    const [strVal, setStrVal] = useState([])
    const [nextName, setNextName] = useState('')
    const [displayedNames, setDisplayedNames] = useState([])
    const [isEmpty, setIsEmpty] = useState(false)

    let showSecond = () => {
        setCount(1)
    }

    let setNames = (textVal) => {
        if(textVal === '')  {
            setIsEmpty(true)
            return
        }
        //console.log(textVal)
        setStrVal(getNameList(textVal))
        showThird()
    }

    let showThird = () => {
        setCount(2)
    }

    let showFourth = () => {
        setCount(3)
    }

    let showFifth = () => {
        setCount(4)
    }

    let showLast = () => {
        setCount(5)
    }

    let getNameList = str => {
        let t1 = str.split('\n')
        let t2 = []
        let t3 = []
        for (let i = 0; i < t1.length; i++) {
            let element = t1[i];
            element = element.split(',')
            t2 = t2.concat(element)
        }
        for (let i = 0; i < t2.length; i++) {
            let trimmed = t2[i].trim()
            if(trimmed !== '') t3.push(trimmed)
        }
        //console.log(t2)
        //console.log(t3)
        return t3
    }

    var getNextName = () => {
        if(strVal.length === 0)  {
            setIsEmpty(false)
            setDisplayedNames([])
            setNextName('')
            setStrVal('')
            showLast()
            return
        }
        let ranInd = Math.floor(Math.random()*strVal.length)
        setNextName(strVal[ranInd])
        setDisplayedNames([...displayedNames, strVal[ranInd]])
        let names = strVal
        names.splice(ranInd, 1)
        setStrVal(names)
        showFourth()
    }

    switch (count) {
        case 1:
            return <Second isEmpty={isEmpty} setNames={setNames}/>
        case 2:  
            return <Third getNextName={getNextName} showFifth={showFifth}/>
        case 3:
            return <Fourth nextName={nextName} showThird={showThird}/>
        case 4:
            return <Fifth displayedNames={displayedNames} showThird={showThird}/>
        case 5:
            return <Last showSecond={showSecond}/>
        default:
            return <First showSecond={showSecond}/>;
    }
    
}

export default AppBody