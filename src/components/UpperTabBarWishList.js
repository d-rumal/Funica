import React from "react";
import { View, StyleSheet, Text, ScrollView, Dimensions } from "react-native";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { Pressable } from "@react-native-material/core";
import ProductScreen from "../screens/ProductScreen";
import { useTheme } from "@react-navigation/native";

const TopBar = createMaterialTopTabNavigator();

const { height, width } = Dimensions.get('window');

const data = [{
    title: 'Shiny Wooden Chair',
    price: 115.00,
    imagePath: "file:///Users/darshan/Downloads/Study/Javascript/React-Native/Funica/assets/images/image-removebg-preview2.png"
}]

const CategoriesTab = () => {
    const { colors } = useTheme();
    return (
        <TopBar.Navigator
            screenOptions={{
                tabBarScrollEnabled: true,
            }}
            sceneContainerStyle={{ backgroundColor: colors.background, overflow: 'visible' }}
            tabBar={(props) => <CustomTabBar {...props} />}
        >
            <TopBar.Screen
                name="All"
                children={() => <ProductScreen data={data} />}
            />
            <TopBar.Screen
                name="Shop"
                children={() => <ProductScreen data={data} />}
            />
            <TopBar.Screen
                name="Chair"
                children={() => <ProductScreen data={data} />}
            />
            <TopBar.Screen
                name="Table"
                children={() => <ProductScreen data={data} />}
            />
            <TopBar.Screen
                name="Kitchen"
                children={() => <ProductScreen data={data} />}
            />
            <TopBar.Screen
                name="Lamp"
                children={() => <ProductScreen data={data} />}
            />
        </TopBar.Navigator >
    )
}

const Page2 = () => {
    return (
        <View>
            <Text>Page1</Text>
        </View>
    )
}


const CustomTabBar = ({ state, descriptors, navigation, position }) => {
    const { colors } = useTheme();
    return (
        <ScrollView horizontal
            showsHorizontalScrollIndicator={false}
            alwaysBounceHorizontal={false} style={{ maxHeight: height * 0.06 }}
        >
            {state.routes.map((route, index) => {
                const { options } = descriptors[route.key]
                const isFocused = state.index === index
                const onPress = () => {
                    const event = navigation.emit({
                        type: 'tabPress',
                        target: route.key,
                        canPreventDefault: true
                    })
                    if (!isFocused && !event.preventDefault()) {
                        navigation.navigate({ name: route.name, merge: true });
                    }
                }
                const onLongPress = () => {
                    navigation.emit({
                        type: 'tabLongPress',
                        target: route.key,
                    });
                };
                return (
                    <Pressable
                        pressEffect="none"
                        accessibilityState={isFocused ? { selected: true } : {}}
                        onPress={onPress}
                        onLongPress={onLongPress}
                        style={isFocused ? {
                            ...styles.container,
                            borderColor: colors.componentBackground,
                            backgroundColor: colors.componentBackground,
                        } : { ...styles.container, backgroundColor: colors.background, borderColor: colors.componentBackground, }}
                        key={route.key}
                    >
                        <Text style={isFocused ? { fontFamily: 'AlbertSans-SemiBold', color: colors.text } : { fontFamily: 'AlbertSans-SemiBold', color: colors.text }}>{route.name}</Text>
                    </Pressable>
                )
            })}

        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginLeft: 20,
        borderWidth: 2,
        justifyContent: 'center',
        paddingHorizontal: 15,
        borderRadius: 20,
        height: 30,
        // borderColor: 'white'
    },
    isFocused: {
        backgroundColor: '#000',
    }
})

export default CategoriesTab;