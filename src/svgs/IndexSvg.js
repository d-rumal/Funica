import * as React from "react";
import Svg, { Path, Ellipse } from "react-native-svg";

const SvgComponent = (props) => (
    <Svg
        viewBox="0 0 1418 1418"
        xmlns="http://www.w3.org/2000/svg"
        xmlSpace="preserve"
        style={{
            fillRule: "evenodd",
            clipRule: "evenodd",
            strokeLinejoin: "round",
            strokeMiterlimit: 1.41421,
        }}
        {...props}
    >
        <Path
            d="m3189.98 3518.49 16.3-35.59 5.6 2.57-18.51 40.43 20.78 45.39-5.61 2.57-18.56-40.55-12.89 28.16-5.61-2.57 15.11-33-15.1-32.99 5.61-2.57 12.88 28.15Zm74.98-10.29 10.77-23.53 5.61 2.57-12.99 28.37 22.88 50.01-5.61 2.57-20.66-45.17-18.42 40.22-5.61-2.57 20.63-45.06-12.98-28.37 5.61-2.57 10.77 23.53Z"
            style={{
                fill: "#111532",
            }}
            transform="translate(-25780.9 -28185.9) scale(8.21452)"
        />
        <Ellipse
            cx={3304.99}
            cy={3562.21}
            rx={73.706}
            ry={29.813}
            style={{
                fill: "#007378",
            }}
            transform="matrix(8.21452 0 0 3.4115 -26440.263 -11664.693)"
        />
    </Svg>
)

export default SvgComponent
