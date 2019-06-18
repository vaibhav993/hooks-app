import { get } from "../common/api"

export const loadUsers = (dispatch) => {
    get("./assignment.json")
        .then(users => {
            dispatch({
                type: "USERS_LOADED",
                users: users.map((user, index) => ({
                    ...user,
                    id: index+1
                }))
            })
        }
    )
}