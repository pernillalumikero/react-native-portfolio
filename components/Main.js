import React from 'react'
import { Text, View, StyleSheet, FlatList } from 'react-native'

export default function Main() {
    return (
        <View style={styles.container}>
            <View style={styles.column1}>
                <Text style={styles.h3}>Om mig</Text>
                <Text>Jag är en förskollärare som håller på att karriärväxla till frontendutvecklare.
                    Mitt intresse för dator och teknik i kombination med min nyfikenhet och min vilja
                    att lära mig nya saker är det som jag tror har varit avgörande för framgången i
                    mina nuvarande studier. Sedan tycker jag också att det är otroligt kul att programmera!
                </Text>
            </View>
            <View style={styles.column2}>
                <Text style={styles.h3}>Skillz</Text>
                <FlatList
                    data={[
                        { key: 'HTML' },
                        { key: 'Css' },
                        { key: 'JavaScript' },
                        { key: 'Github' },
                        { key: 'React' },
                        { key: 'React Native' },
                        { key: 'Cypress' },
                        { key: 'Jira' },
                    ]}
                    renderItem={({ item }) => <Text style={styles.p}>{`\u2022 ${item.key}`}</Text>}
                />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        columnGap: 20,
        backgroundColor: '#fff',
        marginTop: 100,
        marginHorizontal: 50,
    },

    column1: {
        width: '70%'
    },

    h3: {
        fontFamily: 'SpaceMono-bold',
        fontSize: 18,
        marginBottom: 10,
        textDecorationLine: 'underline'     
    },

    p: {
        fontFamily: 'SpaceMono-regular',
        fontSize: 15,
    }
});
