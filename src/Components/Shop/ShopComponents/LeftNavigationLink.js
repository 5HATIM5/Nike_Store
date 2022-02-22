import React, { useState} from 'react';
import '../ShopComponentsStyling/LeftNavigationLink.css'
import AddIcon from '@mui/icons-material/Add';


const LeftNavigationLink = ({ name, info }) => {

    const [show, setshow] = useState(false)
    return (
        <div className='Sidebar_links'>
            <span onClick={() => (setshow(prevCheck => !prevCheck))}><AddIcon className="addicon" />{name}</span>
            <div className={`brands ${show && 'show'}`}>
                {
                    info.map((data) => (
                        <p><li>{data}</li></p>
                    ))
                }
            </div>

        </div>
    )
}

export default LeftNavigationLink 