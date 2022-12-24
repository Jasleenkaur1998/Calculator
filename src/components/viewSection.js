import { Box } from '@mui/system'
import React from 'react'

export default function ViewSection() {
  return (
    <Box sx={{
        backgroundColor: '#3e3e3e',
        height: 200,
        width: 400,
        display: 'flex',
        justifyContent: 'flex-end',
        alignItems: 'flex-end'
    }}>
        <h1 style={{
            fontSize: 80,
            margin: 0,
            color: 'white'
        }}>
            0
        </h1>
    </Box>
  )
}
