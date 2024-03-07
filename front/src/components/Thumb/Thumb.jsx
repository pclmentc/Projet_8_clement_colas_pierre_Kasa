import { Link } from 'react-router-dom'
import PropTypes from 'prop-types';
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
Thumb.propTypes = {
    link: PropTypes.string.isRequired,
    cover: PropTypes.string.isRequired,
	title: PropTypes.string.isRequired,
};
export default Thumb