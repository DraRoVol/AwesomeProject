import { StyleSheet, ImageBackground } from 'react-native';
import PostsScreen from './Screens/PostsScreen'

export default function App() {
  return (   
      <ImageBackground source={require('./assets/photo.png')} style={{ width: '100%', height: '100%' }}>
        <PostsScreen />
      </ImageBackground>
  );
}

// const styles = StyleSheet.create({
  // container: {
  //   flex: 1,
  //   alignItems: 'center',
  //   justifyContent: 'center',
  // },
  //   title: {
  //   padding: 15,
  //   color: "#20232a",
  //   textAlign: "center",
  //   fontSize: 130,
  //     fontWeight: "bold",
  //         flex: 1,
  //       alignItems: 'center',
  //   justifyContent: 'center',
  // }
// });
