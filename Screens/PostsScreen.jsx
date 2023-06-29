import RegistrationScreen from "./RegistrationScreen";
import LoginScreen from "./LoginScreen";

const PostsScreen = () => {
  const showRegistration = false;
  return (
     <>
      {showRegistration ? (
        <RegistrationScreen />
      ) :  (
        <LoginScreen />
      ) }
    </>
  );
};

export default PostsScreen;
