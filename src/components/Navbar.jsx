import React from 'react'
import '../styles/Navbar.css'
import { SiGithub } from 'react-icons/si'

import '../styles/Checkbox.css'
import whiteLogo from '../assets/logo-white.svg'

const Navbar = () => {
    return (
        <>
            <nav className="navbar navbar-expand-lg" data-bs-theme="dark">
                <div className="container-nav">
                    <a href="/"><img src={whiteLogo} width={180}/></a>
                    <a href="https://github.com/emidev-arg"><SiGithub size={26} /></a>
                </div>
            </nav>
        </>
    )
}

export default Navbar