import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Badge from '@mui/material/Badge';
import MenuItem from '@mui/material/MenuItem';
import { useNavigate } from 'react-router-dom';
import { useMyContext } from '../context/quantty';

export default function Navbar()  {
  const { value } = useMyContext();
  const navigate = useNavigate();


  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar style={{backgroundColor:'#9c0d4e'}} position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography style={{textAlign:'center'}} variant="h5"  sx={{ flexGrow: 1 }}>
            Shopping Cart Application
          </Typography>
          <MenuItem>
        <IconButton onClick={()=>{navigate('/cartcontent')}} size="large" aria-label="show 4 new mails" color="inherit">
          <Badge badgeContent={value} color="error">
            <ShoppingCartIcon />
          </Badge>
        </IconButton>
      </MenuItem>
        </Toolbar>
      </AppBar>
    </Box>
  )
}

