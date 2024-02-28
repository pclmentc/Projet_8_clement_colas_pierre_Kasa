import logo from '../../assets/LOGO.svg'
import './Navbar.scss'
import { NavLink } from 'react-router-dom';


function Navbar() {
    
    return (
        <div className='lmj-navbar'>
            <img src={logo} alt='Kasa' className='lmj-logo' />
            <div className='categorie'>

            <NavLink exact to='/' activeClassName='active-link' > 
               Accueil
            </NavLink>
            
            <NavLink to='/a-propos' activeClassName='active-link' >
               À propos
            </NavLink>
            
            </div>
        </div>
    )
}

export default Navbar;