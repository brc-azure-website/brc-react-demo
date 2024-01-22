import { AppBar, Toolbar } from '@mui/material';
import colorConfigs from "../../configs/colorConfigs";
import sizeConfigs from "../../configs/sizeConfigs";

const Topbar = (props) => {
  return (
    <AppBar
      position="fixed"
      sx={{
        height: sizeConfigs.topbar.height,
        width: `calc(100% - ${sizeConfigs.sidebar.width})`,
        ml: sizeConfigs.sidebar.width,
        boxShadow: "unset",
        backgroundColor: colorConfigs.topbar.bg,
        color: colorConfigs.topbar.color,
        borderBottom: 'solid 1px #e9ebec'
      }}
    >
      <Toolbar>
      </Toolbar>
    </AppBar>
  )
}

export default Topbar;