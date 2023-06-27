import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TextInput,
  Button,
  KeyboardAvoidingView,
  Platform,
  TouchableOpacity,
} from "react-native";

const RegistrationScreen = () => {
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [containerStyle, setContainerStyle] = useState(styles.container);
  const [inputBorderColor, setInputBorderColor] = useState("#E8E8E8");

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };
  // Set the desired border color
  const handleInputFocus = () => {
    setContainerStyle({ ...styles.container, top: "20%" });
    setInputBorderColor("#FF6C00");
  };
  // Reset the border color on blur
  const handleInputBlur = () => {
    setContainerStyle({ ...styles.container, top: "33%" });
    setInputBorderColor("#E8E8E8");
  };

  return (
    <KeyboardAvoidingView
      style={containerStyle}
      behavior={Platform.OS === "ios" ? "padding" : null}
    >
      <View style={styles.list}>
        <View>
          <Image style={styles.post} />
          <View style={styles.addButtonContainer}>
            <TouchableOpacity
              style={styles.addButton}
              onPress={() => {}}
            >
              <Text style={styles.addButtonTitle}>+</Text>
            </TouchableOpacity>
          </View>
        </View>
        <Text style={styles.title}>Реєстрація</Text>
        <View style={styles.listInput}>
          <TextInput
            placeholder="Логін"
            style={[styles.input, { borderColor: inputBorderColor }]}
            onFocus={handleInputFocus}
            onBlur={handleInputBlur}
          />
          <TextInput
            placeholder="Адреса електронної пошти"
            style={[styles.input, { borderColor: inputBorderColor }]}
            onFocus={handleInputFocus}
            onBlur={handleInputBlur}
          />
          <TextInput
            value={password}
            secureTextEntry={!showPassword}
            placeholder="Пароль"
            style={[styles.input, { borderColor: inputBorderColor }]}
            onChangeText={setPassword}
            onFocus={handleInputFocus}
            onBlur={handleInputBlur}
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
          <Button title="Зареєстуватися" color="#fff" />
        </View>
        <Text style={styles.text}>Вже є акаунт? Увійти</Text>
      </View>
    </KeyboardAvoidingView>
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
  btn: {
    width: 343,
    height: 51,
    padding: 7,
    marginTop: 30,
    backgroundColor: "#FF6C00",
    borderRadius: 50,
  },
  text: {
    paddingTop: 16,
    fontWeight: 400,
    fontSize: 16,
    lineHeight: 19,
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
