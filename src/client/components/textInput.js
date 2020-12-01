import React from 'react';

function TextInput (props) {
    return (
        <div className='basket-input'>                
            <p>{props.text[props.info]}</p>
            <input className='text-input' value={props.value[props.info]} onChange={props.onChange} placeholder={props.text[props.infoMessage]}></input>  
        </div>
    )
}

export default TextInput;