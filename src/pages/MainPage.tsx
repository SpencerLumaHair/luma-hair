import React from 'react';
import '../App.css';
import { Box, Button, Typography } from '@mui/material';
import logo from '../assets/Logo.png'
import AppColors from '../assets/colors';

function MainPage() {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh', backgroundColor: 'background.default' }} >
      <Box sx={{ my: 2 }}>
        <Box sx={{ textAlign: 'center' }}>
          <Box
            component="img"
            src={logo}
            alt="Luma Hair Studio Logo"
            sx={{
              width: '100%',
              maxWidth: '450px',
              '@media (max-width: 768px)': {
                width: '400px',
              },
              '@media (max-width: 500px)': {
                width: '300px',
              },
            }}
          />
        </Box>
        <Box sx={{ textAlign: 'center', mt: 2 }}>
          <Typography variant='body1' sx={{ color: 'primary.main' }} gutterBottom>
            This website is currently under construction. In the meantime, you can book an appointment with Luma Hair Studio by clicking the button below.
          </Typography>
          <Button variant='contained'
            href='http://www.vagaro.com/lumahairstudio'
            target='_blank'
            sx={{
              backgroundColor: AppColors.buttonPrimary,
              mt: 2
            }}
            size='large'
          >
            Book Appointment
          </Button>
        </Box>
      </Box>
    </Box>
  );
}

export default MainPage;