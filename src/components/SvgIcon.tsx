import type { SVGAttributes } from "react";

export type SvgIconName = "bootstrap" | "bootstrap-vue" | "chevron-down" | "css3" | "english" | "external" | "git"
  | "github" | "html5" | "javascript" | "jquery" | "moon" | "phpstorm" | "pinia" | "react" | "react-redux"
  | "react-router" | "russian" | "scss" | "sun" | "tailwind-css" | "telegram" | "typescript" | "vite" | "vue"
  | "vuetify" | "webpack";

interface SvgIconProps extends Pick<SVGAttributes<SVGSVGElement>, "className"> {
  name: SvgIconName;
}

export default function SvgIcon({ className, name }: SvgIconProps) {
  switch (name) {
    case "bootstrap":
      return (
        <svg className={className}>
          <use xlinkHref="#svg-bootstrap" />
        </svg>
      );
    case "bootstrap-vue":
      return (
        <svg className={className}>
          <use xlinkHref="#svg-bootstrap-vue" />
        </svg>
      );
    case "chevron-down":
      return (
        <svg className={className}>
          <use xlinkHref="#svg-chevron-down" />
        </svg>
      );
    case "css3":
      return (
        <svg className={className}>
          <use xlinkHref="#svg-css3" />
        </svg>
      );
    case "english":
      return (
        <svg className={className}>
          <use xlinkHref="#svg-english" />
        </svg>
      );
    case "external":
      return (
        <svg className={className}>
          <use xlinkHref="#svg-external" />
        </svg>
      );
    case "git":
      return (
        <svg className={className}>
          <use xlinkHref="#svg-git" />
        </svg>
      );
    case "github":
      return (
        <svg className={className}>
          <use xlinkHref="#svg-github" />
        </svg>
      );
    case "html5":
      return (
        <svg className={className}>
          <use xlinkHref="#svg-html5" />
        </svg>
      );
    case "javascript":
      return (
        <svg className={className}>
          <use xlinkHref="#svg-javascript" />
        </svg>
      );
    case "jquery":
      return (
        <svg className={className}>
          <use xlinkHref="#svg-jquery" />
        </svg>
      );
    case "moon":
      return (
        <svg className={className}>
          <use xlinkHref="#svg-moon" />
        </svg>
      );
    case "phpstorm":
      return (
        <svg className={className} id="phpstorm" version="1.0" viewBox="0 0 70 70" xmlns="http://www.w3.org/2000/svg">
          <title>PhpStorm</title>
          <linearGradient
            id="phpstorm-gradient-1"
            x1="0.558"
            y1="46.8457"
            x2="29.9473"
            y2="8.0256"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="1.612903e-002" stop-color="#765af8" />
            <stop offset="0.3821" stop-color="#b345f1" />
            <stop offset="0.7581" stop-color="#fa3293" />
            <stop offset="0.9409" stop-color="#ff318c" />
          </linearGradient>
          <linearGradient
            id="phpstorm-gradient-2"
            x1="2.7297"
            y1="48.3788"
            x2="32.0719"
            y2="9.6209"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="1.612903e-002" stop-color="#765af8" />
            <stop offset="0.3821" stop-color="#b345f1" />
            <stop offset="0.7581" stop-color="#fa3293" />
            <stop offset="0.9409" stop-color="#ff318c" />
          </linearGradient>
          <linearGradient
            id="phpstorm-gradient-3"
            x1="50.8568"
            y1="46.405"
            x2="34.2739"
            y2="7.0481"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0.1828" stop-color="#765af8" />
            <stop offset="0.2382" stop-color="#8655f6" />
            <stop offset="0.3449" stop-color="#9f4cf3" />
            <stop offset="0.4425" stop-color="#ae47f2" />
            <stop offset="0.5219" stop-color="#b345f1" />
          </linearGradient>
          <linearGradient
            id="phpstorm-gradient-4"
            x1="63.2656"
            y1="57.3388"
            x2="24.6977"
            y2="27.5158"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="1.612903e-002" stop-color="#765af8" />
            <stop offset="0.3821" stop-color="#b345f1" />
          </linearGradient>
          <polygon fill="url(#phpstorm-gradient-1)" points="39.6,15.2 36.3,5.2 11.9,0 0,13.5 37.2,32.5" />
          <polygon fill="url(#phpstorm-gradient-2)" points="28,41.4 27.3,20.6 0,13.5 6.7,53.6 28,53.4" />
          <polygon
            fill="url(#phpstorm-gradient-3)"
            points="22.1,41 23.4,24.5 43.2,4.2 60.9,7.4 70,30.1 60.5,39.5 45,37 35.4,47.1"
          />
          <polygon fill="url(#phpstorm-gradient-4)" points="43.2,4.2 14.8,29.4 20.3,61.8 43.9,70 70,54.4" />
          <rect fill="#000000" width="43.2" height="43.2" x="13.4" y="13.4" />
          <rect fill="#ffffff" width="16.2" height="2.7" x="17.5" y="48.5" />
          <path
            fill="#ffffff"
            d="M17.3,19h7.3c4.3,0,6.9,2.5,6.9,6.2v0.1c0,4.2-3.2,6.3-7.3,6.3h-3l0,5.4h-3.9L17.3,19z M24.4,28 c2,0,3.1-1.2,3.1-2.7v-0.1c0-1.8-1.2-2.7-3.2-2.7h-3V28H24.4z"
          />
          <path
            fill="#ffffff"
            d="M32.5,34.4l2.3-2.8c1.6,1.3,3.3,2.2,5.4,2.2c1.6,0,2.6-0.6,2.6-1.7V32c0-1-0.6-1.5-3.6-2.3 c-3.6-0.9-6-1.9-6-5.5v-0.1c0-3.3,2.6-5.4,6.3-5.4c2.6,0,4.9,0.8,6.7,2.3l-2.1,3c-1.6-1.1-3.2-1.8-4.7-1.8c-1.5,0-2.3,0.7-2.3,1.6 v0.1c0,1.2,0.8,1.6,3.9,2.4c3.6,1,5.7,2.3,5.7,5.4v0.1c0,3.6-2.7,5.6-6.6,5.6C37.4,37.3,34.7,36.3,32.5,34.4"
          />
        </svg>
      );
    case "pinia":
      return (
        <svg className={className} id="pinia" version="1.0" viewBox="0 0 256 331" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 0h256v331H0z" fill="none" />
          <defs>
            <linearGradient id="SVGlph9Sf5o" x1="55.342%" x2="42.817%" y1="0%" y2="42.863%">
              <stop offset="0%" stop-color="#52ce63" />
              <stop offset="100%" stop-color="#51a256" />
            </linearGradient>
            <linearGradient id="SVGWDHq4cKS" x1="55.349%" x2="42.808%" y1="0%" y2="42.863%">
              <stop offset="0%" stop-color="#52ce63" />
              <stop offset="100%" stop-color="#51a256" />
            </linearGradient>
            <linearGradient id="SVGUFY2CcaJ" x1="50%" x2="50%" y1="0%" y2="58.811%">
              <stop offset="0%" stop-color="#8ae99c" />
              <stop offset="100%" stop-color="#52ce63" />
            </linearGradient>
            <linearGradient id="SVGObkTWdMq" x1="51.378%" x2="44.585%" y1="17.473%" y2="100%">
              <stop offset="0%" stop-color="#ffe56c" />
              <stop offset="100%" stop-color="#ffc63a" />
            </linearGradient>
          </defs>
          <path
            fill="url(#SVGlph9Sf5o)"
            d="M67.56 173.328c30.366-2.985 41.08-27.648 44.735-64.823c3.654-37.175-21.174-70.814-31.502-69.799s-43.15 40.322-46.805 77.497c-3.654 37.175 3.205 60.11 33.572 57.125"
            transform="rotate(-38 72.877 106.136)"
          />
          <path
            fill="url(#SVGWDHq4cKS)"
            d="M184.454 186.277c30.367 2.986 36.394-20.032 32.74-57.207c-3.655-37.175-35.645-76.4-45.973-77.415s-35.989 32.542-32.334 69.717s15.201 61.92 45.567 64.905"
            transform="rotate(52 178.34 119.085)"
          />
          <path
            fill="url(#SVGUFY2CcaJ)"
            d="M129.232 151.601c27.341 0 34.878-26.184 34.878-67.013S138.531 3.745 129.232 3.745S93.605 43.758 93.605 84.588c0 40.829 8.286 67.013 35.627 67.013"
            transform="rotate(7 128.858 77.673)"
          />
          <path
            fill="url(#SVGObkTWdMq)"
            d="M113.386 330.307c56.896 0 103.038-16.528 103.038-91.482s-46.142-136.462-103.038-136.462c-56.897 0-103.002 61.507-103.002 136.462s46.105 91.482 103.002 91.482"
          />
          <ellipse cx="165.427" cy="216.677" fill="#eaadcc" rx="14.717" ry="6.845" />
          <ellipse cx="57.273" cy="212.57" fill="#eaadcc" rx="14.717" ry="6.845" transform="rotate(7 57.273 212.57)" />
          <path d="M96.265 210.285a2.054 2.054 0 1 0-3.406 2.295c3.151 4.676 7.998 7.39 14.373 8.119c6.348.725 12.016-.902 16.877-4.852a2.054 2.054 0 1 0-2.59-3.187c-3.998 3.249-8.563 4.559-13.82 3.958c-5.23-.598-8.986-2.7-11.434-6.333M65.819 178.63a14.67 14.67 0 0 1 10.55 3.945a14.67 14.67 0 0 1 4.672 10.25a14.67 14.67 0 0 1-3.945 10.55a14.67 14.67 0 0 1-10.25 4.672a14.67 14.67 0 0 1-10.55-3.945a14.67 14.67 0 0 1-4.671-10.25a14.67 14.67 0 0 1 3.944-10.55a14.67 14.67 0 0 1 10.25-4.672" />
          <path fill="#fff" d="M66.59 190.932a4.792 4.792 0 1 0-9.579.336a4.792 4.792 0 0 0 9.579-.336" />
          <path d="M154.99 182.366a14.67 14.67 0 0 1 10.55 3.944a14.67 14.67 0 0 1 4.672 10.25a14.67 14.67 0 0 1-3.945 10.551a14.67 14.67 0 0 1-10.25 4.671a14.67 14.67 0 0 1-10.55-3.945a14.67 14.67 0 0 1-4.672-10.25a14.67 14.67 0 0 1 3.945-10.55a14.67 14.67 0 0 1 10.25-4.671" />
          <path
            fill="#fff"
            d="M65.71 175.552c9.824-.343 18.066 7.342 18.409 17.165s-7.342 18.065-17.166 18.408s-18.064-7.342-18.407-17.166c-.343-9.823 7.341-18.064 17.164-18.407m12.252 17.38c-.224-6.423-5.613-11.448-12.037-11.223c-6.422.224-11.447 5.612-11.222 12.035c.224 6.424 5.612 11.448 12.035 11.224s11.448-5.612 11.224-12.036m76.921-13.645c9.824-.343 18.065 7.342 18.408 17.165s-7.342 18.065-17.165 18.408s-18.065-7.342-18.408-17.165s7.342-18.065 17.165-18.408m12.251 17.38c-.224-6.423-5.612-11.447-12.036-11.223s-11.448 5.613-11.223 12.036s5.612 11.448 12.035 11.224c6.424-.225 11.448-5.613 11.224-12.037"
          />
          <path fill="#fff" d="M155.762 194.668a4.792 4.792 0 1 0-9.578.335a4.792 4.792 0 0 0 9.578-.335" />
          <path
            fill="#ecb732"
            d="m38.083 243.16l22.33 23.235l16.022-17.044a3.765 3.765 0 0 1 5.486 5.157l-16.283 17.324l23.1 24.036a3.765 3.765 0 1 1-5.43 5.218l-22.834-23.761l-10.725 11.41a3.765 3.765 0 1 1-5.486-5.158l10.986-11.688l-22.595-23.511a3.765 3.765 0 1 1 5.43-5.218m149.956 0a3.765 3.765 0 1 1 5.429 5.218l-22.596 23.511l10.988 11.688a3.765 3.765 0 0 1-.042 5.201l-.123.121a3.765 3.765 0 0 1-5.322-.165l-10.725-11.41l-22.834 23.762a3.765 3.765 0 0 1-5.197.222l-.127-.116a3.765 3.765 0 0 1-.105-5.324l23.1-24.036l-16.284-17.324a3.765 3.765 0 0 1 .042-5.2l.123-.121a3.765 3.765 0 0 1 5.321.164l16.021 17.044z"
          />
          <path
            fill="#ffc73b"
            d="M136.602 126.74a3.765 3.765 0 0 1 0 5.323l-17.53 17.531l10.684 10.686a3.765 3.765 0 0 1 .12 5.2l-.12.125a3.765 3.765 0 0 1-5.324 0l-10.686-10.686l-10.686 10.686a3.765 3.765 0 1 1-5.324-5.325l10.685-10.686l-17.53-17.53a3.765 3.765 0 0 1-.12-5.2l.12-.125a3.765 3.765 0 0 1 5.324 0l17.531 17.53l17.531-17.53a3.765 3.765 0 0 1 5.325 0"
          />
        </svg>
      );
    case "react":
      return (
        <svg className={className}>
          <use xlinkHref="#svg-react" />
        </svg>
      );
    case "react-redux":
      return (
        <svg className={className}>
          <use xlinkHref="#svg-react-redux" />
        </svg>
      );
    case "react-router":
      return (
        <svg className={className}>
          <use xlinkHref="#svg-react-router" />
        </svg>
      );
    case "russian":
      return (
        <svg className={className}>
          <use xlinkHref="#svg-russian" />
        </svg>
      );
    case "scss":
      return (
        <svg className={className}>
          <use xlinkHref="#svg-scss" />
        </svg>
      );
    case "sun":
      return (
        <svg className={className}>
          <use xlinkHref="#svg-sun" />
        </svg>
      );
    case "tailwind-css":
      return (
        <svg className={className}>
          <use xlinkHref="#svg-tailwind-css" />
        </svg>
      );
    case "telegram":
      return (
        <svg className={className}>
          <use xlinkHref="#svg-telegram" />
        </svg>
      );
    case "typescript":
      return (
        <svg className={className}>
          <use xlinkHref="#svg-typescript" />
        </svg>
      );
    case "vite":
      return (
        <svg className={className} id="vite" version="1.0" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
          <title>Vite</title>
          <linearGradient
            id="vite-gradient-1"
            x1="6.0002"
            y1="32.9999"
            x2="235"
            y2="344"
            gradientUnits="userSpaceOnUse"
            gradientTransform="matrix(.07142 0 0 .07142 1.3398 1.8944)"
          >
            <stop stop-color="#41d1ff" />
            <stop offset="1" stop-color="#bd34fe" />
          </linearGradient>
          <linearGradient
            id="vite-gradient-2"
            x1="194.651"
            y1="8.8182"
            x2="236.076"
            y2="292.989"
            gradientUnits="userSpaceOnUse"
            gradientTransform="matrix(.07142 0 0 .07142 1.3398 1.8944)"
          >
            <stop stop-color="#ffea83" />
            <stop offset="0.0833" stop-color="#ffdd35" />
            <stop offset="1" stop-color="#ffa800" />
          </linearGradient>
          <path
            fill="url(#vite-gradient-1)"
            d="M29.8836 6.146L16.7418 29.6457c-.2714.4851-.9684.488-1.2439.0052L2.0956 6.1482c-.3-.5262.1498-1.1635.746-1.057l13.156 2.3516a.7144.7144 0 00.2537-.0004l12.8808-2.3478c.5942-.1083 1.0463.5241.7515 1.0513z"
          />
          <path
            fill="url(#vite-gradient-2)"
            d="M22.2644 2.0069l-9.7253 1.9056a.3571.3571 0 00-.2879.3294l-.5982 10.1038c-.014.238.2045.4227.4367.3691l2.7077-.6248c.2534-.0585.4823.1647.4302.4194l-.8044 3.9393c-.0542.265.1947.4918.4536.4132l1.6724-.5082c.2593-.0787.5084.1487.4536.414l-1.2784 6.1877c-.08.387.4348.598.6495.2662L16.5173 25 24.442 9.1848c.1327-.2648-.096-.5667-.387-.5106l-2.787.5379c-.262.0505-.4848-.1934-.4109-.4497l1.8191-6.306c.074-.2568-.1496-.5009-.4118-.4495z"
          />
        </svg>
      );
    case "vue":
      return (
        <svg className={className}>
          <use xlinkHref="#svg-vue" />
        </svg>
      );
    case "vuetify":
      return (
        <svg className={className}>
          <use xlinkHref="#svg-vuetify" />
        </svg>
      );
    case "webpack":
      return (
        <svg className={className}>
          <use xlinkHref="#svg-webpack" />
        </svg>
      );
    default:
      return <></>;
  }
}
