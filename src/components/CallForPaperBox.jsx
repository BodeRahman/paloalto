import React from 'react'
import Button from './Button'

const CallForPaperBox = (props) => {
    return (
        <div className="CallForPaperBox">
            <div>
            <div className="description">{props.description}</div>
            <Button text={props.text}/>
            </div>
        </div>
    )
}
 
export default CallForPaperBox;