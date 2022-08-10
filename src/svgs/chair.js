import * as React from "react"
import Svg, { Path } from "react-native-svg"

const SvgComponent = (props) => (
    <Svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 83.23 122.88"
        style={{
            enableBackground: "new 0 0 83.23 122.88",
        }}
        xmlSpace="preserve"
        {...props}
    >
        <Path
            d="M3.28 0h8.62c1.76 0 2.92 1.46 3.2 3.2 3.26 20.54 5.02 41.07 4.93 61.61H79c2.33 0 4.23 1.91 4.23 4.23v8.55h-3.38v43.71c0 .7-.58 1.29-1.29 1.29h-11.3c-.71 0-1.29-.58-1.29-1.29v-19.02H17.71c-.7 5.8-1.57 11.6-2.61 17.4-.31 1.73-1.44 3.2-3.2 3.2H3.28c-1.76 0-3.69-1.51-3.2-3.2 11.36-39.56 9-78.23 0-116.48C-.33 1.49 1.52 0 3.28 0zm62.69 96.4V77.6H19.85c-.26 8-.81 10.81-1.67 18.8h47.79z"
            style={{
                fillRule: "evenodd",
                clipRule: "evenodd",
            }}
        />
    </Svg>
)

export default SvgComponent
