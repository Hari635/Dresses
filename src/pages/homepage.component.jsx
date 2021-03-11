import React from 'react'
import {Container,Typography} from '@material-ui/core';
import Directory from '../components/directory/directory.components'
const HomePage = () => {
    return(
        <Container maxWidth='md' >
            <Directory/>
           {/* <Typography component="div" style={{ backgroundColor: '#cfe8fc', height: '100vh' }} /> */}
        </Container>
    )
}
       



export default HomePage