import * as React from "react"
import Svg, { Path } from "react-native-svg"
/* SVGR has dropped some elements not supported by react-native-svg: title */

const SvgComponent = (props) => (
    <Svg
        data-name="Layer 1"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 94.98 122.88"
        {...props}
    >
        <Path
            d="m0 56.21 3-8.41h88.6l3.4 8.41H52.67c.64 3.77 2.24 9 4.75 10.27v2.34c15.45 4.51 11.73 20.38.69 40.59h20.67a1.75 1.75 0 0 1 1.73 1.74v10a1.76 1.76 0 0 1-1.73 1.74H16.21a1.75 1.75 0 0 1-1.74-1.74v-10a1.74 1.74 0 0 1 1.74-1.74h20.22c-10.84-21-13.92-36.9 1-40.7h.14v-2.38c1.68-.86 3.12-6.15 3.78-10.12Zm4.65-13.16 10.57-29.89h62.31l12.12 29.89ZM16.9 8.41l3-8.41h52.29l3.41 8.41Z"
            style={{
                fillRule: "evenodd",
            }}
        />
    </Svg>
)

export default SvgComponent
