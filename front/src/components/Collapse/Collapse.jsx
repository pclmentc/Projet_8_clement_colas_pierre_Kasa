import { useState, useRef } from 'react'
import chevron from '../../assets/chevron.svg'
import './Collapse.scss'
import PropTypes from 'prop-types';

function Collapse({ title, content }) {
    // État pour gérer la classe 'active'
    const [setActive, setActiveState] = useState('')

    // État pour gérer la hauteur du contenu
    const [setHeight, setHeightState] = useState(() => '0px');

    // État pour gérer la rotation de l'icône chevron
    const [setRotate, setRotateState] = useState(() => 'collapse-icon');

    // Référence pour obtenir la hauteur du contenu
    const contentCollapse = useRef(null)

    // Fonction pour basculer l'état du collapse
    const toggleCollapse = () => {
        setActiveState(setActive === '' ? 'active' : '')
        setHeightState(
            setActive === 'active'
                ? '0px'
                : `${contentCollapse.current.scrollHeight}px`
        )
        setRotateState(
            setActive === 'active' ? 'collapse-icon' : 'collapse-icon rotate'
        )
    }

    // Tableau pour stocker le contenu, gérant à la fois le contenu unique et le tableau de contenu
    const contentArray = []
    if (!Array.isArray(content)) {
        contentArray.push(content)
    } else {
        for (let i = 0; i < 9; i++) {
            contentArray.push(content[i])
        }
    }

    return (
        <div className="collapse-section">
            {/* Bouton pour basculer le collapse */}
            <button
                className={`collapse ${setActive}`}
                onClick={toggleCollapse}
            >
                <span className="collapse-title">{title}</span>
                <img src={chevron} className={`${setRotate}`} alt="" />
            </button>

            {/* Zone de contenu qui se développe/rétracte */}
            <div
                ref={contentCollapse}
                style={{ maxHeight: `${setHeight}` }}
                className="collapse-content"
            >
                {/* Affichage du contenu en fonction de contentArray */}
                <div className="collapse-text">
                    {contentArray.map((content, index) => (
                        <div key={`${content}-${index}`}>{content}</div>
                    ))}
                </div>
            </div>
        </div>
    )
}

Collapse.propTypes = {
    title: PropTypes.string.isRequired,
    content: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.arrayOf(PropTypes.string),
    ]).isRequired,
};

export default Collapse
