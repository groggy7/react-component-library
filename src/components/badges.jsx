import PropTypes from 'prop-types';

const COLORS = {
    gray: { bg: '#F3F4F6', text: '#1F2937' },
    red: { bg: '#FEE2E2', text: '#991B1B' },
    yellow: { bg: '#FEF3C7', text: '#92400E' },
    green: { bg: '#D1FAE5', text: '#065F46' },
    blue: { bg: '#DBEAFE', text: '#1E40AF' },
    indigo: { bg: '#E0E7FF', text: '#3730A3' },
    purple: { bg: '#EDE9FE', text: '#5B21B6' },
    pink: { bg: '#FCE7F3', text: '#9D174D' }
};

export default function Badge({ variant = "pill", color = "gray", children }) {
    const baseStyles = {
        padding: ".2em .8em",
        borderRadius: variant === "square" ? "4px" : "12px",
        color: COLORS[color].text,
        backgroundColor: COLORS[color].bg,
        display: "inline-block"
    }

    return (
        <div 
            className={`badge`}
            style={baseStyles}
        >
            {children}
       </div>  
    ) 
}

Badge.propTypes = {
    variant: PropTypes.oneOf(['square', 'pill']),
    children: PropTypes.string.isRequired,
    color: PropTypes.oneOf(Object.keys(COLORS))
};