import React from "react"
import FormPanel from "./FormPanel"
import { getRandomID } from "../common/utils"

const AddUser = React.memo(() => {
    const user = {
        id: getRandomID()
    }
    return(
        <React.Fragment>
            <h2>Add details</h2>
            <FormPanel user={user} type="ADD_USER"/>
        </React.Fragment>
    );
});

export default AddUser;