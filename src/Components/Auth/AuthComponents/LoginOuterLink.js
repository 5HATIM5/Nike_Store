import React from 'react';
import '../AuthComponentsStyling/LoginOuterLink.css'
import googlelogo from '../../../Assets/google_logo.png';
import fblogo from '../../../Assets/fb_logo.png';

const LoginOuterLink = () => {
    return <div className='loginOuterLink'>
        <span>Or Login With</span>
        <div className='other_log_opt'>
            <i><img className="sm-logo" src={googlelogo} alt="Google" /></i>
            <span>Google</span>
        </div>
        <div className='other_log_opt'>
            <i><img className="sm-logo" src={fblogo} alt="Facebook"/></i>
            <span>Facebook</span>
        </div>
    </div>;
};

export default LoginOuterLink;
