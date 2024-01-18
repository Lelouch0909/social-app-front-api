import React, { useState } from 'react'
import KeyboardBackspace from '@mui/icons-material/KeyboardBackspace'
import { useNavigate } from 'react-router-dom'
import murProfile from '../../assets/pexels-andrea-piacquadio-948873.jpg'

import imgprofile from '../../assets/F886inYW8AAl7G7.jpeg'
import usertalent from '../../assets/pexels-erik-alfaro-16593195.jpg'
import { Avatar, Box, Button, Tab, Tabs } from '@mui/material'
import { BusinessCenter, CalendarMonth, LocationCity, LocationOn } from '@mui/icons-material'
import { TabContext, TabList, TabPanel } from '@mui/lab'
import './Profile.css'
import TweetCard from '../HomeSection/TweetCard'
import ProfileModal from './ProfileModal'

const Profile = () => {

  const [tabValue, setTabValue] = useState("1")

  const navigate = useNavigate();
  const handleBack = () => navigate(-1)

  const handleOpenProfile = () => {
    console.log('open handleOpenProfile');
  }

  const handleFollower = () => {
    console.log('open handleFollower');
  }


  const handleChange = (event, newValue) => {
    console.log(event);
    console.log(newValue);

    setTabValue(newValue)
  }

  return (
    <div>
      <section className='bg-white z-50 flex  items-center sticky top-0 bg-opacity-95'>

        <KeyboardBackspace className='cursor-pointer ' onClick={handleBack} />

        <h1 className='py-5 text-xl font-bold opacity-90 ml-5'>Back</h1>

      </section>

      <section>
        <img src={murProfile} className='w-[100%] h-[15rem] object-cover' alt="" srcset="" />
      </section>

      <section>
        <div className="flex justify-between items-start mt-5 h-[5rem]">
          <Avatar className='transform -translate-y-24' alt='lelouch' src={imgprofile} sx={{ width: '10rem', height: "10rem", border: '4px solid white' }}></Avatar>

          {
            true ? (
              <Button onClick={handleOpenProfile} className="rounded-full" variant='contained' sx={{ borderRadius: "20px" }}>Edit Profile</Button>) : (
              <Button onClick={handleFollower} className="rounded-full" variant='contained' sx={{ borderRadius: "20px" }}>{true ? "Follow" : "Unfollow"}</Button>)
          }
        </div>

        <div className="">
          <div className="flex items-center">
            <h1 className='font-bold text-lg'>code here lol</h1>
            {true && <img className="ml-2 w-5 h-5" alt="" src={usertalent} />}
          </div>

          <h1 className='text-gray-500'>@codewithme</h1>

        </div>
        <div className="mt-2 space-y-3">
          <p>Hello in my test ouep; its fun</p>
          <div className="py-1 flex space-x-5">
            <div className="items-center flex text-gray-500">
              <BusinessCenter />
              <p className='ml-2'>Education</p>
            </div>
            <div className="items-center flex text-gray-500">
              <LocationOn />
              <p className='ml-2'>Cameroon</p>
            </div>
            <div className="items-center flex text-gray-500">
              <CalendarMonth />
              <p className='ml-2'>Joined December 2023</p>
            </div>
          </div>
        </div>
        <div className="flex items-center space-x-5">
          <div className="flex items-center space-x-1 font-semibold">
            <span>390</span>
            <span className='text-gray-500'>Following</span>
          </div>
          <div className="flex items-center space-x-1 font-semibold">
            <span>590</span>
            <span className='text-gray-500'>Followers</span>
          </div>
        </div>
      </section>

      <section className='py-5'>

        <Box className="w-[100%] " sx={{ typography: 'body1' }}>
          <TabContext value={tabValue}>
            <Box sx={{ borderBottom: 1, borderColor: 'divider', display : 'flex', width : "100%" }}>
              <TabList sx={{ display: 'flex' }} onChange={handleChange}>
                <Tab label="Tweets" value='1'></Tab>
                <Tab label="Replies" value='2'></Tab>
                <Tab label="Media" value='3'></Tab>
                <Tab label="Titles" value='4'></Tab>

              </TabList>
            </Box>
            <TabPanel value='1'>
             { [1,1,1,1,1].map(item => <TweetCard></TweetCard>)}
            </TabPanel>
            <TabPanel value='2'>users replies</TabPanel>
            <TabPanel value='3'>Media</TabPanel>
            <TabPanel value='4'>Likes</TabPanel>
          </TabContext>
        </Box>


      </section>


<section>
  <ProfileModal></ProfileModal>
</section>

    </div>
  )
}

export default Profile