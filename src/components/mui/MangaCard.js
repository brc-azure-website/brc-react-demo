import * as React from 'react';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import styled from '@emotion/styled';
import colorConfigs from '../../configs/colorConfigs';

const Item = styled(Paper)(({theme}) => ({
  display: 'flex',
  height: '100%', 
  width: '100%'
}));

const Image = styled.img(({imageUrl}) => ({
  width: '100%', 
  height: '100%',
  borderBottomLeftRadius: '4px',
  borderTopLeftRadius: '4px'
}));

const MangaCard = ({manga}) => {
  return (
    <Item elevation={1}>
      <Grid container>
        <Grid item xs={12} sm={4}>
          <Image
            src={manga.imageUrl}
            alt={manga.name}
          />
        </Grid>
        <Grid item xs={12} sm={8} sx={{ padding: '10px' }}>
          <Typography variant="h6" color={colorConfigs.text.basic}>
            {manga.name.length <= 28 ? manga.name : manga.name.substr(0, 28) + '...'}
          </Typography>
          <Typography variant="h6" color={colorConfigs.text.secondary}>
            chaptery: {manga.chapters}
          </Typography>
        </Grid>
      </Grid>
    </Item>
  );
};

export default MangaCard;