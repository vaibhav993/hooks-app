import React, { useState } from "react"


const CNInputLabel  = React.memo(({ label, type="text", name, disabled, onChange, onBlur, validator, ...bind }) => {
    const inputProps = {};
    const [ error, setError ] = useState("");
    inputProps.onChange = (e) => {
        if(typeof onChange === "function") {
            onChange(name, e.target.value)   
        }
    }
    inputProps.onBlur = (e) => {
        if(typeof validator !== "function")
            return;
        const isValid = validator(e.target.value);
        if(typeof onBlur === "function") {
            if(isValid) {
                setError("");
            }else {
                onBlur(name);
                setError("error");
            }
        }
    }
    console.log("in input");
    return(
        <div>
            <label>{label}</label>
            <input
                name={name}
                type={type}
                className={error}
                disabled={disabled}
                {...bind}
                {...inputProps}
            ></input>
        </div>
    );
});

export default CNInputLabel;