/* eslint-disable react/prop-types */
const COLORS = {
    black: {
        dark: {
            bg: "#262626",
            header: "#FFFFFF",
            text: "#C7C7C7"
        },
        light: {
            bg: "#FFFFFF",
            header: "#111827",
            text: "#6B7280"
        }
    },
    blue: {
        dark: {
            bg: "#1E40AF",
            header: "#FFFFFF",
            text: "#E8EDFF"
        },
        light: {
            bg: "#E0E7FF",
            header: "#1E40AF",
            text: "#1C51B9"
        }
    },
    magenta: {
        dark: {
            bg: "#A9229B",
            header: "#FFFFFF",
            text: "#FFE9FD"
        },
        light: {
            bg: "#FFF3FC",
            header: "#A9229B",
            text: "#C7369E"
        }
    },
    green: {
        dark: {
            bg: "#47AA5D",
            header: "#FFFFFF",
            text: "#E3FFE9"
        },
        light: {
            bg: "#E7FFF3",
            header: "#137A2A",
            text: "#3C8C4E"
        }
    }
}

export default function Tooltip({header, text, style = "dark", color = "black"}) {
    if(style != "dark" && style != "light") {
        console.log("style can be either dark or light")
        style = "dark"
    }

    const colors = COLORS[color][style]

    return <div className="tooltip" style={{background: colors.bg, position: "relative"}}>
        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path 
                d="M17 10V3C17 1.89543 16.1046 1 15 1H3C1.89543 1 1 1.89543 1 3V10M17 10V15C17 16.1046 
                16.1046 17 15 17H3C1.89543 17 1 16.1046 1 15V10M17 10H14.4142C14.149 10 13.8946 10.1054 13.7071
                10.2929L11.2929 12.7071C11.1054 12.8946 10.851 13 10.5858 13H7.41421C7.149 13 6.89464 12.8946 
                6.70711 12.7071L4.29289 10.2929C4.10536 10.1054 3.851 10 3.58579 10H1" 
                stroke={colors.text} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
            />
        </svg>

        <div className="tooltip-content">
            <h3 className="tooltip-header" style={{color: colors.header}}>{header}</h3>
            <p className="tooltip-text" style={{color: colors.text}}>{text}</p>
        </div>

        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd"
                clipRule="evenodd"
                d="M4.29289 4.29289C4.68342 3.90237 5.31658 3.90237 5.70711 4.29289L10 8.58579L14.2929 
                4.29289C14.6834 3.90237 15.3166 3.90237 15.7071 4.29289C16.0976 4.68342 16.0976 5.31658
                15.7071 5.70711L11.4142 10L15.7071 14.2929C16.0976 14.6834 16.0976 15.3166 15.7071 
                15.7071C15.3166 16.0976 14.6834 16.0976 14.2929 15.7071L10 11.4142L5.70711 15.7071C5.31658
                16.0976 4.68342 16.0976 4.29289 15.7071C3.90237 15.3166 3.90237 14.6834 4.29289 
                14.2929L8.58579 10L4.29289 5.70711C3.90237 5.31658 3.90237 4.68342 4.29289 4.29289Z"
                fill={colors.text}  
            />
        </svg>
        <div
        style={{
          content: '""',
          position: 'absolute',
          bottom: '-14px',
          left: '24px',
          width: 0,
          height: 0,
          borderLeft: '20px solid transparent',
          borderRight: '20px solid transparent',
          borderTop: '20px solid ' + colors.bg
        }}
      />
    </div>
}