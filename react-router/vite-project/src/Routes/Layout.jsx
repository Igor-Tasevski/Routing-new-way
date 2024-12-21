import React from 'react'
import { Outlet } from 'react-router-dom'
import HeaderComponent from '../Components/HeaderComponent'
import FooterComponent from '../Components/FooterComponent'


//we need to add outlet to tell that different content will be shown 
//Header and Footer  will be on each page present
const Layout = () => {
    return (
        <div>
            < HeaderComponent />
            <Outlet />
            <FooterComponent />
        </div>
    )
}

export default Layout