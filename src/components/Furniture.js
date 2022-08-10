import { Avatar } from "@react-native-material/core";
import { useTheme } from "@react-navigation/native";
import React from "react";
import { View, Text, StyleSheet, Dimensions } from "react-native";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
MaterialCommunityIcons.loadFont()

const { height, width } = Dimensions.get('window');
const Furniture = ({ name, title }) => {
    const { colors } = useTheme();
    return (
        <View style={styles.container}>
            <Avatar
                style={{ backgroundColor: colors.componentBackground }}
                icon={props => {
                    return <MaterialCommunityIcons name={name} size={30} color={colors.text} />
                }}
            />
            <Text adjustsFontSizeToFit style={{ ...styles.title, color: colors.text }}>{title}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
    },
    title: {
        marginTop: height * 0.01,
        fontFamily: 'AlbertSans-SemiBold',
        fontSize: 14,
        marginBottom: height * 0.02
    }
})

export default Furniture;