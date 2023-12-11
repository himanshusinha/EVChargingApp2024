import {View, Text, Image, Dimensions} from 'react-native';
import React, {useEffect} from 'react';
import images from '../../constants/images';
import {
  moderateScale,
  moderateScaleVertical,
  scale,
} from '../../styles/responsiveFontSize';
import fontFamily from '../../styles/fontFamily';
import AppButton from '../../components/button/AppButton';
import colors from '../../constants/colors';
import {
  GoogleSignin,
  statusCodes,
} from '@react-native-google-signin/google-signin';
import {useNavigation} from '@react-navigation/native';
import routes from '../../constants/routes';
import AsyncStorage from '@react-native-async-storage/async-storage';
import styles from './styles';

const LoginScreen = () => {
  useEffect(() => {
    GoogleSignin.configure({
      androidClientId:
        '187108795379-88suqrlqleep799oif0r6t5nqpd9s76c.apps.googleusercontent.com',
    });
  }, []);

  const navigation = useNavigation();

  const signIn = async () => {
    try {
      await GoogleSignin.hasPlayServices();
      const userInfo = await GoogleSignin.signIn();

      await AsyncStorage.setItem('userInfo', JSON.stringify(userInfo));

      navigation.navigate(routes.HOME_SCREEN, {userInfo});
    } catch (error) {
      if (error.code === statusCodes.SIGN_IN_CANCELLED) {
      } else if (error.code === statusCodes.IN_PROGRESS) {
      } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
      } else {
      }
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Image source={images.LOGO} style={styles.logoStyle} />
        <Image source={images.EV_CHARGING} style={styles.bannerStyle} />
      </View>
      <View style={styles.mainContainer}>
        <View style={styles.mainTitleContainer}>
          <Text style={styles.mainTitle}>Your Ultimate EV Charging</Text>
          <Text style={styles.mainSubTitle}>Station Finder App</Text>
        </View>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>
            Find EV Charging station near you, plan trip and
          </Text>
          <Text style={styles.subTitle}>so much more in just one click</Text>
        </View>
      </View>
      <View style={styles.buttonContainer}>
        <AppButton
          onPress={signIn}
          style={styles.buttonStyle}
          text="Google Login"
          textStyle={styles.textStyle}
        />
      </View>
    </View>
  );
};

export default LoginScreen;
