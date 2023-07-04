import {
  View,
  Text,
  StyleSheet,
  Image,
  Platform,
  TouchableOpacity,
  ImageBackground,
} from "react-native";
import React, { useState } from "react";

const ProfileScreen = () => {
  const [imageVisible, setImageVisible] = useState(false);

  return (
      <ImageBackground
        source={require("../../assets/photo.png")}
        style={{ width: "100%", height: "100%" }}
      >
        <View
          style={styles.container}
          behavior={Platform.OS === "ios" ? "padding" : null}
        >
          <View style={styles.list}>
            <View>
              {!imageVisible ? (
                <Image
                  style={styles.post}
                  source={require("../../assets/grey.png")}
                />
              ) : (
                <Image
                  style={styles.post}
                  source={require("../../assets/face.png")}
                />
              )}
              <View style={styles.addButtonContainer}>
                {imageVisible ? (
                  <TouchableOpacity
                    style={styles.outButton}
                    onPress={() => {
                      setImageVisible(false);
                    }}
                  >
                    <Text style={styles.outButtonTitle}>×</Text>
                  </TouchableOpacity>
                ) : (
                  <TouchableOpacity
                    style={styles.addButton}
                    onPress={() => {
                      setImageVisible(true);
                    }}
                  >
                    <Text style={styles.addButtonTitle}>+</Text>
                  </TouchableOpacity>
                )}
              </View>
            </View>
            <Text style={styles.title}>Natali Romanova</Text>
          </View>
        </View>
      </ImageBackground>
  )
}

const styles = StyleSheet.create({
  addButtonContainer: {
    position: "absolute",
    bottom: 14,
    right: -14,
  },
  addButton: {
    width: 30,
    height: 30,
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center",
    borderColor: "#FF6C00",
    borderWidth: 1,
  },
  addButtonTitle: {
    position: "absolute",
    top: -6.5,
    right: 3.5,
    color: "#FF6C00",
    fontSize: 30,
    fontWeight: 200,
    textAlign: "center",
  },
  outButton: {
    width: 30,
    height: 30,
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center",
    borderColor: "#E8E8E8",
    borderWidth: 1,
    backgroundColor: "#fff",
  },
  outButtonTitle: {
    position: "absolute",
    top: -6.5,
    right: 3.5,
    color: "#BDBDBD",
    fontSize: 30,
    fontWeight: 200,
    textAlign: "center",
  },
  container: {
    flex: 1,
    top: "18%",
    backgroundColor: "#FFF",
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
  },
  list: {
    alignItems: "center",
    top: -60,
  },
  post: {
    width: 120,
    height: 120,
    borderRadius: 16,
  },
  title: {
    padding: 32,
    fontWeight: "500",
    fontSize: 30,
    lineHeight: 35,
    textAlign: "center",
    letterSpacing: 0.01,
  },
});

export default ProfileScreen