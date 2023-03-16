import React, { useState, useEffect } from "react";
import { Dimensions, FlatList, Image, StyleSheet, Text, TouchableWithoutFeedback, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import MaterialIcon from "react-native-vector-icons/MaterialIcons"
import Slider from '@react-native-community/slider';
import TrackPlayer, { usePlaybackState, useProgress } from "react-native-track-player";

const { height, width } = Dimensions.get('window');

const setUpPlayer = async () => {

}

export default function Main() {
  const [pauseBtn, setPauseBtn] = useState(false)

  const DATA = [
    {
      id: 0,
      title: `'You're beautiful`,
      singer: 'James Blunt',
    },
    {
      id: 1,
      title: 'Breakaway',
      singer: 'Avril Lavigne',
    },
    {
      id: 2,
      title: `What's My Name`,
      singer: 'Rihanna ft. Drake',
    },
  ];

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={[StyleSheet.absoluteFillObject, { backgroundColor: "#fff" }]} />
      <View style={styles.container}>
        {/* Music Image */}
        <Image style={styles.musicimage} source={require("../assets/Image-1.jpeg")} />
        {/* Title */}
        <Text style={styles.musictitle}>Nobody's Home</Text>
        {/* Singer */}
        <Text style={styles.singername}>Avril Lavigne</Text>
        {/* Progress Bar */}
        <View style={{ marginTop: height * 0.02 }}>
          <Slider
            style={{ width: width * 0.85 }}
            value={10}
            minimumValue={0}
            maximumValue={100}
            minimumTrackTintColor="#2C3333"
            maximumTrackTintColor="#2C3333"
            thumbTintColor="black"
            onSlidingComplete={() => { }}
          />
          <View style={{ marginTop: height * -0.01, paddingHorizontal: width * 0.01, flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
            <Text style={{ fontSize: height * 0.015 }}>0:10</Text>
            <Text style={{ fontSize: height * 0.015 }}>3:20</Text>
          </View>
        </View>
        {/* Buttons */}
        <View style={{ flexDirection: "row", alignItems: "center", marginVertical: height * 0.01 }}>
          <MaterialIcon name="skip-previous" size={height * 0.04} />
          <TouchableWithoutFeedback onPress={() => setPauseBtn(!pauseBtn)}>
            <View style={{ marginHorizontal: width * 0.1, backgroundColor: "#191825", borderRadius: 100, padding: 6 }}>
              <MaterialIcon name={pauseBtn ? "play-arrow" : "pause"} color="#fff" size={height * 0.04} />
            </View>
          </TouchableWithoutFeedback>
          <MaterialIcon name="skip-next" size={height * 0.04} />
        </View>
        {/* Other Songs */}
        <View style={styles.othermusic}>
          <FlatList
            showsVerticalScrollIndicator={false}
            data={DATA}
            renderItem={({ item }) => {
              return (
                <View style={{ marginVertical: 5 }}>
                  <Text>{item.title}</Text>
                  <Text>{item.singer}</Text>
                </View>
              )
            }}
            keyExtractor={item => item.id}
          />
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    alignItems: "center",
    paddingVertical: height * 0.04,
    height: height * 0.9,
  },
  musicimage: {
    height: height * 0.47,
    width: width * 0.8,
    borderRadius: 15
  },
  musictitle: {
    fontSize: 18,
    fontWeight: "600",
    color: "#2D2727",
    lineHeight: 24,
    marginTop: height * 0.02
  },
  singername: {
    fontSize: 14,
    fontWeight: "400",
    color: "#2D2727",
    lineHeight: 20,
  },
  othermusic: {
    height: height * 0.198,
    width: width,
    paddingHorizontal: width * 0.05,
    paddingVertical: height * 0.01
  }

});
