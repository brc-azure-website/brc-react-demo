import React, { useEffect, useState } from 'react';
import Topbar from "../components/Topbar";
import colorConfigs from '../configs/colorConfigs';
import axios from 'axios';
import InfiniteScroll from 'react-infinite-scroll-component';
import { ImageList, ImageListItem } from '@mui/material';
import { Link } from 'react-router-dom';
import { imageStorage } from '../configs/azureConfig';

const HomePage = () => {
  const [items, setItems] = useState([]);
  const [page, setPage] = useState(1);
  const [fetching, setFetching] = useState(false);
  const [hasMore, setHasMore] = useState(true);

  const loadFunc = async () => {
    if (fetching || !hasMore) {
      return;
    }
    setFetching(true);

    try {
      const imageUrl = await axios.get(imageStorage())
        .then(value => value.data)
      
      setItems([...items, ...imageUrl])

      if (imageUrl.length < 20) setHasMore(false);

    } finally {
      setPage(page+1)
      setFetching(false);
    }
  }

  useEffect(() => {
    loadFunc();
  }, [])
 
  return (
    <div style={{ 
      backgroundColor: colorConfigs.green.lighter,
      minHeight: "100vh"
    }}>
      <Topbar />
      <InfiniteScroll
        dataLength={items.length}
        next={loadFunc}
        hasMore={hasMore}
      >
        <ImageList variant="masonry" 
          cols={4} 
          gap={16} 
          sx={{ margin: 3 }}
        >
          {items.map(item => (
            <ImageListItem key={item.id} component={Link} to={`/image/${encodeURIComponent(id)}`}> 
              <img
                srcSet={`${item.url}?w=248&fit=crop&auto=format&dpr=2 2x`}
                src={`${item.url}?w=248&fit=crop&auto=format`}
                loading="lazy"
                style={{ borderRadius: 20}}
              />
            </ImageListItem>
          ))}
        </ImageList>
      </InfiniteScroll>
    </div>
  )
}

export default HomePage