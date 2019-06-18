
const selectedUsers = (state, action) => {
    switch(action.type) {
        case "SELECT_USER": return [...state, action.id]
        case "DESELECT_USER": return state.filter(o => o !== action.id)
        case "SELECT_ALL": {
            console.log(action)
            return action.ids;
        }
        case "DESELECT_ALL": return []
        default: return state;
    }
}

const users = (state, action) => {
    switch(action.type) {
        case "USERS_LOADED": return [
            ...state,
            ...action.users
        ]
        case "ADD_USER": return [
            ...state,
            action.payload
        ]
        case "EDIT_USER": return state.map(user => user.id === action.id
            ? action.payload
            : user)
        case "DELETE_USER": return state.filter(user => !action.ids.includes(user.id))
        default:
            return state;
    }
}

export default {
    selectedUsers,
    users
};