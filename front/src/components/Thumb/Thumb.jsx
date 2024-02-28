import { Link } from 'react-router-dom'

import './Thumb.scss'

function Thumb({ link, cover, title }) {
	return (
		<div className="thumb">
			<Link to={link}>
				<div className="thumb-cover-wrapper">
					<img src={cover} alt="" />
				</div>
				<h2 className="thumb-title">{title}</h2>
			</Link>
		</div>
	)
}

export default Thumb