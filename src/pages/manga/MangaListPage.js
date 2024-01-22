import React from 'react'
import getAllMangas from '../../services/MangaServices';
import MangaCard from '../../components/mui/MangaCard';
import { Grid } from '@mui/material';

const MangaListPage = () => {
  const [mangas, setMangas] = React.useState([]);

    React.useEffect(() => {
      const fetchMangas = async () => {
        await getAllMangas().then((res) => {
            setMangas(res.data);
        })
      }
      fetchMangas();
    }, [])

    return (
        <div>
            <Grid 
              container 
              justifyContent={'flex-start'}
              spacing={{ xs: 2, md: 3 }} 
              columns={{ xs: 4, sm: 8, md: 12, lg: 24}}
            >
              {mangas.map((manga, i) => (
                <Grid item key={i} xs={0} sm={8} md={6} lg={6}> 
                  <MangaCard key={i} manga={manga}/>
                </Grid>
              ))}
            </Grid>
        </div>
    )
}

export default MangaListPage