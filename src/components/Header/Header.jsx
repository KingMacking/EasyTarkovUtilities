import React from 'react'
import { Link } from "react-router-dom"

const Header = () => {
    return (
        <header>
            <nav>
                <ul>
                    <li><Link to={"maps"}>Maps</Link></li>
                    <li><Link to={"items"}>Items Shop List</Link></li>
                </ul>
            </nav>
        </header>
    )
}

export default Header