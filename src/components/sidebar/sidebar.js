import  React,{useState} from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import TurnedInIcon from '@mui/icons-material/TurnedIn';
import ArrowDropDownSharpIcon from '@mui/icons-material/ArrowDropDownSharp';
import BookmarkBorderOutlinedIcon from '@mui/icons-material/BookmarkBorderOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import AttachMoneyOutlinedIcon from '@mui/icons-material/AttachMoneyOutlined';
import PersonAddAltOutlinedIcon from '@mui/icons-material/PersonAddAltOutlined';
import PeopleIcon from '@mui/icons-material/People';
import HomeIcon from '@mui/icons-material/Home';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import ContentCopyOutlinedIcon from '@mui/icons-material/ContentCopyOutlined';
import LockOpenOutlinedIcon from '@mui/icons-material/LockOpenOutlined';
import FolderOutlinedIcon from '@mui/icons-material/FolderOutlined';
import { useSelector,useDispatch } from 'react-redux';
import { setSideBarState } from '../../Redux/Reducers/appState';
import logo from "../../assets/logo/logo.png";
import { setAppTheme,setAppTextColor } from '../../Redux/Reducers/appState';



const BrokerSideBar=()=> {
  const state = useSelector((data)=>data.appState.SideBarState)
  const appTheme = useSelector((data)=>data.appState.appTheme)
  const appTextColor = useSelector((data)=>data.appState.appTextColor)
  const dispatch = useDispatch();
  const [openThemeMenu,setOpenThemeMenu] = useState(false);
  const [openPagesMenu,setOpenPagesMenu] = useState(false); 
  const [openTradingMenu,setOpenTradingMenu] = useState(false); 


  const list = (anchor) => (
    <Box
      sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 ,backgroundColor:`${appTheme}`}}
      role="presentation"
    
    >
      <List>
         <div>
              <img src={logo}  height={130} width={130} alt='logo'/> 
         </div>
         <div>
            <div style={{backgroundColor:"black"}}>
           <ListItemButton  onClick={()=>setOpenThemeMenu(~openThemeMenu)} >
              <ListItemIcon sx={{ color: `white` }} >
                 <ArrowDropDownSharpIcon />
              </ListItemIcon>
              <ListItemText  sx={{ color: `white` }}  primary={"Theme"} />
            </ListItemButton>
            </div>
             {openThemeMenu?
             <div style={{display:"flow"}}>
             <ListItemButton onClick={()=>{dispatch(setAppTheme("#0b1118"));dispatch(setAppTextColor("white"))}} >
              <ListItemIcon>
                 <TurnedInIcon  sx={{ color: `${appTextColor}` }}  />
              </ListItemIcon>
              <ListItemText  sx={{ color: `${appTextColor}` }}  primary={"Dark"} />
            </ListItemButton>

            <ListItemButton onClick={()=>{dispatch(setAppTheme("white"));dispatch(setAppTextColor("black"))}} >
              <ListItemIcon>
                 <BookmarkBorderOutlinedIcon sx={{ color: `${appTextColor}` }}  />
              </ListItemIcon>
              <ListItemText sx={{ color: `${appTextColor}` }}  primary={"Light"} />
            </ListItemButton>
             </div>:<div></div>}
         </div>
    
      </List>
      <List>
      <div>
            <div style={{backgroundColor:"black"}}>
           <ListItemButton  onClick={()=>setOpenPagesMenu(~openPagesMenu)} >
              <ListItemIcon sx={{ color: `white` }} >
                 <ArrowDropDownSharpIcon sx={{ color: `white` }}  />
              </ListItemIcon>
              <ListItemText  sx={{ color: `white` }}  primary={"Pages"} />
            </ListItemButton>
            </div>
             {openPagesMenu?
             <div style={{display:"flow"}}>
             <ListItemButton >
              <ListItemIcon>
                  <HomeIcon  sx={{ color: `${appTextColor}` }} />
              </ListItemIcon>
              <ListItemText  sx={{ color: `${appTextColor}` }}  primary={"Home"} />
            </ListItemButton>

            <ListItemButton  >
              <ListItemIcon>
                 <PersonOutlineOutlinedIcon  sx={{ color: `${appTextColor}` }} />
              </ListItemIcon>
              <ListItemText sx={{ color: `${appTextColor}` }}  primary={"Sign In"} />
            </ListItemButton>

            <ListItemButton  >
              <ListItemIcon>
                 <PersonAddAltOutlinedIcon  sx={{ color: `${appTextColor}` }} />
              </ListItemIcon>
              <ListItemText sx={{ color: `${appTextColor}` }}  primary={"Sign Up"} />
            </ListItemButton>

            <ListItemButton  >
              <ListItemIcon>
                 <AttachMoneyOutlinedIcon  sx={{ color: `${appTextColor}` }} />
              </ListItemIcon>
              <ListItemText sx={{ color: `${appTextColor}` }}  primary={"Payouts"} />
            </ListItemButton>

            <ListItemButton >
              <ListItemIcon>
                 <PeopleIcon sx={{ color: `${appTextColor}` }} />
              </ListItemIcon>
              <ListItemText sx={{ color: `${appTextColor}` }}  primary={"About Us"} />
            </ListItemButton>
            
            <ListItemButton  >
              <ListItemIcon>
                 <EmailOutlinedIcon  sx={{ color: `${appTextColor}` }} />
              </ListItemIcon>
              <ListItemText sx={{ color: `${appTextColor}` }}  primary={"Contact Us"} />
            </ListItemButton>

            <ListItemButton  >
              <ListItemIcon>
                 <LockOpenOutlinedIcon  sx={{ color: `${appTextColor}` }} />
              </ListItemIcon>
              <ListItemText sx={{ color: `${appTextColor}` }}  primary={"Privacy Policy"} />
            </ListItemButton>

            <ListItemButton  >
              <ListItemIcon>
                 <FolderOutlinedIcon  sx={{ color: `${appTextColor}` }} />
              </ListItemIcon>
              <ListItemText sx={{ color: `${appTextColor}` }}  primary={"Terms & Condition"} />
            </ListItemButton>

             </div>:<div></div>}

             
             </div>
      </List>

      <List>
      <div>
            <div style={{backgroundColor:"black"}}>
           <ListItemButton  onClick={()=>setOpenTradingMenu(~openTradingMenu)} >
              <ListItemIcon sx={{ color: `white` }} >
                 <ArrowDropDownSharpIcon sx={{ color: `white` }}  />
              </ListItemIcon>
              <ListItemText  sx={{ color: `white` }}  primary={"Trading"} />
            </ListItemButton>
            </div>
             {openTradingMenu?
             <div style={{display:"flow"}}>
             <ListItemButton >
              <ListItemIcon>
                  <ContentCopyOutlinedIcon  sx={{ color: `${appTextColor}` }} />
              </ListItemIcon>
              <ListItemText  sx={{ color: `${appTextColor}` }}  primary={"Copy Trading"} />
            </ListItemButton>

            <ListItemButton >
              <ListItemIcon>
                 <PersonOutlineOutlinedIcon  sx={{ color: `${appTextColor}` }} />
              </ListItemIcon>
              <ListItemText sx={{ color: `${appTextColor}` }}  primary={"Sign In"} />
            </ListItemButton>

            <ListItemButton  >
              <ListItemIcon>
                 <PersonAddAltOutlinedIcon  sx={{ color: `${appTextColor}` }} />
              </ListItemIcon>
              <ListItemText sx={{ color: `${appTextColor}` }}  primary={"Sign Up"} />
            </ListItemButton>

            <ListItemButton  >
              <ListItemIcon>
                 <AttachMoneyOutlinedIcon  sx={{ color: `${appTextColor}` }} />
              </ListItemIcon>
              <ListItemText sx={{ color: `${appTextColor}` }}  primary={"Payouts"} />
            </ListItemButton>

            <ListItemButton >
              <ListItemIcon>
                 <PeopleIcon sx={{ color: `${appTextColor}` }} />
              </ListItemIcon>
              <ListItemText sx={{ color: `${appTextColor}` }}  primary={"About Us"} />
            </ListItemButton>
            
            <ListItemButton  >
              <ListItemIcon>
                 <EmailOutlinedIcon  sx={{ color: `${appTextColor}` }} />
              </ListItemIcon>
              <ListItemText sx={{ color: `${appTextColor}` }}  primary={"Contact Us"} />
            </ListItemButton>

        

             </div>:<div></div>}

             
             </div>
      </List>
    </Box>
  );

  return (
    <div>
      {['left'].map((anchor) => (
        <React.Fragment key={anchor}>
          <Drawer
            anchor={anchor}
            open={state}
            onClose={()=>dispatch(setSideBarState(false))}
          >
            {list(anchor)}
          </Drawer>
        </React.Fragment>
      ))}
    </div>
  );
}

export default BrokerSideBar;