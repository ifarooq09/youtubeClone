import { Stack } from '@mui/material'
import { Link } from 'react-router-dom'

import {logo} from '../utils/constants'
import SearchBar from './SearchBar'

const Navbar = () => (
     <Stack 
        direction="row" 
        alignItems="center"
        p={2}
        sx={{position: 'sticky', background: '#fff', top: 0, justifyContent: 'space-between', marginTop: '0px'}}>

        <Link to="/" style={{display: 'flex', alignItems: 'center'}}>
          <img src={logo} alt='logo' height={45} /> 
          <span style={{
            color: '#000',
            marginLeft: '10px',
            fontSize: '20px',
            fontWeight: 'bolder',
            fontFamily: 'Courier',
          }}> 
          IF - Youtube Clone
          </span>
        </Link>
        <SearchBar />
      </Stack>  

  )



export default Navbar
