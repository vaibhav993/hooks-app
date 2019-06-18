import React from "react"


const CNCheckbox  = React.memo(({ checked, onChange, id }) => {
    const inputProps = {};
    inputProps.onChange = (e) => {
        if(typeof onChange === "function") {
            onChange(id, e.target.checked)   
        }
    }
    //console.log("here")
    return(
        <input
            type="checkbox"
            checked={checked}
            {...inputProps}
        ></input>
    );
});

export default CNCheckbox;