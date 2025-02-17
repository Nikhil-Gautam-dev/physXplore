import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import logo from '../../assests/logos/bulb_bittersweet_transparent.png'
import { color } from '../../style/colors'

const SimulationCard = () => {
    return (
        <View style={styles.mainContainer}>
            <View style={styles.leftSide}>
                <Image source={logo} style={styles.coverImage} />
            </View>
            <View style={styles.rightSide}>
                <Text style={styles.title}>Particle Duality</Text>
                <Text style={styles.desc}>Wave-particle duality is the concept in quantum mechanics that every particle or quantum entity may be described as either a particle or a wave. It expresses the inability of the classical concepts of particle or wave to fully describe the behavior of quantum-scale objects.</Text>
                <Text style={styles.time}>Updated 2 days ago</Text>
            </View>
        </View>
    )
}

export default SimulationCard;

const styles = StyleSheet.create({
    mainContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 10,
        borderRadius: 8,
        alignContent: 'center',
        width: "100%",
        backgroundColor: color.inputBackgroundColor,
        gap: 5,
        elevation: 6
    },
    leftSide: {
        justifyContent: 'center',
        alignContent: 'center'
    },
    rightSide: {
        maxWidth: "100%"
    },
    coverImage: {
        height: 80,
        width: 100
    },
    title: {
        fontSize: 18,
        fontWeight: 600,
    },
    desc: {
        fontSize: 10,
        width: 200,
        height: 100,
        textAlign: 'justify'
    },
    time: {
        fontSize: 10
    }
})