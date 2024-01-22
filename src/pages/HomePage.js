import React from 'react'
import Topbar from "../components/Topbar";
import colorConfigs from '../configs/colorConfigs';

const HomePage = () => {
  return (
    <div style={{ 
      backgroundColor: colorConfigs.green.lighter,
      height: '100vh'
    }}>
      <Topbar />
    </div>
  )
}

export default HomePage