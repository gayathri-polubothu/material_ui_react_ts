import {BottomNavigation, BottomNavigationAction} from "@mui/material";
import Person from "@mui/icons-material/Person";
import Home from '@mui/icons-material/Home'
import FavoriteRounded from '@mui/icons-material/FavoriteRounded'

import {useState} from "react";
import {useNavigate} from "react-router-dom";
export const MuiBottomNavigation = () => {
  const [value, setValue] = useState(0);
  const navigate = useNavigate()
  return (
      <BottomNavigation sx={{
        width:'100%', position: 'absolute', bottom: 0
      }} value={value} onChange={(event, newValue)=> setValue(newValue)}
      showLabels>
        <BottomNavigationAction onClick={()=>navigate('/')} label={'Home'} icon={<Home />}/>
        <BottomNavigationAction onClick={()=>navigate('/favorites')} label={'Favorites'} icon={<FavoriteRounded />}/>
        <BottomNavigationAction onClick={()=>navigate('/about')} label={'Profile'} icon={<Person />}/>
      </BottomNavigation>
  )
}
