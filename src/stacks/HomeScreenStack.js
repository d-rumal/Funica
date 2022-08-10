import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeScreen';
import WishListScreen from '../screens/WishListScreen';

const Stack = createNativeStackNavigator();


const HomeScreenStack = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="Home"
                component={HomeScreen}
                options={{
                    headerShown: false,
                    animationEnabled: false,
                    contentStyle: {
                        backgroundColor: 'white'
                    }
                }}
            />
        </Stack.Navigator>
    )
}

export default HomeScreenStack;