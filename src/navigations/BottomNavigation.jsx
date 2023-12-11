import React from 'react';
import {Image, Text, View} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import colors from '../constants/colors';
import routes from '../constants/routes';
import {ProfileScreen, SearchScreen} from '../screens';
import styles from './styles';
import FavouritesScreen from '../screens/Favourites/FavouritesScreen';
import images from '../constants/images';
import {scale} from '../styles/responsiveFontSize';
import fontFamily from '../styles/fontFamily';

const Tab = createBottomTabNavigator();

const BottomNavigation = () => {
  return (
    <Tab.Navigator
      screenOptions={{headerShown: false}}
      initialRouteName="Home"
      tabBarOptions={{
        showLabel: false,
        style: {
          borderTopColor: 'transparent',
          height: 150,
        },
      }}>
      <Tab.Screen
        name={routes.SEARCH_SCREEN}
        component={SearchScreen}
        options={{
          tabBarIcon: ({focused}) => (
            <View style={{justifyContent: 'center', alignItems: 'center'}}>
              <Image
                source={images.SEARCH}
                style={[
                  styles.imageStyle,
                  {tintColor: focused ? colors.PRIMARY : colors.BLACK},
                ]}
              />
              <Text
                style={{
                  color: focused ? colors.PRIMARY : colors.BLACK,
                  fontFamily: fontFamily.ROBOTO_BLACK,
                  fontSize: scale(10),
                }}>
                Search
              </Text>
            </View>
          ),
        }}
      />

      <Tab.Screen
        name={routes.FAVOURITES_SCREEN}
        component={FavouritesScreen}
        options={{
          tabBarIcon: ({focused}) => (
            <View style={{justifyContent: 'center', alignItems: 'center'}}>
              <Image
                source={images.HEART}
                style={[
                  styles.imageStyle,
                  {tintColor: focused ? colors.PRIMARY : colors.BLACK},
                ]}
              />
              <Text
                style={{
                  color: focused ? colors.PRIMARY : colors.BLACK,
                  fontFamily: fontFamily.ROBOTO_BLACK,
                  fontSize: scale(10),
                }}>
                Favourite
              </Text>
            </View>
          ),
        }}
      />

      <Tab.Screen
        name={routes.PROFILE_SCREEN}
        component={ProfileScreen}
        options={{
          tabBarIcon: ({focused}) => (
            <View style={{justifyContent: 'center', alignItems: 'center'}}>
              <Image
                source={images.ACCOUNT}
                style={[
                  styles.imageStyle,
                  {tintColor: focused ? colors.PRIMARY : colors.BLACK},
                ]}
              />
              <Text
                style={{
                  color: focused ? colors.PRIMARY : colors.BLACK,
                  fontFamily: fontFamily.ROBOTO_BLACK,
                  fontSize: scale(10),
                }}>
                Account
              </Text>
            </View>
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomNavigation;
