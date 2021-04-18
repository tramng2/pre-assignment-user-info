import React, { useState, useEffect, createContext } from 'react'
import axios from 'axios';

export const DataContext = createContext();


export const DataProvider = ({children}) => {
    const [data, setData] = useState([])
    useEffect(() => {
        const getData = async () => {
            const {data} = await axios.get(`https://jsonplaceholder.typicode.com/users`)
            setData(data)
        }
        getData()
    }, [])
    return (
        <DataContext.Provider value={[data, setData]}>
            {children}
        </DataContext.Provider>
    )
}