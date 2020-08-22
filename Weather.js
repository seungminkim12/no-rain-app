import React from "react";
import PropTypes from "prop-types";
import { StyleSheet, View, Text, StatusBar } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";

const weatherOptions = {
  Thunderstorm: {
    iconName: "",
    gradient: ["", ""],
  },
  Drizzle: {
    iconName: "",
    gradient: ["", ""],
  },
  Rain: {
    iconName: "",
    gradient: ["", ""],
  },
  Snow: {
    iconName: "",
    gradient: ["", ""],
  },
  Atmosphere: {
    iconName: "",
    gradient: ["", ""],
  },
  Clear: {
    iconName: "",
    gradient: ["", ""],
  },
  Clouds: {
    iconName: "",
    gradient: ["", ""],
  },
  Haze: {
    iconName: "",
    gradient: ["", ""],
  },
  Mist: {
    iconName: "",
    gradient: ["", ""],
  },
  Dust: {
    iconName: "",
    gradient: ["", ""],
  },
  Clear: {
    iconName: "weather-cloudy",
    gradient: ["#4DA0B0", "#D39D38"],
  },
};

export default function Weather({ temp, condition }) {
  return (
    <LinearGradient
      style={styles.container}
      colors={weatherOptions[condition].gradient}
    >
      <StatusBar barStyle="light-content" />
      <View style={styles.halfContainer}>
        <MaterialCommunityIcons
          size={96}
          name={weatherOptions[condition].iconName}
          color="white"
        />
        <Text style={styles.temp}>{temp}º</Text>
      </View>
      <View style={styles.halfContainer}></View>
    </LinearGradient>
  );
}

Weather.propTypes = {
  temp: PropTypes.number.isRequired,
  condition: PropTypes.oneOf([
    "Thunderstorm",
    "Drizzle",
    "Rain",
    "Snow",
    "Atmosphere",
    "Clear",
    "Clouds",
    "Haze",
    "Mist",
    "Dust",
  ]).isRequired,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  temp: {
    fontSize: 46,
    color: "white",
  },
  halfContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
