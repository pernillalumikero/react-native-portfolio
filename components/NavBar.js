import React from 'react'
import { View, StyleSheet, Pressable, Linking } from 'react-native'
import { FontAwesome } from '@expo/vector-icons';

export default function NavBar() {
    return (
        <View style={styles.container}>
            <Pressable onPress={() => { Linking.openURL('https://www.github.com') }}>
                <FontAwesome name="github" size={45} color="black" />
            </Pressable>
            <Pressable onPress={() => { Linking.openURL('https://www.linkedin.com') }}>
                <FontAwesome name="linkedin-square" size={45} color="black" />
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        columnGap: 80,
        backgroundColor: 'beige',
        width: '100%',
        height: 50,
        borderTopColor: 'black',
        borderWidth: 1,
    },
});