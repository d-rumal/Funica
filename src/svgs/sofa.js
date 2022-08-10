import * as React from "react"
import Svg, { Path } from "react-native-svg"

const SvgComponent = (props) => (
    <Svg
        xmlns="http://www.w3.org/2000/svg"
        width={24}
        height={24}
        xmlSpace="preserve"
        {...props}
    >
        <Path d="M83.333 40.612v-7.279C83.333 25.97 77.363 20 70 20H30c-7.363 0-13.333 5.97-13.333 13.333v7.279C12.793 41.992 10 45.654 10 50v23.333h6.667V80h6.666v-6.667h53.334V80h6.666v-6.667H90V50c0-4.346-2.793-8.008-6.667-9.388zm-60 26.055h-6.666V50a3.333 3.333 0 1 1 6.666 0v16.667zm46.667 0H30V60h40v6.667zM70 50v3.333H30V50c0-4.346-2.793-8.008-6.667-9.388v-7.279A6.666 6.666 0 0 1 30 26.667h40a6.666 6.666 0 0 1 6.667 6.666v7.279C72.793 41.992 70 45.654 70 50zm13.333 16.667h-6.666V50a3.333 3.333 0 1 1 6.666 0v16.667z" />
    </Svg>
)

export default SvgComponent
