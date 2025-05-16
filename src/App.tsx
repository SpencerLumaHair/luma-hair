import React from 'react';
import './App.css';
import { Box, Container, Typography } from '@mui/material';
import NavBar from './components/NavBar';

function App() {
  return (
    <Box sx={{ backgroundColor: 'background.default' }} >
      <NavBar />
      <Container>
        <Box sx={{ my: 2 }}>
          <Typography variant="h2" color="primary">
            Welcome to Luma Hair Studio
          </Typography>

          <Typography>
            {[...new Array(40)]
              .map(
                () => `Cras mattis consectetur purus sit amet fermentum.
Cras justo odio, dapibus ac facilisis in, egestas eget quam.
Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
Praesent commodo cursus magna, vel scelerisque nisl consectetur et.`,
              )
              .join('\n')}
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}

export default App;