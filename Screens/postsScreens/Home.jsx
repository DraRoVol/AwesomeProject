import { Ionicons } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import CreatePostsScreen from "./CreatePostsScreen";
import CommentsScreen from "./CommentsScreen";
import ProfileScreen from "./ProfileScreen";

const Tabs = createBottomTabNavigator();

const Home = () => {
  return (
        <Tabs.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color }) => {
          let iconName;

          if (route.name === "CreatePostsScreen") {
            iconName = focused ? "qr-code" : "qr-code-outline";
          } else if (route.name === "ProfileScreen") {
            iconName = focused ? "person" : "person-outline";
          } else if (route.name === "CommentsScreen") {
            iconName = focused ? "add" : "add-outline";
          }

          return <Ionicons name={iconName} color={color} size={24}/>;
        },
        tabBarLabel: () => null,
      })}
      tabBarOptions={{
        activeBackgroundColor: "tomato",
        activeTintColor: "white",
        inactiveTintColor: "gray",
        tabStyle: {
          height: 40,
          borderRadius: 20,
        },
      }}
    >
      <Tabs.Screen name="CreatePostsScreen" component={CreatePostsScreen} />
      <Tabs.Screen name="CommentsScreen" component={CommentsScreen} />
      <Tabs.Screen name="ProfileScreen" component={ProfileScreen} />
    </Tabs.Navigator>
  );
};

export default Home;
