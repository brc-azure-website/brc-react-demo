import React from 'react'
import Topbar from "../components/Topbar";
import colorConfigs from '../configs/colorConfigs';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import axios from 'axios';
import { CloudUploadOutlined, Send, UploadFile } from '@mui/icons-material';
import styled from '@emotion/styled';


const VisuallyHiddenInput = styled('input')({
  clip: 'rect(0 0 0 0)',
  clipPath: 'inset(50%)',
  height: 1,
  overflow: 'hidden',
  position: 'absolute',
  bottom: 0,
  left: 0,
  whiteSpace: 'nowrap',
  width: 1,
});

const UploadPage = () => {
  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);

    const payload = {
      email: data.get('email'),
      password: data.get('password'),
    }

    await axios.post('http://localhost:8080/api/v1/auth/authenticate', payload)
      .then((value) => {document.cookie = `art_space_signing_jwt_token=${value.data}; path=/;`})
      .catch(() => {alert("Server failed to respond")})
    
  };

  return (
    <div style={{ 
        backgroundColor: colorConfigs.green.lighter,
        height: '100vh'
      }}>
      <Topbar />
      <Container component="main" maxWidth="xs">
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: '#2e7d32' }}>
            <CloudUploadOutlined />
          </Avatar>
          <Typography component="h1" variant="h5">
            Upload your image
          </Typography>
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="title"
              label="Title"
              name="title"
              autoComplete="title"
              autoFocus
              color='success'
            />
            <TextField
              margin="normal"
              required
              fullWidth
              id="description"
              label="Description"
              name="description"
              autoComplete="description"
              color='success'
              multiline
              rows={5}
            />
            <Button 
              component="label" 
              variant="contained" 
              fullWidth
              color='secondary'
              startIcon={<UploadFile />}
            >
              Upload Image
              <VisuallyHiddenInput type="file" />
            </Button>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              color='success'
              endIcon={<Send />}
            >
              Send
            </Button>
          </Box>
        </Box>
      </Container>
    </div>
  );
}

export default UploadPage