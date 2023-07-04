import { Text, View, Image, StyleSheet, TouchableOpacity, TextInput } from "react-native";
import { Ionicons } from '@expo/vector-icons';

const CreatePostsScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.containerPost}>
        <View style={styles.containerImage}>
          <Image
            style={styles.post}
            source={require("../../assets/camera.png")}
          />
        </View>
      </View>
      <Text style={styles.text}>Завантажте фото</Text>
      <TextInput
        style={styles.input}
        placeholder="Назва..."
        placeholderTextColor="#BDBDBD"
      />
      <View style={styles.locationContainer}>
        <Ionicons name="location-outline" size={24} color="#D9D9D9" />
        <TextInput
          style={styles.locationInput}
          placeholder="Місцевість..."
          placeholderTextColor="#BDBDBD"
        />
      </View>
      <View style={styles.btn}>
        <TouchableOpacity style={styles.buttonContainer}>
          <Text style={styles.buttonText}>Опубліковати</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: "100%",
    backgroundColor: "white",
  },
  containerPost: {
    height: 240,
    marginTop: 30,
    marginHorizontal: 10,
    backgroundColor: "#F6F6F6",
    borderRadius: 16,
    borderColor: "#E8E8E8",
    borderWidth: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  containerImage: {
    width: 60,
    height: 60,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
    borderRadius: 50,
  },
  text: {
    marginTop: 10,
    marginHorizontal: 10,
    fontSize: 16,
    color: "#BDBDBD",
  },
  input: {
    height: 50,
    marginHorizontal: 10,
    marginTop: 10,
    paddingHorizontal: 15,
    borderBottomWidth: 1,
    borderBottomColor: "#D9D9D9",
  },
  locationInput: {
    height: 50,
    marginTop: 10,
    paddingHorizontal: 5,
  },
  locationContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginHorizontal: 10,
    marginTop: 10,
    paddingHorizontal: 15,
    borderBottomWidth: 1,
    borderBottomColor: "#D9D9D9",
  },
  buttonContainer: {
    marginHorizontal: 10,
    height: 50,
    marginTop: 30,
    backgroundColor: "#F6F6F6",
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText: {
    color: "#D9D9D9",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default CreatePostsScreen;
