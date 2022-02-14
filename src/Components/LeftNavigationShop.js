import React, { useState, useEffect } from 'react';
import './LeftNavigationShop.css';
import { requests, header } from './requests.js';
import axios from 'axios';
import AddIcon from '@mui/icons-material/Add';

const LeftNavigationShop = () => {

    const [brands, setBrands] = useState([]);
    const [showBrands, setshowBrands] = useState(false)
    const [showgender, setshowGender] = useState(false)

    useEffect(() => {
        axios.get(requests.fetchBrands, {
            headers: header
        })
            .then(function (response) {
                console.log(response.data.results);
                setBrands(response.data.results);
            })
    }, [])

    return (
        <div className='LeftNavigationShop'>

            <span><AddIcon className="addicon" onClick={() => (setshowBrands(prevCheck => !prevCheck))} />Brands</span>
            <div className={`brands ${showBrands && 'show'}`}>
                {
                    brands.map((brand) => (
                        <p><li>{brand}</li></p>
                    ))
                }
            </div>

            <span><AddIcon className="addicon" onClick={() => (setshowGender(prevCheck => !prevCheck))} />Gender</span>
            <div className={`brands ${showgender && 'show'}`}>
               <p><li>Male</li></p>
               <p><li>Female</li></p>
            </div>




        </div>
    )
}

export default LeftNavigationShop