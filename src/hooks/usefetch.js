import { useState, useEffect } from "react"


export const useFetch = (url) => {
    const [ data, setData ] = useState([]);

    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(usersData => setData(usersData))
            .catch(e => {
                console.log(e);
                return [];
            })
    }, [url])

    return [ data ];
}