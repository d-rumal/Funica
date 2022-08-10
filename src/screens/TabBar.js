import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import HomeScreenStack from "../stacks/HomeScreenStack";
import RegisterStack from "../stacks/RegisterScreenStack";
import { useTheme } from "@react-navigation/native";

MaterialCommunityIcons.loadFont();
const Tab = createBottomTabNavigator();
const Tabs = () => {
    const { colors } = useTheme();
    return (
        <Tab.Navigator
            initialRouteName="HomeStack"
            sceneContainerStyle={{ backgroundColor: colors.background }}
            screenOptions={{
                tabBarShowLabel: false,
                tabBarStyle: {
                    backgroundColor: colors.background,
                    borderTopWidth: 0,
                }
            }}
        >
            <Tab.Screen name="HomeStack" component={HomeScreenStack} options={{
                headerShown: false,
                tabBarIcon: ({ focused }) => {
                    return (
                        focused
                            ? <TabBarIconComponent name={'home-variant'} title={'Home'} focused={focused} />
                            : <TabBarIconComponent name={'home-variant-outline'} title={'Home'} focused={focused} />
                    )
                },
            }} />
            <Tab.Screen name="Cart" component={HomeScreenStack} options={{
                headerShown: false,
                tabBarIcon: ({ focused }) => {
                    return (
                        focused
                            ? <TabBarIconComponent name={'cart'} title={'Cart'} focused={focused} />
                            : <TabBarIconComponent name={'cart-outline'} title={'Cart'} focused={focused} />
                    )
                },
            }} />
            <Tab.Screen name="Orders" component={HomeScreenStack} options={{
                headerShown: false,
                tabBarIcon: ({ focused }) => {
                    return (
                        focused
                            ? <TabBarIconComponent name={'shopping'} title={'Orders'} focused={focused} />
                            : <TabBarIconComponent name={'shopping-outline'} title={'Orders'} focused={focused} />
                    )
                },
            }} />
            <Tab.Screen name="Wallet" component={HomeScreenStack} options={{
                headerShown: false,
                tabBarIcon: ({ focused }) => {
                    return (
                        focused
                            ? <TabBarIconComponent name={'wallet'} title={'Wallet'} focused={focused} />
                            : <TabBarIconComponent name={'wallet-outline'} title={'Wallet'} focused={focused} />
                    )
                },
            }} />
            <Tab.Screen name="Profile" component={HomeScreenStack} options={{
                headerShown: false,
                tabBarIcon: ({ focused }) => {
                    return (
                        focused
                            ? <TabBarIconComponent name={'account'} title={'Profile'} focused={focused} />
                            : <TabBarIconComponent name={'account-outline'} title={'Profile'} focused={focused} />
                    )
                },
            }} />
        </Tab.Navigator>
    )
}


const TabBarIconComponent = ({ name, title, focused }) => {
    const { colors } = useTheme();
    return (
        <View style={{ alignItems: 'center' }}>
            {focused
                ?
                <>
                    <MaterialCommunityIcons name={name} size={30} color={colors.text} />
                    <Text style={{ ...styles.title, color: colors.text }}>{title}</Text>
                </>
                :
                <>
                    <MaterialCommunityIcons name={name} size={30} color={'#9F9FA1'} />
                    <Text style={{ ...styles.title, color: '#9F9FA1' }}>{title}</Text>
                </>
            }

        </View>
    )
}

const styles = StyleSheet.create({
    title: {
        fontFamily: 'AlbertSans-SemiBold',
        fontSize: 12.5,
    }
})
export default Tabs;