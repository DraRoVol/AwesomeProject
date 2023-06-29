import RegistrationScreen from "./RegistrationScreen";
import LoginScreen from "./LoginScreen";

const PostsScreen = () => {
  const showRegistration = true;
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
