import PropTypes from 'prop-types'
import defaultCardIcon from '../assets/card-icon.svg'

export default function Card({icon = defaultCardIcon, header, text, color}) {
    const defaultCardIconStyles = {
        backgroundColor: color || '#3F75FE',
        borderRadius: '6px',
        padding: '10px',
        position: 'absolute',
        top: '-20px',
        left: '50%',
        transform: 'translateX(-50%)',
    };

    return <div className='card'>
        <img src={icon}
            className='default-card-icon'
            style={defaultCardIconStyles}
            alt='card icon' 
        /> 
        <h3 className='card-header'>{header}</h3>
        <p className='card-text'>{text}</p>
    </div>
}

Card.propTypes = {
    icon: PropTypes.node,
    header: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    color: PropTypes.string.isRequired
};