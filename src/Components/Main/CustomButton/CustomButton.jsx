import React from 'react';
import './CustomButton.css'
const CustomButton = ({ clickHandler, isTrue = true,title = 'Add to cart' }) => {
    const btnBgClassName = isTrue ? "customBtnAdd" : "customBtnRemove";
    const btnClasses = [ "customBtn ", btnBgClassName ]

    return (
        <input 
        type="button" 
        value={title} 
        className={btnClasses.join(" ")} 
        onClick={
            clickHandler
        }
        /> 
    );
};

export default CustomButton;