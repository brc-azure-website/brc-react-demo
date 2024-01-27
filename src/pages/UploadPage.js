import React, { useState } from 'react'
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
import { useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';

const UploadPage = () => {
  const navigate = useNavigate();
  const [image, setImage] = useState(null)
  
  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    
    const payload = {
      title: data.get('title'),
      description: data.get('description'),
      image: image,
    }
    
    await axios.post('http://localhost:8080/api/v1/image/create', payload, {
      headers: {
        Authorization: `Bearer ${Cookies.get("art_space_signing_jwt_token")}`,
        "Content-Type": "multipart/form-data"
      }
    })
      .then(() => {
        alert("Your image was uploaded successfully")
        navigate("/")
      })
      .catch(() => {alert("Server failed to respond")})
    
  };

  const handleImageUpload = (event) => {
    setImage(event.target.files[0])
  }

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
              <input type="file" id='image' hidden onChange={handleImageUpload}/>
            </Button>
            {image !== null ? "loaded "+image.name : ""}
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