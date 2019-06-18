import React, { useContext, useEffect, useState } from "react"
import { MainContext } from "../MainContext"
import CNTable from "../components/CNTable";
import { Link } from "react-router-dom"

export default React.memo(function HireListPanel({users, selectedUsers}) {
    const [ tabelHeaders, setTableHeaders ] = useState([]);
    const dispatch = useContext(MainContext);

    const rows = users.map((user) => {
        return {
            id: user.id,
            firstName: user.firstName,
            lastame: user.LastName,
            email: user.email,
            phone: user.phone
        }
    })

    useEffect(() => {
        console.log("called tabl eharder");
        setTableHeaders([
             "ID", "First Name", "Last Name", "Email", "Phone Number"
        ])
    }, []);

    return (
        <div className="hire-list-panel">
            <h3>Hire List</h3>
            <CNTable
                headers={tabelHeaders}
                rows={rows}
                withCheckbox={true}
                selectedRows={selectedUsers}
                dispatch={dispatch}
            />
            <div>
                <button><Link to="/add">Add</Link></button>
                <button><Link to="/edit">Edit</Link></button>
                <button onClick={e => dispatch({
                    type: "DELETE_USER",
                    ids: selectedUsers
                })}>Delete</button>
            </div>
        </div>
    )
});