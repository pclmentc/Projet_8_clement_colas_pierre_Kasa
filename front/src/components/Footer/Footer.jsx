import './Footer.scss';

import logo1 from '../../assets/K.svg';
import logo2 from '../../assets/maison.svg';
import logo3 from '../../assets/s.svg';
import logo4 from '../../assets/a.svg';

function Footer() {
	// Tableau contenant les logos
	const logos = [logo1, logo2, logo3, logo4];
	//Année dynamique
	const currentYear = new Date().getFullYear();

	return (
		<footer className="footer-wrapper">
			<div className='footer-logos'>
				{logos.map((logo, index) => (
					<img key={index} src={logo} className="footer-logo" alt={`Kasa Logo ${index + 1}`} />
				))}
			</div>
			<p className="footer-credit">© {currentYear} Kasa. All rights reserved</p>
		</footer>
	);
}

export default Footer;