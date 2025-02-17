import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Home from '../screens/Home'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import { color } from '../style/colors'
import Room from '../screens/Room'

const tabs = createBottomTabNavigator()

const Main = () => {
    return (
        <tabs.Navigator
            initialRouteName='Home'
            screenOptions={{
                tabBarStyle: styles.tabNavigator,
                tabBarActiveBackgroundColor: "transparent",
                animation: "shift",
                tabBarHideOnKeyboard: true,
            }}
        >
            <tabs.Screen
                name='plus'
                key={"plus"}
                component={Room}
                options={{
                    headerShown: false,
                    tabBarShowLabel: false,
                    tabBarIcon: ({ color, focused }) => (
                        <View style={[styles.tabIconContainer, {
                            backgroundColor: focused ? "#ff595e" : 'transparent'
                        }]}>
                            <MaterialCommunityIcons name="plus-box" color={color} size={26} style={[styles.tabBarIcon, {
                                fontSize: focused ? 30 : 26,
                                color: "#ffffff"
                            }]} />
                        </View>),

                }
                }

            />
            <tabs.Screen
                name='Home'
                key={"Home"}
                component={Home}
                options={{
                    headerShown: false,
                    tabBarShowLabel: false,
                    tabBarIcon: ({ color, focused }) => (
                        <View style={[styles.tabIconContainer, {
                            backgroundColor: focused ? "#ff595e" : 'transparent'
                        }]}>
                            <MaterialCommunityIcons name="home" color={color} size={36} style={[styles.tabBarIcon, {
                                fontSize: focused ? 30 : 26,
                                color: "#ffffff"
                            }]} />
                        </View>)
                }}
            />
            <tabs.Screen
                name='Room'
                key={"Room"}
                component={Room}
                options={{
                    headerShown: false,
                    tabBarShowLabel: false,
                    tabBarIcon: ({ color, focused }) => (
                        <View style={[styles.tabIconContainer, {
                            backgroundColor: focused ? "#ff595e" : 'transparent'
                        }]}>
                            <MaterialCommunityIcons name="account-group" color={color} size={26} style={[styles.tabBarIcon, {
                                fontSize: focused ? 30 : 26,
                                color: "#ffffff"
                            }]} />
                        </View>)
                }}
            />

        </tabs.Navigator>
    )
}

export default Main

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',
    },
    tabNavigator: {
        height: 60,
        backgroundColor: color.primaryColor,
        borderRadius: 10,
        elevation: 5,
        flexDirection: 'row',
        justifyContent: 'space-around',
        paddingHorizontal: 20,
        alignItems: 'center',
        marginBottom: 20,
        marginHorizontal: 20
    },
    tabIconContainer: {
        borderRadius: 25,
        height: 50,
        width: 50,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 20,
        shadowColor: "#F0F0F8",
        shadowOffset: {
            width: 0,
            height: 18,
        },
        shadowOpacity: 0.25,
        shadowRadius: 20.00,
        elevation: 24,
    },
    tabBarIcon: {
        shadowColor: "#F0F0F8",
        shadowOffset: {
            width: 0,
            height: 18,
        },
        shadowOpacity: 0.25,
        shadowRadius: 20.00,
        elevation: 24,
    },
})