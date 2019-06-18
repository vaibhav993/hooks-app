import React, { useReducer, useEffect, useMemo } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom"
import "./App.css";

import { MainContext } from "./MainContext"
import HireListPanel from "./containers/HireListPanel"
import AddUser from "./containers/AddUser"
import EditUser from "./containers/EditUser"

import combineReducers from "./common/combineReducers"
import rootReducers from "./reducers"
import { loadUsers } from "./actions"

function App() {
    const [ state, dispatch ] = combineReducers({
        selectedUsers: useReducer(rootReducers.selectedUsers, []),
        users: useReducer(rootReducers.users, [])
    });
    const {selectedUsers, users} = state;
    useEffect(() => {
        loadUsers(dispatch);
    }, []);

    return (
        <div className="App">
            <BrowserRouter>
                <MainContext.Provider value={dispatch}>
                    <Route exact path="/" render={() => <HireListPanel users={users} selectedUsers={selectedUsers}/>} />
                    <Route path="/edit" render={() => <EditUser user={users.find(o => o.id === selectedUsers[0] || "")}/>} />
                    <Route path="/add" component={AddUser} />
                </MainContext.Provider>
            </BrowserRouter>
        </div>
    );
}

export default App;
