import React from "react";
import { View, StyleSheet, Text } from "react-native";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { Avatar } from '@react-native-material/core';
import { useTheme } from "@react-navigation/native";



MaterialCommunityIcons.loadFont()
Ionicons.loadFont()

const NotificationComponent = ({ iconName, title, subtitle }) => {
    const { colors } = useTheme();
    return (
        <View style={{ ...styles.container, backgroundColor: colors.componentBackground }}>
            <Avatar
                color={colors.text}
                icon={
                    props => <MaterialCommunityIcons
                        name={iconName} {...props}
                    />
                }
            />
            <View>
                <Text style={{
                    fontFamily: 'AlbertSans-Bold',
                    fontSize: 17,
                    color: colors.text
                }}>{title}</Text>
                <Text style={{
                    fontFamily: 'AlbertSans-Light',
                    color: colors.text
                }}>{subtitle}</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginHorizontal: 20,
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        padding: 15,
        borderRadius: 20,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.07,
        shadowRadius: 20,
        backgroundColor: 'white',
        marginVertical: 10

    },
})

export default NotificationComponent;