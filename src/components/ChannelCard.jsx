import React from 'react'
import { Link } from 'react-router-dom'
import { Typography, Box, CardContent, CardMedia } from '@mui/material'
import { CheckCircle } from '@mui/icons-material'

import { demoProfilePicture } from '../utils/constants'

const ChannelCard = ({ channelDetail, marginTop}) => {
  return (
    <Box
    sx={{
      boxShadow: 'none',
      borderRadius: '20px',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      width: { xs: '365px', md: '320px'},
      height: '326px',
      margin: 'auto',
      marginTop: marginTop
      
    }}>
      <Link to={`/channel/${channelDetail?.id?.channelId}`}>
        <CardContent sx={{ display: 'flex', flexDirection: 'column',
        justifyContent: 'center', textAlign: 'center', color: '#000'}}>
          <CardMedia
            image={channelDetail?.snippet?.thumbnails?.high?.url || demoProfilePicture}
            alt={channelDetail?.snippet?.title}
            sx={{ borderRadius: '50%', height: '180px',
                  width: '180px', mb: 2, border: '1px solid #e3e3e3'}}
          />
          <Typography variant='h6'>
            {channelDetail?.snippet?.title}
            <CheckCircle sx={{ fontSize: 14, color: 'blue', ml: '5px'}} />
            {channelDetail?.statistics?.subscriberCount && (
              <Typography>
                {parseInt(channelDetail?.statistics?.subscriberCount).toLocaleString()} Subscriber
              </Typography>
            )}
          </Typography>
        </CardContent>
      </Link>
    </Box>
  )
}

export default ChannelCard
