import { useTheme } from '@react-navigation/native';
import React, { useRef } from 'react';
import { Animated, View, PanResponder, StyleSheet, Dimensions, Text } from 'react-native';
import { Pressable } from '@react-native-material/core';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const findDisplacement = (x1, y1, x2, y2) => {
    return Math.sqrt(Math.pow((x1 - x2), 2) + Math.pow((y1 - y2), 2));
}
const { height, width } = Dimensions.get('window')

const ProductDetails = ({ route, navigation }) => {

    const { colors } = useTheme();
    const p1 = useRef(new Animated.ValueXY({ x: 0, y: 0 })).current;
    const p2 = useRef(new Animated.ValueXY({ x: 0, y: 0 })).current;
    const diff = useRef(new Animated.Value(0)).current;
    const { title, price, imagePath } = route.params;

    const panResponder = useRef(PanResponder.create({
        onStartShouldSetPanResponder: (event, gesture) => true,
        onMoveShouldSetPanResponder: (event, gesture) => true,
        onStartShouldSetPanResponderCapture: () => true,
        onPanResponderGrant: (event, gesture) => {
            diff.setOffset(Math.max(Math.min(diff._value, 600), 0))
        },

        onPanResponderStart: (event, gesture) => {
            let touches = event.nativeEvent.touches;
            if (touches.length > 1) {
                p1.setValue({ x: touches[0].pageX, y: touches[0].pageY })
                p2.setValue({ x: touches[1].pageX, y: touches[1].pageY })
            }
            else {
                p1.setValue({ x: touches[0].pageX, y: touches[0].pageY })
            }
        },

        onPanResponderMove: (event, gesture) => {
            let touches = event.nativeEvent.touches;
            if (touches.length > 1) {
                newDiff = findDisplacement(touches[0].pageX, touches[0].pageY, touches[1].pageX, touches[1].pageY) - findDisplacement(p1.x._value, p1.y._value, p2.x._value, p2.y._value)
                diff.setValue(newDiff)
            }
        },

        onPanResponderRelease: (event, gesture) => {
            diff.flattenOffset()
        },
        onResponderTerminationRequest: () => false,
        onPanResponderEnd: (event, gesture) => true,
    })).current;

    return (
        <View style={{ flex: 1, backgroundColor: colors.background }}>
            <Pressable
                pressEffect="none"
                style={({ pressed }) =>
                    pressed
                        ? { ...styles.backIcon, opacity: 0.5 }
                        : styles.backIcon
                }
                onPress={() => {
                    navigation.goBack()
                }}
            >
                <MaterialCommunityIcons name="close" size={25} color={colors.text} />
            </Pressable>
            <View style={{ ...styles.container, backgroundColor: colors.background }}>
                <Animated.Image
                    source={{ uri: imagePath }}
                    {...panResponder.panHandlers}
                    style={{
                        ...styles.image,
                        backgroundColor: colors.componentBackground,
                        transform: [{
                            scale: diff.interpolate({
                                inputRange: [0, 600],
                                outputRange: [1, 3],
                                extrapolate: 'clamp',
                            })
                        }]
                    }}
                />
            </View>
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: '50%',
        alignItems: 'center',
    },
    image: {
        height: 250,
        width: 250,
        borderRadius: 20,
    },
    backIcon: {
        alignSelf: 'flex-start',
        marginTop: height * 0.06,
        marginLeft: width * 0.05,
    },
})
export default ProductDetails;