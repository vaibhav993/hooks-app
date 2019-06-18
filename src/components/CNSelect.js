import React from "react"


const CNCheckbox  = React.memo(({ name, label, value, onChange, options }) => {
    const inputProps = {};
    inputProps.onChange = (e) => {
        if(typeof onChange === "function") {
            onChange(name, e.target.value)   
        }
    }
    //console.log("here")
    return(
        <div>
            <label>{label}</label>
            <select
                value={value}
                {...inputProps}
            >
                {options.map((op, index) => (
                    <option key={index} value={op}>{op}</option>
                ))}
            </select>
        </div>
    );
});

export default CNCheckbox;