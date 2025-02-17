import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import { SafeAreaView } from 'react-native-safe-area-context'
import { color } from '../style/colors'
import SearchBar from '../components/searchbar/SearchBar'
import SimulationCard from '../components/cards/SimulationCard'

const Home = () => {
    return (
        <>
            <SafeAreaView style={styles.main}>
                <View style={[styles.header]}>
                    <View style={styles.user}>
                        <Text style={styles.usergreet}>Hi,</Text>
                        <Text style={styles.username}>Abinson</Text>
                    </View>
                    <View style={[styles.bellProfileContainer]}>
                        <View style={[styles.notificationIcon]} >
                            <MaterialCommunityIcons name='bell' color={"white"} size={30} />

                        </View>
                        <View style={[styles.notificationIcon]} >
                            <MaterialCommunityIcons name='account-settings' color={"white"} size={30} />
                        </View>
                    </View>
                </View>
                <SearchBar />
                <View style={styles.topSimulationContainer}>
                    <Text style={styles.topSimulationTitle}>Top Simulation</Text>
                    <SimulationCard />
                </View>
            </SafeAreaView>
        </>
    )
}

export default Home

const styles = StyleSheet.create({
    main: {
        padding: 10,
        gap: 10
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between'

    },
    user: {
        flexDirection: 'column'
    },
    usergreet: {
        fontSize: 18,
    },
    username: {
        fontSize: 18
    },
    bellProfileContainer: {
        flexDirection: 'row',
        gap: 10
    },
    notificationIcon: {
        backgroundColor: color.primaryColor,
        height: 50,
        width: 50,
        borderRadius: 25,
        justifyContent: 'center',
        alignItems: 'center'
    },
    topSimulationContainer: {
        paddingHorizontal: 10,
        gap: 10
    },
    topSimulationTitle: {
        fontSize: 18,
        fontWeight: 600
    }
})