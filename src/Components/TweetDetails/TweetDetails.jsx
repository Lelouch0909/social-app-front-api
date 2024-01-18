import { KeyboardBackspace } from '@mui/icons-material'
import React, { useState } from 'react'
import { Navigate, useNavigate } from 'react-router-dom'
import TweetCard from '../HomeSection/TweetCard'
import { Divider } from '@mui/material'

function TweetDetails() {

    const navigate = useNavigate()
    const handleBack = ()=> {
        navigate(-1)
    }

    return (
        <>
            <section className='bg-white z-50 flex items-center sticky top-0 opacity-95'>


                <KeyboardBackspace className='cursor-pointer'  onClick={handleBack}/>

                <h1 className='py-5 text-xl font-bold opacity-90 '> 
                Tweet
                </h1>
            </section>
            <section>
                <TweetCard></TweetCard>
                <Divider sx={{margin : "2rem 0rem"}}></Divider>
            </section>
            <section>
          {  [1,1,1,1,1].map((item) =>  <TweetCard/>)}
            </section>
        </>
    )
}

export default TweetDetails
