import { Link, NavLink } from 'react-router-dom';
import './Header.css'
import Users from '../Users/Users';
const Header = () => {
    return (
        <div>
            <nav>
                <NavLink to='/'>Home</NavLink>
                <NavLink to='/contact'>Conatact Us</NavLink>
                <NavLink to='/about'>About</NavLink>
                <NavLink to='/users'>Users</NavLink>
                <NavLink to='/comments'>Comments</NavLink>

            </nav>
        </div>
    );
};

export default Header;