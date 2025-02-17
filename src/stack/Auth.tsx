import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Login from '../screens/Login'
import Signup from '../screens/Signup'


const Stack = createNativeStackNavigator()

export type authStackparamList = {
    Login: undefined,
    Signup: undefined
}

const Auth = () => {
    return (
        <Stack.Navigator initialRouteName='Login'>
            <Stack.Screen
                name='Login'
                key={'Login'}
                component={Login}
                options={
                    {
                        headerShown: false
                    }
                }
            />

            <Stack.Screen
                name='Signup'
                key={'Signup'}
                component={Signup}
                options={
                    {
                        headerShown: false
                    }
                }
            />
        </Stack.Navigator>
    )
}

export default Auth