import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import routes from '../constants/routes';
import {
  BottomNavigation,
  LoginScreen,
  ProfileScreen,
  SearchScreen,
  SplashScreen,
} from '../screens';

const Stack = createNativeStackNavigator();

const AppNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name={routes.SPLASH_SCREEN} component={SplashScreen} />
        <Stack.Screen name={routes.LOGIN_SCREEN} component={LoginScreen} />
        <Stack.Screen name={routes.HOME_SCREEN} component={BottomNavigation} />
        <Stack.Screen name={routes.SEARCH_SCREEN} component={SearchScreen} />
        <Stack.Screen name={routes.PROFILE_SCREEN} component={ProfileScreen} />
        <Stack.Screen
          name={routes.FAVOURITES_SCREEN}
          component={ProfileScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigation;
