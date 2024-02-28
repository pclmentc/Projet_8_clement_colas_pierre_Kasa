import logo from '../../assets/LOGO.svg'
import './Navbar.scss'
import { Link } from 'react-router-dom';


function Navbar() {
    
    return (
        <div className='lmj-navbar'>
            <img src={logo} alt='Kasa' className='lmj-logo' />
            <div className='categorie'>

            <Link className='accueilButton' to='/'> 
               Accueil
            </Link>
            
            <Link className='proposButton' to='/a-propos'>
               A propos
            </Link>
            
            </div>
        </div>
    )
}

export default Navbar;