import React from 'react';
import { View, Text, StyleSheet, StatusBar } from 'react-native';
import PropTypes from 'prop-types';
import { LinearGradient } from 'expo-linear-gradient';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const weather0ptions = {
    Thunderstorm: {
        iconName: "weather-lightning",
        gradient: ["#373B44", "#4286f4"],
        title: "번개",
        subtitle: "외출을 삼가해주세요."
    },
    Drizzle: {
        iconName: "weather-hail",
        gradient: ["#89F7FE", "#66A6FF"],
        title: "비",
        subtitle: "비가 조금 옵니다."
    },
    Rain: {
        iconName: "weather-rainy",
        gradient: ["#00C6FB", "#005BEA"],
        title: "비",
        subtitle: "비가 많이 옵니다."
    },
    Snow: {
        iconName: "weather-snowy",
        gradient: ["#7DE2FC", "#B9B6E5"],
        title: "눈",
        subtitle: "눈이 많이 내립니다."
    },
    Atmosphere: {
        iconName: "weather-hail",
        gradient: ["#89F7FE", "66A6FF"]
    },
    Clear: {
        iconName: "weather-sunny",
        gradient: ["#FF7300", "#FEF253"],
        title: "맑다",
        subtitle: "하늘이 맑습니다."
    },
    Clouds: {
        iconName: "weather-cloudy",
        gradient: ["#D7D2CC", "#304352"],
        title: "구름",
        subtitle: "구름이 있습니다."
    },
    Mist: {
        iconName: "weather-hail",
        gradient: ["#4DA0B0", "#D39D38"],
        title: "엷은",
        subtitle: "엷은 안개가 끼여있습니다."
    },
    Dush: {
        iconName: "weather-hail",
        gradient: ["#4DA0B0", "#D39D38"],
    },
    Haze: {
        iconName: "weather-hail",
        gradient: ["#4DA0B0", "#D39D38"],
        title: "안개",
        subtitle: "안개가 끼여있습니다."
    }
};

export default function weather({ temp, condition }) {
    return (
        <LinearGradient
            colors={weather0ptions[condition].gradient}
            style={styles.container}
        >
            <StatusBar barStyle="light-content" />
            <View style={styles.halfContainer}>
                <MaterialCommunityIcons
                    size={96}
                    name={weather0ptions[condition].iconName}
                    color="white" />
                <Text style={styles.temp}>{temp}℃</Text>
            </View>
            <View style={{ ...Styles.halfContainerm, ...styles.textContainer }}>
                <Text style={Styles.title}>{weather0ptions[condition].title}</Text>
                <Text style={Styles.subtitle}>{weather0ptions[condition].subtitle}</Text>
            </View>
        </LinearGradient >
    );
}

weather.PropTypes = {
    temp: PropTypes.number.isRequired,
    condition: PropTypes.one0f([
        "Thunderstorm",
        "Drizzle",
        "Rain",
        "Snow",
        "Atmosphere",
        "Clear",
        "Clouds",
        "Haze",
        "Mist",
        "Dush"
    ]).isRequired
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    temp: {
        fontSize: 42,
        color: "white"
    },
    halfContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    title: {
        color: "white",
        fontSize: 44,
        fontWeight: "300",
        marginBottom: 10
    },
    subtitle: {
        color: "white",
        fontWeight: "600",
        fontSize: 24
    },
    textContainer: {
        paddingHorizontal: 20,
        alignItems: 'flex-start'
    }
});