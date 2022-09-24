import { useState } from "react"
import { useContext } from "react"
import { GifContext } from "./context/GifContext"
import{ Button, Container, TextField }from '@mui/material'
import './App.css'
import { Box } from "@mui/system"

export const App = () => {
    const {data, setSearch} = useContext(GifContext)
    const [gifSearch, setGifSearch] = useState('')
   console.log(data);
   const handClick= (e) => {
       e.preventDefault()
       handleChange(e)
       setSearch(gifSearch)
   }
   const handleChange = (e) => {
    setGifSearch(e.target.value)
   }
    return (
      <Container>
         <Box mt="20px">
           <form onSubmit={(e)=>handClick(e)} style={{display:'flex'}}>
               <TextField placeholder="Gif" value={gifSearch} onChange={(e)=>handleChange(e)} />
               <Button>Search</Button>
           </form>
         <Box mt='100px' className="gifContainer">
         {data.map((el,i) => (
             <div key={i}>
                 <img alt="gif" height="300px" width="300px" src={el.images.original.url}/>
             </div>
         ))}
         </Box>
       </Box>
      </Container>
    )
}