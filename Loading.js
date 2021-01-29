import React from 'react';
import { StyleSheet, Text, View, StatusBar } from 'react-native';

function Loading() {
    return <View style={StyleSheet.container}>
        <StatusBar barStyle="dark-content" />
        <Text style={styles.Text}>빌어먹을 날씨</Text>
    </View>
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "flex-end",
        paddingHorizontal: 30,
        paddingVertical: 100,
        backgroundColor: "#FDF6AA"
    },
    Text: {
        color: "#2c2c2c",
        fontSize: 30
    }
})