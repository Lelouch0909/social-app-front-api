import { Close } from '@mui/icons-material';
import { Avatar, Box, Button, IconButton, Modal, TextField, Typography } from '@mui/material'
import { useFormik } from 'formik'
import React, { useState } from 'react'
import imgMur from '../../assets/4.jpg'
import imgAvatar from '../../assets/F886inYW8AAl7G7.jpeg'


const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%,-50%)',
    width: 600,
    bgcolor: 'background.paper',
    border: 'none',
    boxShadow: 24,
    p: 4,
    outline: "none",
    borderRadius: 4
}

function ProfileModal() {

    const [uploading, setUploading] = useState(false)
    
 

    const handleImageChange = (event) => {
        setUploading(true)
        const name = event.target.name
        const file = event.target.file
        formik.setFieldValue(name, file)
        setUploading(false)

    }

    const handleSubmit = () => console.log("handle submit");

    const [open, setOpen] = useState(true)
    const handleOpen = () => setOpen(true)
    const handleClose = () => setOpen(false)
    const formik = useFormik({
        initialValues: {
            fullName: "",
            website: "",
            location: "",
            bio: "",
            backgroundImage: "",
            image: ""
        },
        onSubmit: handleSubmit
    })

    return (
        <div>
            <Button onClick={handleOpen}>Open modal</Button>
            <Modal open={open} onClose={handleClose} >

                <Box sx={style}>
                    <form onSubmit={formik.handleSubmit}>
                        <div className='flex items-center justify-between space-x-3'>
                            <IconButton onClick={handleClose} aria-label='delete'>
                                <Close />
                                <p className='text-sm'>Edit Profile</p>

                            </IconButton>
                            <Button type='submit' >Save</Button>

                        </div>
                        <div className="hideScrollBar overflow-y-scroll overflow-x-hidden h-[80vh]">
                            <div>
                                <div className="w-full">
                                    <div className="relative">
                                        <img src={imgMur} className='w-full h-[12rem] object-cover object-center' alt="" />
                                        <input type="file" className='absolute top-0 left-0 w-full h-full opacity-0 cursor-pointer' name="backgroundImage" onChange={handleImageChange} />
                                    </div>
                                </div>
                                <div className="transform -translate-y-20 w-full ml-4 h-[6rem]">
                                    <div className="relative">
                                        <Avatar sx={{ width: '8rem', height: '8rem', border: '4px solid white' }} src={imgAvatar}></Avatar>

                                        <input type="file" className='absolute top-0 left-0 w-full h-full opacity-0 cursor-pointer' name="image" onChange={handleImageChange} />
                                    </div>
                                </div>
                            </div>
                            <div className="space-y-3 my-3">
                                <TextField fullWidth id='fullName' name='fullName' label="Full Name" value={formik.values.fullName} onChange={formik.handleChange} error={formik.touched.name && Boolean(formik.errors.fullName)} helperText={formik.touched.name && formik.errors.fullName} ></TextField>
                                <TextField fullWidth multiline rows={4} id='bio' name='bio' label="Bio" value={formik.values.bio} onChange={formik.handleChange} error={formik.touched.bio && Boolean(formik.errors.bio)} helperText={formik.touched.bio && formik.errors.bio} ></TextField>

                                <TextField fullWidth id='website' name='website' label="Website" value={formik.values.website} onChange={formik.handleChange} error={formik.touched.website && Boolean(formik.errors.website)} helperText={formik.touched.website && formik.errors.website} ></TextField>

                                <TextField fullWidth id='location' name='location' label="location" value={formik.values.location} onChange={formik.handleChange} error={formik.touched.location && Boolean(formik.errors.location)} helperText={formik.touched.location && formik.errors.location} ></TextField>

                                <div>
                                    <p className="text-lg">Birth date </p>
                                    <p className="text-2xl">5 janvier 2023 </p>
                                </div>
                                <p className="text-lg py-3">Edit Professional Profile </p>

                            </div>
                        </div>
                    </form>
                </Box>

            </Modal>
        </div>
    )
}

export default ProfileModal