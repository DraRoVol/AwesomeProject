import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TextInput,
  TouchableWithoutFeedback,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  TouchableOpacity,
  ImageBackground,
} from "react-native";

const RegistrationScreen = ({ navigation }) => {
  const [login, setLogin] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [containerStyle, setContainerStyle] = useState(styles.container);
  const [inputBorderColor, setInputBorderColor] = useState({
    login: "#E8E8E8",
    email: "#E8E8E8",
    password: "#E8E8E8",
  });
  const [imageVisible, setImageVisible] = useState(false);

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleInputFocus = (inputName) => {
    setContainerStyle({ ...styles.container, top: "20%" });
    setInputBorderColor((prevState) => {
      return { ...prevState, [inputName]: "#FF6C00" };
    });
  };

  const handleInputBlur = (inputName) => {
    setContainerStyle({ ...styles.container, top: "33%" });
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
            <View>
              {!imageVisible ? (
                <Image
                  style={styles.post}
                  source={require("../assets/grey.png")}
                />
              ) : (
                <Image
                  style={styles.post}
                  source={require("../assets/face.png")}
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
            <Text style={styles.title}>Реєстрація</Text>
            <View style={styles.listInput}>
              <TextInput
                value={login}
                placeholder="Логін"
                style={[styles.input, { borderColor: inputBorderColor.login }]}
                onChangeText={setLogin}
                onFocus={() => handleInputFocus("login")}
                onBlur={() => handleInputBlur("login")}
              />
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
                <Text style={styles.buttonText}>Зареєстуватися</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.navigation}>
              <Text style={styles.text}>Вже є акаунт?</Text>
              <TouchableOpacity onPress={() => navigation.navigate("Login")}>
                <Text style={styles.buttonNavigation}>Увійти</Text>
              </TouchableOpacity>
            </View>
          </View>
        </KeyboardAvoidingView>
      </ImageBackground>
    </TouchableWithoutFeedback>
  );
};

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
    top: "33%",
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

export default RegistrationScreen;
