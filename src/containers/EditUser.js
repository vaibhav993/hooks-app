import React from "react"
import FormPanel from "./FormPanel"

const EditUser = React.memo(({user}) => {
    return(
        <React.Fragment>
            <h2>Edit details</h2>
            <FormPanel user={user} type="EDIT_USER"/>
        </React.Fragment>
    );
});

export default EditUser;