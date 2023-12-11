import images from '../../constants/images';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import {moderateScale} from '../../styles/responsiveFontSize';
import {GoogleSignin} from '@react-native-google-signin/google-signin';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useEffect, useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import routes from '../../constants/routes';

const ProfileScreen = () => {
  const [userInfo, setUserInfo] = useState(null);
  const navigation = useNavigation();

  useEffect(() => {
    const configureGoogleSignIn = async () => {
      try {
        await GoogleSignin.configure({
          androidClientId:
            '187108795379-88suqrlqleep799oif0r6t5nqpd9s76c.apps.googleusercontent.com',
        });
      } catch (error) {
        console.error('Error configuring GoogleSignIn:', error);
      }
    };

    configureGoogleSignIn();
  }, []);

  useEffect(() => {
    const fetchUserInfo = async () => {
      try {
        const storedUserInfo = await AsyncStorage.getItem('userInfo');
        if (storedUserInfo) {
          const userInfo = JSON.parse(storedUserInfo);
          setUserInfo(userInfo);
        }
      } catch (error) {
        console.error('Error retrieving user information:', error);
      }
    };

    fetchUserInfo();
  }, []);
  const signOut = async () => {
    try {
      await GoogleSignin.signOut();
      navigation.navigate(routes.LOGIN_SCREEN);
      await AsyncStorage.removeItem('userInfo');
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <View>
      <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
        {userInfo && userInfo.user.photo ? (
          <Image
            style={{
              width: moderateScale(40),
              height: moderateScale(40),
              borderRadius: moderateScale(20),
            }}
            source={{uri: userInfo.user.photo}}
          />
        ) : (
          <Image
            style={{
              width: moderateScale(40),
              height: moderateScale(40),
              borderRadius: moderateScale(20),
            }}
            source={images.CAR_MARKER}
          />
        )}
      </View>
      <View>
        <TouchableOpacity onPress={signOut}>
          <Text>Logout</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ProfileScreen;
