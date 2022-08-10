import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import RegisterScreen from '../screens/RegisterScreen';
import FillProfileScreen from '../screens/FillProfileScreen';
import CreateNewPinScreen from '../screens/CreateNewPinScreen';

const Stack = createNativeStackNavigator();
const RegisterStack = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name='Register'
                component={RegisterScreen}
                options={commonOptions}
            />
            <Stack.Screen
                name='Fill'
                component={FillProfileScreen}
                options={commonOptions}
            />
            <Stack.Screen
                name="Pin"
                component={CreateNewPinScreen}
                options={commonOptions}
            />
        </Stack.Navigator>
    )
}


const commonOptions = {
    headerShown: false,
    animationEnabled: false,
    contentStyle: {
        backgroundColor: 'white'
    }
}
export default RegisterStack;