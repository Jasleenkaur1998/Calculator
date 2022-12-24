import { Box } from '@mui/material'
import React from 'react'

export default function ButtonItem(props) {

  
  const doSomething = () => {
    if (props.type === 'otherActions') {
        if (props.value === 'AC') {
          props.changeTotalState(0);
          props.changeViewState('');
        } else {
          // props.change
        }
    } else if (props.type === 'button') {
      props.changeViewState(props.viewStateValue + ' ' + props.value)
    } else {
      props.changeViewState(props.viewStateValue + ' ' + props.value);
      
      if (props.value === '+') {
        props.mainTotal  = props.mainTotal + Number(props.changeTotalState);
      } else if (props.value === '-') {

      }
    }
  }
  

  return (
    <Box sx={{
      width: 50,
      height: 50,
      backgroundColor: '#3e3e3e',
      borderRadius: '10px',
      color: props.type === 'button' ? 'white' : props.type === 'action' ? 'red' : 'aqua',
      flexBasis: props.type === 'button' ? '30%' : props.type === 'action' ? '20%' : '45%'
    }}
      onClick={doSomething}
    >
      <h2 style={{
        fontSize: 30,
        margin: 0,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: "100%"
      }}>
        <span>{props.value}</span>
      </h2>
    </Box>
  )
}
