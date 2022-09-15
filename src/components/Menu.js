import React from 'react'
import MenuItem from './MenuItem'

function Menu() {
    return (
        <div className="flex justify-center md:justify-between items-center">
            <div className="logo">
                <a href="/" className="inline-block py-5" title="Home">
                    <img src="logo.svg" alt="logo" />
                </a>
            </div>
            <div className="menu md:block hidden">
                <ul className="flex">
                    <MenuItem link="/">Home</MenuItem>
                    <MenuItem link="/">About</MenuItem>
                    <MenuItem link="/">Projects</MenuItem>
                    <MenuItem link="/">Blog</MenuItem>
                    <MenuItem link="/">Contact</MenuItem>
                </ul>
            </div>
        </div>
    )
}

export default Menu