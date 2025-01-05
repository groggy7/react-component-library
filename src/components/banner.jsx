import PropTypes from 'prop-types';
import errorIcon from "../assets/error.svg"
import neutralIcon from "../assets/neutral.svg"
import successIcon from "../assets/success.svg"
import warningIcon from "../assets/warning.svg"

const VARIANTS = {
    success: {
        color: "#047857",
        headerColor: "#065F46",
        backgroundColor: "#ECFDF5",
        icon: successIcon
    },
    warning: {
        color: "#B45309",
        headerColor: "#92400E",
        backgroundColor: "#FFFBEB",
        icon: warningIcon
    },
    error: {
        color: "#B45309",
        headerColor: "#92400E",
        backgroundColor: "#FEF2F2",
        icon: errorIcon
    },
    neutral: {
        color: "#1C51B9",
        headerColor: "#1E40AF",
        backgroundColor: "#EFF6FF",
        icon: neutralIcon
    }
}

export default function Banner({variant = "neutral", isSingleLine = false, header, children}) {
    return (
        <div className="banner" style={{backgroundColor: VARIANTS[variant].backgroundColor}}>
            <img src={VARIANTS[variant].icon} alt={`${variant} icon`} />
            <p 
                className="banner-header"
                style={{
                    color: VARIANTS[variant].headerColor
                }}
            >
                {header}
            </p>
            {!isSingleLine && <p className='banner-text' style={{color: VARIANTS[variant].color}}>{children}</p>}
        </div>
    )
}

Banner.propTypes = {
    variant: PropTypes.oneOf(['success', 'warning', 'error', 'neutral']),
    isSingleLine: PropTypes.bool.isRequired,
    header: PropTypes.string.isRequired,
    children: PropTypes.node
};