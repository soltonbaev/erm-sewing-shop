import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import {useSelector} from 'react-redux';

export default function DevMenu() {
   const [anchorEl, setAnchorEl] = React.useState(null);
   const open = Boolean(anchorEl);
   const handleClick = event => {
      setAnchorEl(event.currentTarget);
   };
   const handleClose = () => {
      setAnchorEl(null);
   };

   const globalState = useSelector(state => {
      return state;
   });
   const [inpValue, setInpValue] = React.useState('');

   return (
      <div
         style={{
            position: 'fixed',
            bottom: '0',
            right: '0',
            backgroundColor: 'orange',
            zIndex: '6000',
         }}
      >
         <Button
            id="basic-button"
            aria-controls={open ? 'basic-menu' : undefined}
            aria-haspopup="true"
            aria-expanded={open ? 'true' : undefined}
            onClick={handleClick}
         >
            DevMenu
         </Button>
         <Menu
            id="basic-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            MenuListProps={{
               'aria-labelledby': 'basic-button',
            }}
            sx={{zIndex: '7000'}}
         >
            <MenuItem
               onClick={async () => {
                  console.log(globalState);
               }}
            >
               Get global state
            </MenuItem>

            <MenuItem
               onClick={() => {
                  console.clear();
               }}
            >
               CLEAR CONSOLE
            </MenuItem>
            <center>
               <input
                  placeholder="universal input"
                  value={inpValue}
                  onChange={e => {
                     setInpValue(e.target.value);
                  }}
               ></input>
            </center>
         </Menu>
      </div>
   );
}
