import logo from '../../assets/LOGO.svg'
import './Navbar.scss'


function Navbar() {
    
    return (
        <div className='lmj-navbar'>
            <img src={logo} alt='Kasa' className='lmj-logo' />
            <div className='categorie'>
            <p className='accueilButton'>Accueil</p>
            <p className='proposButton'>A propos</p>
            </div>
        </div>
    )
}

export default Navbar;