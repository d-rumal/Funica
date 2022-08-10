import * as React from "react"
import Svg, { Path } from "react-native-svg"

const LogoSvg = (props) => (
    <Svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 100 100"
        width={200}
        height={200}
        {...props}
    >
        <Path fill="#ee3e54" d="M13 27a2 2 0 1 0-.001 3.999A2 2 0 0 0 13 27z" />
        <Path
            fill="#f1bc19"
            d="M77 12c-.551 0-1 .449-1 1s.449 1 1 1 1-.449 1-1-.449-1-1-1z"
        />
        <Path
            fill="#fce0a2"
            d="M50 13c-20.434 0-37 16.566-37 37s16.566 37 37 37 37-16.566 37-37-16.566-37-37-37z"
        />
        <Path
            fill="#f1bc19"
            d="M83 11c-2.211 0-4 1.789-4 4s1.789 4 4 4 4-1.789 4-4-1.789-4-4-4z"
        />
        <Path fill="#ee3e54" d="M87 22a2 2 0 1 0-.001 3.999A2 2 0 0 0 87 22z" />
        <Path
            fill="#fbcd59"
            d="M81 74a2 2 0 1 0-.001 3.999A2 2 0 0 0 81 74zM15 59c-2.211 0-4 1.789-4 4s1.789 4 4 4 4-1.789 4-4-1.789-4-4-4z"
        />
        <Path fill="#ee3e54" d="M25 85a2 2 0 1 0-.001 3.999A2 2 0 0 0 25 85z" />
        <Path
            fill="#fff"
            d="M21.5 34c-1.379 0-2.5 1.121-2.5 2.5s1.121 2.5 2.5 2.5 2.5-1.121 2.5-2.5-1.121-2.5-2.5-2.5z"
        />
        <Path
            fill="#f1bc19"
            d="M21 66c-.551 0-1 .449-1 1s.449 1 1 1 1-.449 1-1-.449-1-1-1z"
        />
        <Path
            fill="#fff"
            d="M80 33c-.551 0-1 .449-1 1s.449 1 1 1 1-.449 1-1-.449-1-1-1z"
        />
        <Path
            fill="#00a5a5"
            d="m44.474 76.3-1.6-4h-6.978l.651-2.6h26.906l.651 2.6h-6.978l-1.6 4z"
        />
        <Path
            fill="#472b29"
            d="m62.907 70.4.3 1.2h-6.555l-.352.88-1.248 3.12H44.948L43.7 72.48l-.352-.88h-6.555l.3-1.2h25.814M64 69H36l-1 4h7.4l1.6 4h12l1.6-4H65l-1-4z"
        />
        <Path
            fill="#00a5a5"
            d="M56.839 56.151c1.441-2.758.733-4.958-.149-6.345a8.267 8.267 0 0 0-2.367-2.384c-.319-.291-1.936-1.674-8.32-6.23-6.629-4.732-2.083-12.217-1.887-12.533l5.636-7.504.186.185c-1.038 3.596 2.26 5.883 3.877 7.005.27.187.506.35.682.49.054.041 3.094 2.259 8.311 6.229 5.438 4.137 1.971 10.378 1.93 10.437l-7.813 10.734-.086-.084z"
        />
        <Path
            fill="#472b29"
            d="M49.064 23.236c.308 2.88 3.026 4.766 4.35 5.683.255.177.478.33.644.462l.024.02.025.019c.03.022 3.066 2.237 8.275 6.202 4.914 3.738 1.82 9.419 1.79 9.462l-5.802 7.971c.006-1.481-.509-2.71-1.091-3.625a8.942 8.942 0 0 0-2.532-2.567c-.461-.411-2.237-1.887-8.338-6.241-5.901-4.211-2.124-10.886-1.728-11.548l4.383-5.838m.611-3.146-6.154 8.198s-5.186 8.292 2.075 13.474 8.298 6.218 8.298 6.218 5.186 3.109 2.075 8.292l1.037 1.037 8.298-11.401c.648-.907 3.386-7.246-2.075-11.4-5.284-4.021-8.298-6.219-8.298-6.219-1.297-1.037-5.661-3.242-4.194-7.138l-1.062-1.061z"
        />
        <Path
            fill="#00a5a5"
            d="M49.439 66.175c.205-2.491-1.882-3.986-2.297-4.257-.263-.237-1.387-1.184-5.569-4.169-4.267-3.046-1.327-7.86-1.199-8.064l3.311-4.407c-.134 2.285 3.296 4.594 3.334 4.619.019.02 1.92 1.603 5.53 4.146 3.72 2.619.794 7.236.764 7.282l-3.651 5.003-.223-.153z"
        />
        <Path
            fill="#472b29"
            d="M43.334 46.911c.823 1.799 2.82 3.24 3.23 3.522.346.286 2.241 1.829 5.582 4.181 3.117 2.195.784 6.006.595 6.303l-2.736 3.75c-.407-1.589-1.569-2.746-2.444-3.314-.388-.341-1.656-1.375-5.581-4.175-3.546-2.53-1.41-6.458-1.039-7.08l2.393-3.187m.287-2.714-3.841 5.117s-3.466 5.542 1.387 9.005 5.546 4.156 5.546 4.156 2.461 1.487 1.976 4.035l1.137.78 4.068-5.576c.778-1.166 2.807-5.604-.942-8.243-3.629-2.555-5.546-4.156-5.546-4.156-1.032-.686-3.626-2.888-2.896-4.507l-.889-.611zM60.25 47.5a.25.25 0 0 1-.192-.41c2.076-2.49 2.976-4.712 2.676-6.603-.285-1.795-1.603-2.642-1.616-2.65a.25.25 0 0 1 .265-.424c.062.038 1.518.964 1.844 2.984.329 2.042-.607 4.402-2.783 7.013a.258.258 0 0 1-.194.09zM59.367 36.5a.248.248 0 0 1-.147-.048l-6.161-4.5a.25.25 0 0 1-.055-.349.25.25 0 0 1 .35-.054l6.161 4.5a.25.25 0 0 1 .055.349.254.254 0 0 1-.203.102zM51.323 30.625a.248.248 0 0 1-.142-.044c-1.497-1.033-2.146-2.203-2.775-3.334a.25.25 0 0 1 .438-.243c.628 1.131 1.222 2.199 2.621 3.166a.25.25 0 0 1-.142.455z"
        />
        <Path
            fill="#472b29"
            d="M50.355 61.375a.25.25 0 0 1-.192-.41c1.012-1.214 1.453-2.289 1.312-3.196a1.858 1.858 0 0 0-.752-1.244l-3.746-2.753a.25.25 0 1 1 .297-.402l3.73 2.743c.017.01.791.502.963 1.568.17 1.058-.307 2.272-1.419 3.606a.257.257 0 0 1-.193.088zM45.5 52.625a.247.247 0 0 1-.146-.047c-.914-.653-2.053-2.007-2.225-2.906a.25.25 0 1 1 .49-.095c.145.749 1.207 2.009 2.025 2.594a.25.25 0 0 1-.144.454zM68.924 45.25a.25.25 0 0 1-.229-.351c1.187-2.685 1.22-8.063-2.479-11.08a.25.25 0 0 1 .317-.388c3.899 3.181 3.868 8.844 2.619 11.67a.25.25 0 0 1-.228.149zM64.5 52.359a.25.25 0 0 1-.201-.399c1.853-2.5 3.06-4.175 3.491-4.846a.25.25 0 1 1 .42.27c-.443.689-1.624 2.329-3.509 4.873a.25.25 0 0 1-.201.102zM61.125 56.875a.25.25 0 0 1-.199-.4s.854-1.132 1.968-2.624a.25.25 0 0 1 .401.299c-1.114 1.493-1.97 2.626-1.97 2.626a.252.252 0 0 1-.2.099zM44.875 65.375a.248.248 0 0 1-.142-.044s-.803-.552-2.004-1.408a.25.25 0 1 1 .291-.407c1.196.853 1.995 1.403 1.996 1.404a.25.25 0 0 1-.141.455zM41.5 62.979a.245.245 0 0 1-.146-.048 151 151 0 0 1-2.379-1.761.25.25 0 0 1 .301-.399c.822.621 1.632 1.218 2.371 1.755a.25.25 0 0 1-.147.453zM37.375 59.875a.246.246 0 0 1-.154-.053C33.63 57 35.119 51.61 35.135 51.556a.25.25 0 1 1 .481.137c-.015.051-1.41 5.123 1.914 7.735a.25.25 0 0 1-.155.447z"
        />
    </Svg>
)

export default LogoSvg