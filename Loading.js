import React from "react";
import { StyleSheet, Text, View, StatusBar } from "react-native";
import { Fonts } from "./react-native.config";

export default function Loading() {
    return (
        <View style={styles.container}>
            <StatusBar barStyle="dark-content" />
            <Text style={styles.text}>제 앱을 찾아주셔서 감사합니다.</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "flex-end",
        paddingHorizontal: 30,
        paddingVertical: 100,
        backgroundColor: "#a18cd1",
        fontFamily: 'Jua-Regular'

    },
    text: {
        color: "#2c2c2c",
        fontSize: 30
    }
});