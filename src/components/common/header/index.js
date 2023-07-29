import React from 'react'
import './header.css'
import { FiSearch } from 'react-icons/fi'; 
import {IoLocationSharp} from 'react-icons/io5'
import {AiFillCaretDown} from 'react-icons/ai'
import {BsFillPersonFill} from 'react-icons/bs'
import styled from 'styled-components'

const Header= () =>{
    return (
        <div className="max-width-header">
          <div className="header-right">
            <img src="https://b.zmtcdn.com/web_assets/b40b97e677bc7b2ca77c58c61db266fe1603954218.png"
              alt="Zoomato-logo" className='header-logo' />

                <div className="header-location-search-container">
                    <div className="location-wrapper">
                        <div className="location-icon-name">
                            
                            <Location/>
                            <div>Banglore</div>
                            
                        </div>
                        <AiFillCaretDown/>  
                    </div>
                    <div className='location-search-separator'></div>
                    <div className='header-searchbar'>
                    <Search />
                        <input placeholder='Search for restaurant , cuisine, dish'
                        className='search-input'/>
                    </div>
                </div>
                <div className='profile-wrapper'>
                    <Fill/>
                    <span className='header-username'>BHAVYA</span>
                </div>
            </div>
        </div>
    );
}

const Location = styled(IoLocationSharp)`
        color:var(--zoomato-red);`;
const Search = styled(FiSearch)`
        color:black;
        size:30px;`;
const Fill = styled(BsFillPersonFill)`
        color:red;
        transform: scale(2);`;

export default Header;