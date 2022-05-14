import { Link,Outlet } from "react-router-dom";
import React from 'react'

const Layout = () => {
  return (
    <>
    <nav>
        <ul className="ul_nav">
            <li className="li">
                <Link to='/'>HOME</Link>
            </li>
            <li className="li">
                <Link to='/AUDIO'>AUDIO</Link>
            </li>
            <li className="li">
                <Link to='/VIDEO'>VIDEOS</Link>
            </li>

        </ul>
    </nav>
    <Outlet/>
    </>
  )
}

export default Layout