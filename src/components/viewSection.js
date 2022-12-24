import { Box } from '@mui/system'
import React from 'react'

export default function ViewSection(props) {
    return (
        <Box sx={{
            backgroundColor: '#3e3e3e',
            height: 200,
            width: 400,
            display: 'flex',
            justifyContent: 'flex-end',
            alignItems: 'flex-end',
            flexDirection: 'column'
        }}>
            <div>
                <h2 style={{ color: 'aqua', margin: 0, padding: 20 }}>{props.viewStateValue}</h2>
            </div>

            <h1 style={{
                fontSize: 80,
                margin: 0,
                color: 'white'
            }}>
                {props.mainTotal}
            </h1>
        </Box>
    )
}
