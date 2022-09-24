import axios from 'axios';
import { useState, createContext, useEffect } from 'react';

export const GifContext = createContext()
export const GifProvider = ({children}) => {
    const [data, setData] = useState([]);
    const [search, setSearch] = useState("")
    useEffect (()=> {
        axios.get(`https://api.giphy.com/v1/gifs/search?api_key=sfJoNIbYEOS4pmyNpQe5lT4FkLd6xmAg&q=$%7B${search}%7D&limit=30%27`).then(response => {
            setData(response.data.data);
        })
    },[ search])
    return(
        <GifContext.Provider value={{data, setSearch, search}}>
            {children}
        </GifContext.Provider>
    )
}