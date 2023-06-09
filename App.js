import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import "react-native-gesture-handler";
import RegistrationScreen from "./Screens/RegistrationScreen";
import LoginScreen from "./Screens/LoginScreen";
import Home from "./Screens/Home";

const MainStack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <MainStack.Navigator initialRouteName="Registration">
        <MainStack.Screen
          name="Registration"
          component={RegistrationScreen}
          options={{ headerShown: false }}
        />
        <MainStack.Screen
          name="Login"
          component={LoginScreen}
          options={{ headerShown: false }}
        />
        <MainStack.Screen
          name="Home"
          component={Home}
          options={{ headerShown: false }}
        />
      </MainStack.Navigator>
    </NavigationContainer>
  );
}

