import React, { useContext, useState } from "react"
import { Link } from "react-router-dom"
import { useForm } from "../hooks/useForm"
import CNInputLabel from "../components/CNInputLabel"
import CNSelect from "../components/CNSelect"
import CNCheckboxGroup from "../components/CNCheckboxGroup"
import { MainContext } from "../MainContext"
import { validName, validEmail, validPhoneNumber, validNumber } from "../common/formValidators"

const options = [
    "Actively Applying",
    "Not open to offers",
    "Causally looking",
    "Not looking, but open to offers"
];

const workOptions = [
    {
        label: "Yes",
        value: true
    },
    {
        label: "No",
        value: false
    }
];

const mandatoryFields = ["firstName", "LastName", "email", "phone"]

const FormPanel = ({user = {}, type}) => {
    const [formSubmitted, setFormSubmitted] = useState(false);
    const {
        onChange,
        onBlur,
        getValue,
        state,
        formValid
    } = useForm(user);
    const inputProps = {
        onChange: onChange,
        onBlur: onBlur
    }
    const dispatch = useContext(MainContext);
   
    const onSubmit = (e) => {
        e.preventDefault();
        const formData = formValid(mandatoryFields);
        if(formData.valid) {
            dispatch({
                type: type,
                payload: formData.data,
                id: user.id
            });
            setFormSubmitted(true);
        }
    }
    return(
        <React.Fragment>
            {
                formSubmitted
                    ? (
                        <div>
                            <div>Form saved successfully</div>
                            <button><Link to="/">Ok</Link></button>
                        </div>
                    ) : (
                        <form onSubmit={onSubmit}>
                            <CNInputLabel
                                label="ID"
                                name= "id"
                                disabled={true}
                                value={getValue("id")}
                            />
                            <CNInputLabel
                                label="First Name"
                                name= "firstName"
                                value={getValue("firstName")}
                                validator={validName}
                                {...inputProps}
                            />
                            <CNInputLabel
                                label="Last Name"
                                name= "LastName"
                                value={getValue("LastName")}
                                validator={validName}
                                {...inputProps}
                            />
                            <CNInputLabel
                                label="Email Address"
                                name= "email"
                                value={getValue("email")}
                                validator={validEmail}
                                {...inputProps}
                            />
                            <CNInputLabel
                                label="Phone"
                                name= "phone"
                                value={getValue("phone")}
                                validator={validPhoneNumber}
                                {...inputProps}
                            />
                            <CNSelect
                                label="Seeking Job"
                                name="jobSeeking"
                                value={getValue("jobSeeking")}
                                options={options}
                                onChange={onChange}
                            />
                            <CNInputLabel
                                label="Age"
                                name= "age"
                                value={getValue("age")}
                                validator={validNumber}
                                {...inputProps}
                            />
                            <CNCheckboxGroup
                                label="Work Remotely"
                                name="workRemotely"
                                value={getValue("workRemotely")}
                                onChange={onChange}
                                items={workOptions} 
                            />
                            <CNInputLabel
                                label="Address"
                                name= "address"
                                type="textarea"
                                value={getValue("address")}
                                //validator={validPhoneNumber}
                                {...inputProps}
                            />
                            <button><Link to="/">Back</Link></button>
                            <input type="submit" value="Save" />
                        </form>
                    )
            }
        </React.Fragment>
        
    )
}

export default FormPanel;