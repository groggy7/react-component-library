/* eslint-disable react/prop-types */
import quoteIcon from '../assets/quote.svg'

export default function Testimonial({img, text, name, title, logo}) {
    let style = {}

    if(img) {
        style = {
            backgroundColor: "#2545B8",
            color: "white"
        }
    } else {
        style = {
            backgroundColor: "white",
        }
    }
    
    return img ? (
        <div className="testimonial" style={style}>
            <img src={img} alt='photo of the person' className='person-image' />
            <div className='testimonial-content'>
                <img src={quoteIcon} alt='quote icon' className='quote-icon' />
                <p className="testimonial-text">{text}</p>
                <p className='testimonial-person-info'>
                    <span className='testimonial-person-name'>{name}</span>
                    <span>{title}</span>
                </p>
            </div>
        </div>
    ) : (
        <div className='testimonial-no-image'>
            <div className="logo-section">
                <img src={logo} alt='logo' />
            </div>
            <p className="testimonial-text">{text}</p>
            <div className='testimonial-person-info'>
                <span className='testimonial-person-name'>{name}</span>
                <svg width="8" height="20" viewBox="0 0 8 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5 0H8L3 20H0L5 0Z" fill="#2E59F3"/></svg>
                <span className='testimonial-person-title'>{title}</span>
            </div>
        </div>
    )
}