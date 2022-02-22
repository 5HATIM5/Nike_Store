import React from 'react';
import '../AuthComponentsStyling/LoginForm.css';
import MailIcon from '@mui/icons-material/Mail';
import LockIcon from '@mui/icons-material/Lock';
import { Box } from '@mui/system';
import { TextField } from '@mui/material';
import Fade from "react-reveal/Fade";


const LoginForm = () => {
    return <div className='loginForm'>
        <Fade>
            <Box sx={{ display: 'flex', alignItems: 'flex-end' }} className="form-group1">
                <MailIcon sx={{ color: 'black', mr: 1, my: 0.5 }} className='input_icon' />
                <TextField id="input-with-sx" label="Email" variant="standard" sx={{ width: '40ch' }} className='form_input'></TextField>
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'flex-end' }} className="form-group">
                <LockIcon sx={{ color: 'black', mr: 1, my: 0.5 }} className='input_icon' />
                <TextField id="input-with-sx" label="Password" variant="standard" sx={{ width: '40ch' }} className='form_input'></TextField>
            </Box>
            <div className='form_submit_login'>
                <span className='fgt-pass'>Forgot Your Password ?</span>
                <button className='submit_btn'>Login</button>
            </div>
        </Fade>
    </div>;
};

export default LoginForm;
