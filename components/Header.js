import React from 'react'
import { View, Text, Image, StyleSheet } from 'react-native'

export default function Header() {
    return (
        <View style={styles.container}>
            <View style={styles.background}></View>
            <Image style={styles.profile} source={require('../assets/profilbild.jpeg')} />
            <Text style={styles.h1}>Pernilla Lumikero</Text>
            <Text style={styles.h2}>Frontendutvecklare</Text>
        </View>
    )
}

const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },

    background: {
        backgroundColor: 'beige',
        width: 400,
        height: 230,
    },
    profile: {
        marginTop: -130,
        width: 250,
        height: 250,
        borderRadius: 130,
        borderColor: 'black',
        borderWidth: 1,
        shadowColor:'black',
        shadowRadius: 3,
        shadowOpacity: 0.2,
        shadowOffset: {width: -2, height: 4},
        elevation: 20,
    },
    h1: {
        fontFamily: 'SpaceMono-regular',
        fontSize: 30,
    },
    h2: {
        fontFamily: 'SpaceMono-italic',
        fontSize: 18,
    }
})

