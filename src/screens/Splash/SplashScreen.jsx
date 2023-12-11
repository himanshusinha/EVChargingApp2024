import {View, Text} from 'react-native';
import React, {useEffect} from 'react';
import Auth from '@react-native-firebase/auth';
import {StackActions, useNavigation} from '@react-navigation/native';
import routes from '../../constants/routes';
import AsyncStorage from '@react-native-async-storage/async-storage';

const SplashScreen = () => {
  //
  const navigation = useNavigation();
  useEffect(() => {
    const checkUserAuthentication = async () => {
      try {
        const storedUserInfo = await AsyncStorage.getItem('userInfo');

        if (storedUserInfo) {
          // User session found in AsyncStorage, navigate to the home screen
          navigation.dispatch(StackActions.replace(routes.HOME_SCREEN));
        } else {
          // No user session found, navigate to the login screen
          navigation.dispatch(StackActions.replace(routes.LOGIN_SCREEN));
        }
      } catch (error) {
        // Handle AsyncStorage error
        console.error('Error checking user authentication:', error);
      }
    };

    // Check user authentication on component mount
    checkUserAuthentication();

    return () => {};
  }, [navigation]);
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>SplashScreen</Text>
    </View>
  );
};
export default SplashScreen;
