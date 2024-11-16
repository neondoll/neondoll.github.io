import type { SVGAttributes } from "react";

export type SvgIconName = "bootstrap" | "bootstrap-vue" | "chevron-down" | "css3" | "english" | "external" | "git"
  | "github" | "html5" | "javascript" | "jquery" | "moon" | "phpstorm" | "russian" | "scss" | "sun" | "tailwind-css"
  | "telegram" | "typescript" | "vite" | "vue" | "vuetify" | "webpack";

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
