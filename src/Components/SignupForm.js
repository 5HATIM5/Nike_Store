import React from 'react';
import './SignupForm.css';
import PersonIcon from '@mui/icons-material/Person';
import MailIcon from '@mui/icons-material/Mail';
import LockIcon from '@mui/icons-material/Lock';
import { Box } from '@mui/system';
import { TextField } from '@mui/material';
import Fade from "react-reveal/Fade";


const SignupForm = () => {
    return <div className='SignupForm'>
        <Fade>
            <Box sx={{ display: 'flex', alignItems: 'flex-end' }} className="form-group1">
                <PersonIcon sx={{ color: 'black', mr: 1, my: 0.5 }} className='input_icon' />
                <TextField id="input-with-sx" label="Name" variant="standard" sx={{ width: '40ch' }} className='form_input'></TextField>
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'flex-end' }} className="form-group">
                <MailIcon sx={{ color: 'black', mr: 1, my: 0.5 }} className='input_icon' />
                <TextField id="input-with-sx" label="Email" variant="standard" sx={{ width: '40ch' }} className='form_input'></TextField>
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'flex-end' }} className="form-group">
                <LockIcon sx={{ color: 'black', mr: 1, my: 0.5 }} className='input_icon' />
                <TextField id="input-with-sx" label="Password" variant="standard" sx={{ width: '40ch' }} className='form_input'></TextField>
            </Box>
            <div className='form_submit_signup'>
                <span className='fgt-pass'>Forgot Your Password ?</span>
                <button className='submit_btn'>Login</button>
            </div>
        </Fade>

    </div>;
};

export default SignupForm;
