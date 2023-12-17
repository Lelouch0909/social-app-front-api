import React from 'react'
import SearchIcon from '@mui/icons-material/Search'
import Brightness4Icon from '@mui/icons-material/Brightness4'
import MoreIcon from "@mui/icons-material/MoreHoriz"
import { Button } from '@mui/material'


const RightPart = () => {


    const handleChangeTheme = () => {
        console.log("handleChangeTheme");
    }

    return (
        <div className='py-5 sticky top'>
            <div className="relative flex items-center">
                <input type="text" className='py-3 rounded-full text-gray-500 w-full pl-12' />

                <div className="absolute top-0 left-0 pl-3 pt-3">
                    <SearchIcon className="text-gray-500" />
                </div>
                <Brightness4Icon className='ml-3 cursor-pointer ' onClick={handleChangeTheme}></Brightness4Icon>
            </div>

            <section className='my-5'>
                <h1 className='text-xl font-bold'>Get verified</h1>
                <h1 className='my-2 font-bold'>Subscribe please</h1>
                <Button variant='contained' sx={{ padding: "10px", paddingX: "20px", borderRadius: "25px" }}>Get verified</Button>
            </section>

            <section className='mt-7 space-y-5'>
                <h1 className='font-bold text-xl py-1'>What's happening</h1>
                <div>
                    <p className="text-sm">Lorem, ipsum dolor.</p>

                    <p className="font-bold">#Lorem, ipsum dolor.</p>

                </div>

                {
                    [1, 1, 1, 1, 1].map(item => <div className="flex justify-between w-full ">
                        <div className="">
                            <p>Lorem ipsum dolor sit.</p>
                            <p className="font-bold">Lorem, ipsum dolor.</p>

                            <p>34.3k Tweets</p></div>

                        <MoreIcon></MoreIcon>

                    </div>)
                }


            </section>
        </div>
    )
}

export default RightPart