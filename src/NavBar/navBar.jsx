
import React, { useState } from 'react';
import './navBar.css'; 
import { UilSearch } from '@iconscout/react-unicons';
import { UilHouseUser } from '@iconscout/react-unicons';
import { UilChatBubbleUser } from '@iconscout/react-unicons';
import { UilSetting } from '@iconscout/react-unicons';

function NavBar() {
    const [activeMenuItem, setActiveMenuItem] = useState('Home');

    const handleMenuItemClick = (menuItem) => {
        setActiveMenuItem(menuItem);
    };

    return (
        <main>
            <div className="container">
                <div className="left">
                    <div className="sidebar">
                        <a 
                            className={`menu-item ${activeMenuItem === 'Home' ? 'active' : ''}`} 
                            onClick={() => handleMenuItemClick('Home')}
                        >
                            <span className='i'><UilHouseUser/></span><h3>Home</h3>
                        </a>
                        <a 
                            className={`menu-item ${activeMenuItem === 'Explore' ? 'active' : ''}`} 
                            onClick={() => handleMenuItemClick('Explore')}
                        >
                            <span className='i'><UilSearch/></span><h3>Explore</h3>
                        </a>
                        <a 
                            className={`menu-item ${activeMenuItem === 'ZyRoom' ? 'active' : ''}`} 
                            onClick={() => handleMenuItemClick('ZyRoom')}
                        >
                            <span className='i'><UilChatBubbleUser/></span><h3>ZyRoom</h3>
                        </a>
                        <a 
                            className={`menu-item ${activeMenuItem === 'Settings' ? 'active' : ''}`} 
                            onClick={() => handleMenuItemClick('Settings')}
                        >
                            <span className='i'><UilSetting/></span><h3>Settings</h3>
                        </a>
                    </div>
                </div>
            </div>
        </main>
    );
}

export default NavBar;
