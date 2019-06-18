import { useState, useCallback } from "react"


export const useInput = (name) => {
    const [ value, setValue ] = useState("");

    return {
        value,
        bind: {
            //name: name,
            type: "text",
            value,
            onChange: (e) => setValue(e.target.value),
        }
    };
}

// export const useForm = (initialState) => {
//     const [ formState, setFormState ] = useState(initialState);
//     const [ errors, setErrorState ] = useState([]);

//     const getValue = useCallback((key) => {
//         console.log(key);
//         return formState[key] || ""
//     }, [formState])

//     const setState = useCallback((key, value) => {
//         console.log(value)
//         setFormState({
//             ...formState,
//             [key]: value
//         })
//     }, [formState]);

//     const setErrors = useCallback((key, isvalid) => {
//         setErrorState(isvalid
//             ? errors.filter(o => o !== key)
//             : errors.includes(key)
//                 ? errors
//                 : [
//                     ...errors,
//                     key
//                 ]
//         )
//     }, [errors]);

//     const getErrorClass = useCallback((key) => {
//         return errors.includes(key) ? "error" : ""
//     }, [errors]);

//     const getInputProps = useCallback(() => {
//         return {
//             getValue: getValue,
//             onChange: setState,
//             onBlur: setErrors,
//             error: getErrorClass
//         }
//     }, [formState, errors])

//     return {
//         formState,
//         errors,
//         getValue: getValue,
//         onChange: setState,
//         onBlur: setErrors,
//         getErrorClass: getErrorClass,
//         // getValue: getValue,
//         // setState: setState,
//         // setErrors: setErrors,
//         // getErrorClass: getErrorClass,
//         //inputProps: getInputProps
//         // inputProps: {
//         //     getValue: getValue,
//         //     onChange: setState,
//         //     onBlur: setErrors,
//         //     error: getErrorClass
//         // }
//         bind: {
//             onChange: setState,
//             onBlur: setErrors,
//             //error: getErrorClass,
//         }
//     }
// }