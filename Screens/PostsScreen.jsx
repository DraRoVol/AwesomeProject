import { createStackNavigator } from "@react-navigation/stack";
import "react-native-gesture-handler";
import Home from "./postsScreens/Home";
import CreatePostsScreen from "./postsScreens/CreatePostsScreen";
import CommentsScreen from "./postsScreens/CommentsScreen";
import ProfileScreen from "./postsScreens/ProfileScreen";
import MapScreen from "./postsScreens/MapScreen";

const MainStack = createStackNavigator();

const PostsScreen = () => {

  return (
      <MainStack.Navigator initialRouteName="Home">
        <MainStack.Screen name="Home" component={Home} />
        <MainStack.Screen name="CreatePostsScreen" component={CreatePostsScreen} />
        <MainStack.Screen name="CommentsScreen" component={CommentsScreen} />
        <MainStack.Screen name="ProfileScreen" component={ProfileScreen} />
      <MainStack.Screen name="MapScreen" component={MapScreen} />
    </MainStack.Navigator>
  );
};

export default PostsScreen;
