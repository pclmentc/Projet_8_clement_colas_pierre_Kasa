import logo1 from '../../assets/K.svg'
import logo2 from '../../assets/maison.svg'
import logo3 from '../../assets/s.svg'
import logo4 from '../../assets/a.svg'
import './Footer.scss'

function Footer() {
	return (
		<footer className="footer-wrapper">
            <div className='footer-kasa'>
			<img src={logo1} className="footer-logo" alt="Kasa Logo" />
            <img src={logo2} className="footer-logo" alt="Kasa Logo" />
            <img src={logo3} className="footer-logo" alt="Kasa Logo" />
            <img src={logo4} className="footer-logo" alt="Kasa Logo" />
            </div>
			<h3 className="footer-credit">© 2020 Kasa. All rights reserved</h3>
		</footer>
	)
}

export default Footer