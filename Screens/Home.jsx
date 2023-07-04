import { Ionicons } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { View, TouchableOpacity } from "react-native";
import { useEffect } from "react";
import PostsScreen from "./postsScreens/PostsScreen";
import CreatePostsScreen from "./postsScreens/CreatePostsScreen";
import ProfileScreen from "./postsScreens/ProfileScreen";

const Tabs = createBottomTabNavigator();

const CustomTabBarButton = ({ children, onPress, accessibilityState }) => {
  const focused = accessibilityState.selected;
  return (
    <TouchableOpacity
      style={{
        flex: 1,
        height: 60,
        justifyContent: "center",
        alignItems: "center",
      }}
      onPress={onPress}
    >
      <View
        style={{
          width: 70,
          height: 40,
          borderRadius: 35,
          backgroundColor: focused ? "tomato" : "transparent",
        }}
      >
        {children}
      </View>
    </TouchableOpacity>
  );
};

const Home = ({ navigation }) => {

  useEffect(() => {
    navigation.navigate("PostsScreen");
  }, []);

  return (
    <Tabs.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color }) => {
          let iconName;

          if (route.name === "PostsScreen") {
            iconName = focused ? "qr-code" : "qr-code-outline";
          } else if (route.name === "CreatePostsScreen") {
            iconName = focused ? "add" : "add-outline";
          } else if (route.name === "ProfileScreen") {
            iconName = focused ? "person" : "person-outline";
          }

          return <Ionicons name={iconName} color={color} size={24} />;
        },
        tabBarButton: (props) => <CustomTabBarButton {...props} />,
        tabBarLabel: () => null,
      })}
      tabBarOptions={{
        activeTintColor: "white",
        inactiveTintColor: "gray",
      }}
    >
      <Tabs.Screen name="PostsScreen" component={PostsScreen} options={{ headerShown: 'H' }}/>
      <Tabs.Screen name="CreatePostsScreen" component={CreatePostsScreen} />
      <Tabs.Screen name="ProfileScreen" component={ProfileScreen} options={{ headerShown: false }}/>
    </Tabs.Navigator>
  );
};

export default Home;

    //     useEffect(() => {
  //   navigation.setOptions({
  //     headerLeft: null,
  //   });
  // }, [navigation]);
