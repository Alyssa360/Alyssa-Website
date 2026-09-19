import { NavLink } from 'react-router-dom'
import './navbar.css'

export default function Navbar() {
    return (
        <nav className="navbar">
            <div className="nav_links">
                <NavLink to="/" className="nav_button">
                    Home
                </NavLink>

                <NavLink to="/experience" className="nav_button">
                    Experience
                </NavLink>

                <NavLink to="/about" className="nav_button">
                    About Me
                </NavLink>
            </div>
        </nav>
    )
}