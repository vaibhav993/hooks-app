import React, { useState, useCallback } from "react"
import CNCheckbox from "./CNCheckbox"

const CNTableHeader = React.memo(({ withCheckbox, dispatch, rows, headers}) => {
    const [value, setValue] = useState(false);
    const onChange = useCallback((id, checked) => {
        setValue(checked);
        dispatch({
            type: checked ? "SELECT_ALL" : "DESELECT_ALL",
            ids: rows.map(row => row.id)
        })
    }, [rows]);
    return (
        <tr>
            {withCheckbox && (
                <th>
                    <CNCheckbox
                        id="select all"
                        checked={value}
                        onChange={onChange}
                    />
                </th>
            )}
            {
                headers.map((header) => (
                    <th key={header}>{header}</th>
                ))
            }
        </tr>
    );
});

const CNTabelRows = React.memo(({ withCheckbox, dispatch, rows, selectedRows }) => {
    const onChange = useCallback((id, checked) => {
        dispatch({
            type: checked ? "SELECT_USER": "DESELECT_USER",
            id: id 
        })
    }, []);
    return (
        rows.map((row) => (
            <tr key={row.id}>
                {withCheckbox && (
                    <td>
                        <CNCheckbox
                            id={row.id}
                            checked={selectedRows.includes(row.id)}
                            onChange={onChange}
                        />
                    </td>
                )}
                {Object.values(row).map((cell, index) => (
                    <td key={`${row.id}-${index}`}>{cell}</td>
                ))}
            </tr>
        ))
    );
})

const CNTable  = React.memo(({ headers, rows, selectedRows, withCheckbox, dispatch }) => {
    return(
        <table className="table table-bordered">
            <thead>
                <CNTableHeader
                    withCheckbox={withCheckbox}
                    dispatch={dispatch}
                    rows={rows}
                    headers={headers}
                />
            </thead>
            <tbody>
                <CNTabelRows
                    withCheckbox={withCheckbox}
                    dispatch={dispatch}
                    rows={rows}
                    selectedRows={selectedRows}
                />
            </tbody>
        </table>
    )
});

export default CNTable;