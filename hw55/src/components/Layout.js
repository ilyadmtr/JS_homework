import React from 'react';
import {Link, NavLink, Outlet} from "react-router-dom";

const Layout = () => {
    return (
        <>
            <nav className='nav-bar'>
                <ul>
                    <li><Link to={'/'}>Home page</Link></li>
                    <li><NavLink to={'/townInfo'}>Town info page</NavLink></li>
                    <li><NavLink to={'/mostSightSeen'}>Most sight seen page</NavLink></li>
                    <li><NavLink to={'/sightsSeen'}>Sights seen page</NavLink></li>
                    <li><NavLink to={'/photoPage'}>Photo page</NavLink></li>
                </ul>
            </nav>
            <Outlet/>
        </>
    );
};

export default Layout;