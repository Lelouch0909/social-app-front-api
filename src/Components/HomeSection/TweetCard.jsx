import React from 'react'
import { Avatar, Button, Menu, MenuItem } from '@mui/material'
import userprofile from '../../assets/svg/avatar.svg'
import usertalent from '../../assets/svg/reshot-icon-embedded-devices-TN3BKWCZH2.svg'
import imgExample from '../../assets/1-removebg-preview.png'

import FavoriteIcon from '@mui/icons-material/Favorite'
import FileUploadIcon from '@mui/icons-material/FileUpload'
import BarChartIcon from '@mui/icons-material/BarChart'

import RepeatIcon from '@mui/icons-material/Repeat'
import ChatBubbleIcon from '@mui/icons-material/ChatBubbleOutline'
import { Navigate, useNavigate } from 'react-router-dom'
import { FavoriteOutlined, MoreHoriz } from '@mui/icons-material'



function TweetCard() {


    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    const handleDeleteTweet = () => {
        console.log('Delete ');
        handleClose()
    }
    const handleEditTweet = () => {

        console.log('Edit ');
        handleClose()
    }

    const handleOpenReplyModel = () => {
        console.log("handleOpenReplyModel");
    }
    const handleCreateRetweet = () => {
        console.log("handleCreateRetweet");
    }
    const handleLikeTweet = () => {
        console.log("handleLikeTweet");
    }


    const navigate = useNavigate()

    return (
        <div className=''>
            {/* <div className="flex items-center font-semibold text-gray-700 py-2 ">
            <RepeatIcon></RepeatIcon>
            <p>You Retweet</p>
        </div>*/}
            <div className="flex space-x-5">
                <Avatar alt='username' src={userprofile} className='cursor-pointer' onClick={() => navigate('/profile/' + 6)}></Avatar>

                <div className="w-full">
                    <div className="flex justify-between items-center">
                        <div className="flex cursor-pointer items-center space-x-2">
                            <span className='font-semibold'>Code With Zosh</span>
                            <span className='text-gray-600'>@codeHere . 2m</span>
                            <img className="ml-2" alt="" src={usertalent} />
                        </div>
                        <div>


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

                                <MenuItem onClick={handleDeleteTweet}>Delete</MenuItem>
                                <MenuItem onClick={handleEditTweet}>Edit</MenuItem>
                            </Menu>
                        </div>
                    </div>

                    <div className="mt-2">
                        <div className="cursor-pointer" >
                            <p className='mb-2 p-0'>nice le tuto</p>
                            <img src={imgExample} className='w-full border rounded-md border-gray-400 p-5 ' alt=""/>
                        </div>
                        <div className="py-5 flex flex-wrap justify-between items-center">

                            <div className={(true ? "text-pink-600" : "text-gray-600") + "space-x-3 flex items-center"}>
                                <ChatBubbleIcon className='cursor-pointer' onClick={handleOpenReplyModel} />
                                <p>43</p>
                            </div>

                            <div className={(true ? "text-pink-600" : "text-gray-600") + "space-x-3 flex items-center"}>
                                <RepeatIcon className='cursor-pointer' onClick={handleCreateRetweet} /> <p>54</p>
                            </div>

                            <div className={(true ? "text-pink-600" : "text-gray-600") + "space-x-3 flex items-center"}>
                                {true ? <FavoriteIcon className='cursor-pointer' onClick={handleLikeTweet}></FavoriteIcon> : <FavoriteOutlined className='cursor-pointer' onClick={handleLikeTweet} />}  <p>5</p>
                            </div>


                           <div className={"space-x-3 flex items-center text-gray-600"}>
                                <BarChartIcon className='cursor-pointer' onClick={handleOpenReplyModel} />
                                <p>430</p>
                            </div>

                            <div className={"space-x-3 flex items-center text-gray-600"}>
                                <FileUploadIcon className='cursor-pointer' onClick={handleOpenReplyModel} />
                                <p>430</p>
                            </div>


                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TweetCard