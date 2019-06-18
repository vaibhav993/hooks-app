import React from "react"
import CNCheckbox from "./CNCheckbox"

const CNCheckboxGroup  = React.memo(({ name, label, value, onChange, items }) => {
    console.log("here")
    const change = (id, value) => {
        if(typeof onChange === "function") {
            const val = items.find(o => o.label === id).value
            onChange(name, val)   
        }
    }
    return(
        <div>
            <label>{label}</label>
            {
                items.map((item) => (
                    <div key={item.label}>
                        <label>{item.label}</label>
                        <CNCheckbox
                            id={item.label}
                            checked={item.value === value}
                            onChange={change}
                        />
                    </div>
                ))
            }
        </div>
    );
});

export default CNCheckboxGroup;