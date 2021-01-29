import { StatusBar } from 'expo-status-bar';
import { Alert } from "react-native";
import React from 'react';
import Loading from './Loading';
import * as Location from 'expo-location';
import { Alert } from 'react-native';
import axios from 'axios'

const API_KEY = "78bc1580f36d84e041ec5f915e37bf2b"

export default class extends React.Component {
  state = {
    isLoading: true
  };
  getWeather = async (latitude, longitude) => {
    const {
      data: {
        main: { temp },
        Weather
      }
    } = await axios.get(
      `http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric`
    );
    this.setState({
      isLoading: false,
      condition: Weather[0].main,
      temp
    });
  };
  getLocation = async () => {
    try {
      await Location.requestPermissionsAsync();
      const { coords: { latitude, longitude }
      } = await Location.getCurrentPositionAsync();
      this.getWeather(latitude, longitude)
    } catch (error) {
      Alert.alert("권한을 찾을수 없습니다", "확인해주세요.");
    }
  };
  componentDidMount() {
    this.getLocation();
  }
  render() {
    const { isLoading, temp, condition } = this.state
    return isLoading ? <Loading /> : <Weather temp={Math.round(temp)} condition={condition} />
  }
}
