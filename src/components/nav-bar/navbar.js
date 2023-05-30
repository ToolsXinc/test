import * as React from 'react';
import "./navbar.css";
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { useDispatch } from 'react-redux';
import { setSideBarState } from '../../Redux/Reducers/appState';

  

const BrokersAppBar =() => {
    const [anchorEl, setAnchorEl] = React.useState(null);
    
  
    function handleClick(event) {
        
    }
  
    function handleClose() {
      setAnchorEl(null);
    }
    const dispatch = useDispatch();
  return (
    <Box   sx={{ flexGrow: 1 ,}}>
      <AppBar  sx={{ backgroundColor:"#0b1118"}}  color="inherit" position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2,color:"white" }}
            onClick={()=>dispatch(setSideBarState(true))}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="p" className='navmenus' sx={{ flexGrow: 1 ,color:"white"}}>
              Xavier Strategic Inc
          </Typography>
          <Button      
          aria-owns={anchorEl ? "simple-menu" : undefined}
          aria-haspopup="true"
          onClick={()=>handleClick}
          onMouseEnter={()=>alert("Hellow")}
          style={{textTransform: 'none', color:"white"}} 
          color="inherit">
            Theme
          </Button>
          <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        open={false}
        onClose={()=>handleClose}
        onMouseLeave={()=>handleClose}
      >
        <MenuItem onClick={()=>handleClose}>Profile</MenuItem>
        <MenuItem onClick={()=>handleClose}>My account</MenuItem>

      </Menu>
         <div className='navmenus'>
          <Button style={{textTransform: 'none'}}  sx={{ color:"white",}} >Trading</Button>
          <Button  style={{textTransform: 'none'}}sx={{ color:"white"}}>Mining</Button>
          <Button style={{textTransform: 'none'}}   sx={{ color:"white"}}>Login</Button>
          <Button  style={{textTransform: 'none'}} sx={{ color:"white"}}>Sign Up</Button>
          </div>
        </Toolbar>
      </AppBar>
    </Box>
  );
}


export default BrokersAppBar;