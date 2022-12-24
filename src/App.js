import './App.css';
import ButtonSection from './components/buttonSection';
import Box from '@mui/material/Box';
import ViewSection from './components/viewSection';
import { useState } from 'react';

function App() {


  let [viewState, setViewState ] = useState('');
  let [totalValue, setTotalValue] = useState(0);

  return (
    <Box
    id="main-container"
     sx={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh',
    }}>
      <Box id="calculator" sx={{
        width: 400,
        height: 600,
        backgroundColor: 'black',
      }}>
        <ViewSection viewStateValue={viewState} mainTotal={totalValue} />
        <ButtonSection mainTotal={totalValue} viewStateValue={viewState} changeViewState={setViewState} changeTotalState={setTotalValue} />
      </Box>
    </Box>
  );
}

export default App;
