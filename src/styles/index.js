import React from 'react'

const Globals = () => {
  return (
    <style jsx global>
      {`
        @font-face {
          font-family: Flexo;
          font-weight: bold;
          font-display: swap;
          src: url(/fonts/Flexo-Bold.woff2) format('woff2');
        }

        @font-face {
          font-family: Flexo-Demi;
          font-display: swap;
          src: url(/fonts/Flexo-Regular.woff2) format('woff2');
        }

        #preloader {
          width: 100%;
          height: 110vh;
          position: fixed;
          z-index: 99;
          background-color: #564596;
          display: grid;
          place-items: center;

          transition: opacity 1.5s ease-in-out;
        }

        .center {
          display: flex;
          aling-items: center;
          justify-content: center;
          height: 100%;
        }

        #preloader h1 {
          color: white;
          font-size: 5rem;
          text-align: center;
          font-family: Flexo, sans-serif;
          animation: fadeIn 1s linear;
        }

        .activeLink h2,
        .activeLink p {
          color: #2ab4a7;
        }

        .react-Slidy {
          -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
          backface-visibility: hidden;
          background: transparent;
          min-height: 50px;
          position: relative;
          user-select: none;
        }
        .react-Slidy-arrow {
          align-items: center;
          bottom: 0;
          display: flex;
          margin: auto 0;
          opacity: 0;
          position: absolute;
          top: 0;
          transition: opacity 0.3s ease;
          width: auto;
          z-index: 1;
        }
        .react-Slidy-arrowLeft {
          left: 0;
        }
        .react-Slidy-arrowRight {
          right: 0;
        }
        @media screen and (max-width: 850px) {
          .react-Slidy-arrow {
            display: none;
          }
        }
        .react-Slidy-prev,
        .react-Slidy-next {
          background: rgba(255, 255, 255, 0.8);
          cursor: pointer;
          height: 20%;
          justify-content: center;
          min-height: 56px;
          width: 40px;
        }
        .react-Slidy-next {
          border-radius: 10px 0 0 10px;
        }
        .react-Slidy-next::after {
          margin-right: 6px;
          transform: rotate(45deg);
          border-right: 3px solid #aaaaaa;
          border-top: 3px solid #aaaaaa;
          content: '';
          display: inline-block;
          height: 24px;
          width: 24px;
        }
        .react-Slidy-prev {
          border-radius: 0 10px 10px 0;
        }
        .react-Slidy-prev::after {
          margin-left: 6px;
          transform: rotate(-135deg);
          border-right: 3px solid #aaaaaa;
          border-top: 3px solid #aaaaaa;
          content: '';
          display: inline-block;
          height: 24px;
          width: 24px;
        }
        .react-Slidy--fullHeight {
          height: 100%;
        }
        .react-Slidy--fullHeight > div li img {
          height: 100%;
        }
        .react-Slidy--fullWidth > div li img {
          width: 100%;
        }
        .react-Slidy--contain li img {
          object-fit: contain;
        }
        .react-Slidy--cover li img {
          object-fit: cover;
        }
        .react-Slidy:hover > .react-Slidy-arrow {
          opacity: 1;
        }
        .react-Slidy:hover > .react-Slidy-arrow[disabled] {
          opacity: 0.2;
        }
        .react-Slidy > div {
          font-size: 0;
          max-height: 100%;
          overflow: hidden;
          position: relative;
          transition: all 1s ease-in-out;
          white-space: nowrap;
          width: 100%;
        }
        .react-Slidy > div > ul {
          display: block;
          list-style: none;
          padding: 0;
          width: 100%;
          will-change: transform, transition-timing, transition-duration;
        }
        .react-Slidy > div > ul > li {
          display: inline-block;
          position: relative;
          user-select: none;
          vertical-align: middle;
          width: 100%;
        }
        .react-Slidy > div img {
          -webkit-backface-visibility: hidden;
          -webkit-perspective: 1000;
          display: block;
          height: auto;
          margin: 0 auto;
          max-width: 100%;
          pointer-events: none;
          touch-action: none;
          user-select: none;
        }

        @keyframes fadeDown {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
      `}
    </style>
  )
}

export default Globals
