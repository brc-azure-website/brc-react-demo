import * as React from 'react';
import Box from '@mui/material/Box';
import colorConfigs from "../configs/colorConfigs";
import Topbar from '../components/Topbar';
import { Link, useNavigate, useParams } from 'react-router-dom';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import FavoriteIcon from '@mui/icons-material/Favorite';
import axios from 'axios';
import { Avatar } from '@mui/material';
import Cookies from 'js-cookie';
import { Delete } from '@mui/icons-material';

const ImagePage = () => {
  const { imageUrl } = useParams();
  const decodedImageId = decodeURIComponent(imageUrl.trim());
  const navigate = useNavigate();

  const [imageDetails, setImageDetails] = React.useState(null);

  const getImage = async () => {
    let headers = {};
    if (Cookies.get('art_space_signing_jwt_token')) {
      headers = {Authorization: 'Bearer ' + Cookies.get('art_space_signing_jwt_token')};
    }
    await axios.get(imageDetails(decodedImageId),
      { headers })
      .then(value => setImageDetails(value.data))
  }

  const deleteImage = async () => {
    if (!Cookies.get('art_space_signing_jwt_token')) return;

    await axios.delete(deleteImage(decodedImageId),
        { 
          headers: {Authorization: 'Bearer ' + Cookies.get('art_space_signing_jwt_token')} 
        }
      )
    navigate('/profile')
  }

  const likeImage = async () => {
    if (!Cookies.get('art_space_signing_jwt_token')) return;

    await axios.post(`http://localhost:8080/api/v1/like/like-image`, {},
        { 
          params: {imageId: decodedImageId},
          headers: {Authorization: 'Bearer ' + Cookies.get('art_space_signing_jwt_token')} 
        }
      ).then(value => value.data)

    getImage();
  }

  React.useEffect(() => {
    getImage()
  }, [])

  return (
    <div style={{ 
      backgroundColor: colorConfigs.green.lighter,
      minHeight: '100vh'
    }}>
      <Topbar />
      <Box
        sx={{
          marginTop: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Card sx={{ maxWidth: '60vw', marginBottom: 8 }} style={{ backgroundColor: colorConfigs.green.main }}>
          <CardHeader
            avatar={
              <Avatar sx={{ bgcolor: colorConfigs.green.dark }} aria-label="details" component={Link} to={`/user/${encodeURIComponent(imageDetails?.username)}`}/>
            }
            title={imageDetails?.title}
            subheader={imageDetails?.dateTime ? new Date(imageDetails?.dateTime).toISOString().substring(0 ,10) : ''}
          />
          <CardMedia
            component="img"
            src={imageDetails?.url}
            alt="Details image"
          />
          <CardContent>
            <Typography variant="body2" color="text.secondary">
              {imageDetails?.description}
            </Typography>
          </CardContent>
          <CardActions disableSpacing>
            <IconButton 
              aria-label="add to favorites" 
              onClick={likeImage}
              color={imageDetails?.isLiked ? 'error' : 'default'}
            >
              <FavoriteIcon /> {imageDetails?.sumLikes}
            </IconButton>
            { imageDetails?.canDelete ? (
              <IconButton 
                aria-label="delete image" 
                onClick={deleteImage}
              >
                <Delete />
              </IconButton>
            ) : ''}
          </CardActions>
        </Card>
      </Box>
    </div>
  );
}

export default ImagePage