import { useState, useRef } from 'react';
import chevron from '../../assets/chevron.svg';
import './Collapse.scss';
import PropTypes from 'prop-types';

function Collapse({ title, content }) {
    
    // État pour gérer la classe 'active'
    const [setActive, setActiveState] = useState('');

    // État pour gérer la hauteur du contenu
    const [setHeight, setHeightState] = useState(() => '0px');

    // État pour gérer la rotation de l'icône chevron
    const [setRotate, setRotateState] = useState(() => 'collapse-icon');

    // Référence pour obtenir la hauteur du contenu
    const contentCollapse = useRef(null);

    // Fonction pour basculer l'état du collapse
    const toggleCollapse = () => {
        console.log('Before toggle:', setActive, setHeight, setRotate);

        setActiveState(setActive === '' ? 'active' : '');
        setHeightState(
            setActive === 'active'
                ? '0px'
                : `${contentCollapse.current.scrollHeight}px`
        );
        setRotateState(
            setActive === 'active' ? 'collapse-icon' : 'collapse-icon rotate'
        );

        console.log('After toggle:', setActive, setHeight, setRotate);
    };

    // Modification de la structure du contenu pour prendre en charge des paires clé-valeur
    const contentArray = Array.isArray(content) ? content : [{ key: '', value: content }];

    return (
        <div className="collapse-section">
            {/* Bouton pour basculer le collapse */}
            <button className={`collapse ${setActive}`} onClick={toggleCollapse}>
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
                    {contentArray.map((item, index) => (
                        <div key={`${item.key}-${index}`} className="collapse-item">
                            <div className="collapse-key">{item.key}</div>
                            <div className="collapse-value">{item.value}</div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

Collapse.propTypes = {
    title: PropTypes.string.isRequired,
    content: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.arrayOf(PropTypes.string),
    ]).isRequired,
};

export default Collapse;
