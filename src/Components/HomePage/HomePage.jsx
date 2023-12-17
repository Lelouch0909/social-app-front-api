import { Grid } from '@mui/material'
import React from 'react'
import Navigation from '../Navigation/Navigation'
import HomeSection from '../HomeSection/HomeSection'
import RightPart from '../RightPart/RightPart'

function HomePage() {
    return (
            <Grid container className='px-5 lg:px-36 justify-between'>
                <Grid item xs={0} lg={2.5} className=' lg:block w-full relative hidden '>
                   <Navigation/>
                </Grid>
                <Grid item xs={12} lg={6} className=' px-5 lg:px-9  lg:block w-full relative '>
                    <HomeSection/>
                    </Grid>
                <Grid item xs={0} lg={3} className=' lg:block hidden w-full relative '> 
                    <RightPart/>
                </Grid>

            </Grid>
    )
}

export default HomePage