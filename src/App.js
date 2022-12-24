import logo from './logo.svg';
import './App.css';
import ButtonSection from './components/buttonSection';
import Box from '@mui/material/Box';
import ViewSection from './components/viewSection';

function App() {
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
        <ViewSection />
        <ButtonSection />
      </Box>
    </Box>
  );
}

export default App;
