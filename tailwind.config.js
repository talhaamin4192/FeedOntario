/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      container: {
        center: true,
      },
      keyframes: {
        heartbeat: {
          "0%": { transform: "scale(0.9)" },
          "25%": { transform: "scale(1.2)" },
          "75%": { transform: "scale(0.9)" },
          "100%": { transform: "scale(1.2)" },
        },
        toTop: {
          "0%": { transform: "translateY(100%)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" }
        },
        toLeft: {
          "0%": { transform: "translatex(100%)", opacity: "0" },
          "100%": { transform: "translatex(0)", opacity: "1" }
        },
        toRight: {
          "0%": { transform: "translatex(-100%)", opacity: "0" },
          "100%": { transform: "translatex(0)", opacity: "1" }
        }
        ,
        toSpin:{
          to:{
            transform:"rotate(360deg)"
          }
        
        }
      }
      ,
      animation: {
        heart: "heartbeat 2s infinite ",
        top: "toTop 1s linear",
        left: "toLeft 0.9s linear",
        Right: "toRight 0.9s linear",
        rotates:"toSpin 25s infinite"

      }
      ,
      fontFamily: {
        "roboto": ['"Roboto-Regular"','sans-serif']
      }
      ,
      borderWidth: {
        "1": "1px"
      }
      ,
      fontSize: {
        "p-18": "18px",
        "p-40": "40px",
        "12": "12px",
        "22": "22px"
      }
      ,
      colors: {
        "blue-1": "#003D4C",
        "white-1": "#F2F2F2",
        "yellow-1": "#FFC709",
        "blue-2": "#24C1D8",
        "blue-3": "#00aec7",
        "blue-dark": "#012f3b",
        customGreen: '#28724F',

      },
      backgroundImage: {
        heroBg: "url(assets/hero-bg.jpg)",
        waves: "url(assets/shape_waves_top_bluelight.svg)",
        donateBg: "linear-gradient(0deg, rgba(0,0,0,0.75) 0%, rgba(0,0,0,0.25) 100%), url(assets/donate-bg.jpeg)",
        "waves_top": "url(assets/shape_waves_top.svg)",
        "waves_bottom": "url(assets/shape_waves_bottom.svg)",
        "arrow_end": "url(assets/arrow_end.svg)",
        
      }
      ,
      screens: {
        "max-lgMd": { max: "992px" },

      }
    },
  },
  plugins: [],
}

