import { TextField } from '@mui/material'
import React from 'react'

const UTextfield1 = ({children, styles}) => {
  return (
    <TextField style={{
        background:"white",
        height:"30px",  
        ...styles,
    }} 
    variant='standard'
    />
       

  )
}

export default UTextfield1