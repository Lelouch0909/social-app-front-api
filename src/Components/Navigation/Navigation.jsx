import React from 'react'
import logo from '../../assets/svg/reshot-icon-device-computer-X5BUSLMRJ3.svg'
import userprofile from '../../assets/svg/avatar.svg'
import { navigationMenu } from './NavigationMenu'
import { useNavigate } from 'react-router-dom'
import { Avatar, Button, Menu, MenuItem } from '@mui/material'
import { MoreHoriz } from '@mui/icons-material'

function Navigation() {

  const navigate = useNavigate()

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {

    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleLogout = () => {
    console.log('log out');
    handleClose()
  }
  return (
    <div className='h-screen sticky top-0'>
      <div>
        <div className="py-5">
          <img src={logo} alt="" srcSet='' />
        </div>
        <div className="space-y-6">
          {navigationMenu.map(((item, key) => {
            return <div key={key} className=' cursor-pointer flex space-x-3 items-center ' onClick={() => item.title === "Profile" ? navigate("/profile/" + 5 + "") : navigate(item.path)}>
              {item.icon}
              <p className='text-xl'> {item.title}</p>

            </div>
          }))}
        </div>
        <div className="py-10">

        </div>

      </div>
      <div className="flex items-center justify-between">

        <div className="flex  space-x-3 items-center">
          <Avatar alt='username' src={userprofile}></Avatar>
          <div>
            <span className="name block">Lontsi Hermann</span>
            <span className="opacity-70">@lontsi</span>
          </div>
        </div>
        <Button onClick={handleClick} aria-controls={open ? "basic-menu" : undefined} aria-expanded={open ? "true" : undefined} aria-haspopup="true">
          <MoreHoriz />
        </Button>
        <Menu
          id="basic-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          MenuListProps={{
            'aria-labelledby': 'basic-button',
          }}
        >

          <MenuItem onClick={handleLogout}>Logout</MenuItem>
        </Menu>
      </div>
    </div>
  )
}

export default Navigation