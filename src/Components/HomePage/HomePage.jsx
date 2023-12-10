import { Grid } from '@mui/material'
import React from 'react'
import Navigation from '../Navigation/Navigation'
import HomeSection from '../HomeSection/HomeSection'

function HomePage() {
    return (
            <Grid container className='px-5 lg:px-36 justify-between'>
                <Grid item xs={0} lg={2.5} className=' lg:block w-full relative hidden '>
                   <Navigation/>
                </Grid>
                <Grid item xs={12} lg={6} className='hidden lg:block w-full relative '>
                    <HomeSection></HomeSection>
                    </Grid>
                <Grid item xs={0} lg={3} className='hidden lg:block w-full relative '> <p className='text-center'> right part</p></Grid>

            </Grid>
    )
}

export default HomePage