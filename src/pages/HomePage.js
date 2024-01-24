import React, { useState } from 'react';
import Topbar from "../components/Topbar";
import colorConfigs from '../configs/colorConfigs';
import InfiniteScroll from 'react-infinite-scroller';

const loader = (
  <div 
    className="loader" 
    key={0} 
    style={{ margin: '10px' }}
  >
    Loading ...
  </div>
)

const HomePage = () => {
  const [items, setItems] = useState([]);
  const [page, setPage] = useState(1);

  const loadFunc = () => {

    setItems([...items, String(Math.random())]);
    console.log(items.length)

    setPage(page+1)
  }

  return (
    <div style={{ 
      backgroundColor: colorConfigs.green.lighter,
      minHeight: '100vh'
    }}>
      <Topbar />
      <InfiniteScroll
        loadMore={loadFunc}
        hasMore={true}
        loader={loader}
      >
        {items.map(item => {
          return (<p> item</p>)
        })}
      </InfiniteScroll>
    </div>
  )
}

export default HomePage