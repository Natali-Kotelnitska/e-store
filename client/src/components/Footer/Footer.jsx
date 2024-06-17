import FacebookIcon from '@mui/icons-material/Facebook';
import XIcon from '@mui/icons-material/X';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GoogleIcon from '@mui/icons-material/Google';

import { Box, Divider, IconButton, Typography, Container } from "@mui/material";
import Logo from '../Logo';

function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary" align="center">
      {new Date().getFullYear()}
      {' © Copyright all rights reserver'}
      {'.'}
    </Typography>
  );
}

function Footer() {
  return (
    <Container maxWidth={false} sx={{ backgroundColor: '#f5f5f5', padding: '30px' }}>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
        <Box>
          <Typography variant="h6" gutterBottom>
            Branding Staff
          </Typography>
          <Typography
            variant="subtitle1"
            color="text.secondary"
            component="p"
            sx={{ whiteSpace: 'pre-line', maxWidth: '300px' }}
          >
            Something here to give the footer a purpose! Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet!
          </Typography>
        </Box>

        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <Logo />
        </Box>

        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <IconButton sx={{ backgroundColor: '#1877f2', marginRight: '8px', '&:hover': { backgroundColor: '#13569e' } }}>
            <FacebookIcon sx={{ color: 'white' }} />
          </IconButton>
          <IconButton sx={{ backgroundColor: '#1da1f2', marginRight: '8px', '&:hover': { backgroundColor: '#0e71ba' } }}>
            <XIcon sx={{ color: 'white' }} />
          </IconButton>
          <IconButton sx={{ backgroundColor: '#0a66c2', marginRight: '8px', '&:hover': { backgroundColor: '#094f8e' } }}>
            <LinkedInIcon sx={{ color: 'white' }} />
          </IconButton>
          <IconButton sx={{ backgroundColor: '#db4437', '&:hover': { backgroundColor: '#b0281a' } }}>
            <GoogleIcon sx={{ color: 'white' }} />
          </IconButton>
        </Box>
      </Box>

      <Divider sx={{ mb: 2, height: '1px', backgroundColor: '#333' }} />

      <Box sx={{
        py: 3,
        px: 2,
        mt: 'auto'
      }} component="footer">
        <Copyright />
      </Box>
    </Container>
  );
}

export default Footer;
