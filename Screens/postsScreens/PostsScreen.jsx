import { Ionicons } from "@expo/vector-icons";
import "react-native-gesture-handler";
import { useEffect } from "react";
import { View, Text, TouchableOpacity, Image, StyleSheet } from "react-native";

const PostsScreen = ({ navigation }) => {
  useEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <TouchableOpacity
          style={{ marginRight: 20 }}
          onPress={() => navigation.navigate("Login")}
        >
          <Ionicons name="log-out-outline" size={24} color="#BDBDBD" />
        </TouchableOpacity>
      ),
    });
  }, [navigation]);

  return (
    <View style={styles.container}>
      <Image style={styles.post} source={require("../../assets/face.png")} />
      <View style={styles.list}>
        <Text style={styles.text}>Natali Romanova</Text>
        <Text style={styles.emailText}>email@example.com</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    height: '100%',
    backgroundColor: "white",
  },
  post: {
    marginTop: 30,
    marginLeft: 20,
    width: 60,
    height: 60,
  },
  list: {
    marginTop: 40,
    marginLeft: 10,
  },
  text: {
    fontWeight: "bold",
    color: "#212121",
  },
  emailText: {
    color: "rgba(33, 33, 33, 0.8)",
  },
});

export default PostsScreen;
