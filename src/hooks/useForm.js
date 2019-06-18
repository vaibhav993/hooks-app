import { useReducer, useCallback } from "react"
import { omit } from "../common/utils"

const reducer = (state, action) => {
    switch(action.type){
        case "CHANGE": return {
            ...state,
            [action.key]: action.value
        }
        case "BLUR": return {
            ...state,
            errors: state.hasOwnProperty("errors")
                ? state.errors.includes(action.key)
                    ? state.errors
                    : [
                        ...state.errors,
                        action.key
                    ]
                : [action.key]
        }
    }
}
export const useForm = (initialState) => {
    const [state, dispatch] = useReducer(reducer, initialState);
    
    const onChange = useCallback((key, value) => {
        dispatch({
            type: "CHANGE",
            key: key, 
            value: value
        })
    }, []);
    
    const onBlur = useCallback((key) => {
        dispatch({
            type: "BLUR",
            key: key
        })
    }, []);

    const getValue = useCallback((key) => {
        return state.hasOwnProperty(key) ? state[key] : "";
    }, [state]);

    const getErrorClass = useCallback((key) => {
        return state.hasOwnProperty("errors") 
            ? state.errors.includes(key) ? "error" : "" 
            : "";
    }, [state]);

    const formValid = useCallback((mandatoryFields) => {
        let data = [],
        valid = false;
        if(state.hasOwnProperty("errors") && state.errors.length){
            valid = false;
        } else {
            mandatoryFields.forEach(field => {
                valid = !!getValue(field).trim();
            });
        }

        return {
            valid: valid,
            data: valid
                ? omit(state, "error")
                : []
        }
    }, [state])

    return {
        state,
        onChange,
        onBlur,
        getValue,
        getErrorClass,
        formValid
    }
}
