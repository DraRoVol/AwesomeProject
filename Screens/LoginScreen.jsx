import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableWithoutFeedback,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  TouchableOpacity,
  ImageBackground,
} from "react-native";

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [containerStyle, setContainerStyle] = useState(styles.container);
  const [inputBorderColor, setInputBorderColor] = useState({
    email: "#E8E8E8",
    password: "#E8E8E8",
  });

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleInputFocus = (inputName) => {
    setContainerStyle({ ...styles.container, top: "33%" });
    setInputBorderColor((prevState) => {
      return { ...prevState, [inputName]: "#FF6C00" };
    });
  };

  const handleInputBlur = (inputName) => {
    setContainerStyle({ ...styles.container, top: "40%" });
    setInputBorderColor((prevState) => {
      return { ...prevState, [inputName]: "#E8E8E8" };
    });
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <ImageBackground
        source={require("../assets/photo.png")}
        style={{ width: "100%", height: "100%" }}
      >
        <KeyboardAvoidingView
          style={containerStyle}
          behavior={Platform.OS === "ios" ? "padding" : null}
        >
          <View style={styles.list}>
            <Text style={styles.title}>Увійти</Text>
            <View style={styles.listInput}>
              <TextInput
                value={email}
                placeholder="Адреса електронної пошти"
                style={[styles.input, { borderColor: inputBorderColor.email }]}
                onChangeText={setEmail}
                onFocus={() => handleInputFocus("email")}
                onBlur={() => handleInputBlur("email")}
              />
              <TextInput
                value={password}
                secureTextEntry={!showPassword}
                placeholder="Пароль"
                style={[
                  styles.input,
                  { borderColor: inputBorderColor.password },
                ]}
                onChangeText={setPassword}
                onFocus={() => handleInputFocus("password")}
                onBlur={() => handleInputBlur("password")}
              />
              <TouchableOpacity
                onPress={toggleShowPassword}
                style={styles.showPasswordButton}
              >
                <Text style={styles.showPasswordButtonText}>
                  {showPassword ? "Приховати" : "Показати"}
                </Text>
              </TouchableOpacity>
            </View>
            <View style={styles.btn}>
              <TouchableOpacity
                style={styles.buttonContainer}
                onPress={() => navigation.navigate("Home")}
              >
                <Text style={styles.buttonText}>Увійти</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.navigation}>
              <Text style={styles.text}>Немає акаунту?</Text>
              <TouchableOpacity
                onPress={() => navigation.navigate("Registration")}
              >
                <Text style={styles.buttonNavigation}>Зареєструватися</Text>
              </TouchableOpacity>
            </View>
          </View>
        </KeyboardAvoidingView>
      </ImageBackground>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    top: "40%",
    backgroundColor: "#FFF",
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
  },
  list: {
    alignItems: "center",
  },
  post: {
    width: 120,
    height: 120,
    backgroundColor: "#F6F6F6",
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
  listInput: {
    gap: 16,
  },
  input: {
    width: 343,
    height: 50,
    padding: 16,
    backgroundColor: "#F6F6F6",
    borderRadius: 8,
    borderWidth: 1,
    borderStyle: "solid",
  },
  buttonContainer: {
    width: 343,
    height: 50,
    marginTop: 30,
    backgroundColor: "#FF6C00",
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center",
  },

  buttonText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "bold",
  },
  navigation: {
    flexDirection: "row",
    alignItems: "center",
    paddingTop: 16,
  },
  text: {
    fontSize: 16,
    fontWeight: 400,
    color: "#1B4371",
    paddingRight: 4,
  },
  buttonNavigation: {
    fontSize: 16,
    fontWeight: 400,
    color: "#1B4371",
    textDecorationLine: "underline",
  },
  showPasswordButton: {
    position: "absolute",
    top: 125,
    right: 10,
    bottom: 10,
    justifyContent: "center",
    paddingHorizontal: 5,
  },
  showPasswordButtonText: {
    color: "#1B4371",
  },
});

export default LoginScreen;
