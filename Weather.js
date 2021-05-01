import React from 'react';
import { View, Text, StyleSheet, StatusBar } from 'react-native';
import PropTypes from 'prop-types';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import { Fonts } from "./react-native.config";

// Weather 보여주는 ,
// Text는 temperature가 될꺼야
const weatherOptions = {
    Clouds: {
        iconName: 'weather-cloudy',
        gradient: ['#D7D2CC', '#304352'],
        title: 'Cloudy',
        subtitle: '오늘 날씨는 흐릿흐릿하네요.',
        fontFamily: "BMEULJIROTTF",
    },
    Clear: {
        iconName: 'weather-sunny',
        gradient: ['#FFCF00', '#FA7400'],
        title: 'Sunny',
        subtitle: '오늘 날씨는 맑네요 :)',
    },
    Rain: {
        iconName: 'weather-pouring',
        gradient: ['#00C6FB', '#005BEA'],
        title: 'Raining',
        subtitle: '오늘 우산 꼭 챙기세요. ☔️',
    },
    Snow: {
        iconName: 'weather-snowy',
        gradient: ['#58E3FF', '#C5CDFC'],
        title: 'Snow',
        subtitle: '눈사람을 만들어볼까요? ☃️',
    },
    Atmosphere: {
        iconName: 'weather-hail',
        gradient: ['#89F7FE', '#66A6FF'],
        title: 'Atmosphere',
        subtitle: "구름이 많아요. ☁",
    },
    Mist: {
        iconName: 'weather-hail',
        gradient: ['#4DA0B0', '#D39D38'],
        title: 'Mist',
        subtitle: "이슬이 맺혀있어요. 💧",
    },
    Dust: {
        iconName: 'weather-hail',
        gradient: ['#4DA0B0', '#D39D38'],
        title: 'Dust',
        subtitle: "먼지가 쌓여있어요. ❗",
    },
    Haze: {
        iconName: 'weather-hail',
        gradient: ['#4DA0B0', '#D39D38'],
        title: 'Haze',
        subtitle: "밖에 나가지마세요. 🔒",
    },
    Drizzle: {
        iconName: 'weather-hail',
        gradient: ['#89F7FE', '#66A6FF'],
        title: 'Drizzle',
        subtitle: '소나기가 내려요. 🏳️‍🌈',
        fontFamily: 'BMEULJIROTTF'
    },
};

export default function Weather({ temp, condition }) {
    return (
        // <View style={styles.container}>
        <LinearGradient
            colors={weatherOptions[condition].gradient}
            style={styles.container}
        >
            <StatusBar barStyle="light-content" />
            <View style={styles.halfContainer}>
                {/* <MaterialCommunityIcons size={96} name="weather-lightning-rainy" />
                    <Text style={styles.temp}>{temp}o</Text> */}
                <MaterialCommunityIcons
                    size={96}
                    // name={weatherOptions["Clouds"].iconName}
                    name={weatherOptions[condition].iconName}
                    color="white"

                />
                <Text style={styles.temp}>{temp}°</Text>
            </View>
            {/* <View style={{ ...styles.halfContainer, ...styles.textContainer }}> */}
            <View style={styles.textContainer}>
                <Text style={styles.title}>{weatherOptions[condition].title}</Text>
                <Text style={styles.subtitle}>
                    {weatherOptions[condition].subtitle}
                </Text>
            </View>
        </LinearGradient>
        // </View>
    );
}

Weather.propTypes = {
    temp: PropTypes.number.isRequired,
    condition: PropTypes.oneOf([
        'Drizzle',
        'Rain',
        'Snow',
        'Atmosphere',
        'Clear',
        'Clouds',
        'Haze',
        'Mist',
        'Dust',
    ]).isRequired,
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    temp: {
        fontSize: 42,
        color: 'white',
    },
    halfContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        color: 'white',
        fontSize: 65,
        fontWeight: '600',
        marginBottom: 10,
        textAlign: "left"
    },
    subtitle: {
        fontWeight: '600',
        color: 'white',
        fontSize: 25,
        textAlign: "left"
    },
    textContainer: {
        paddingHorizontal: 20,
        alignItems: "flex-start",
        paddingHorizontal: 40,
        justifyContent: "center",
        flex: 1
    }
});