import {useNavigation, useRoute} from '@react-navigation/native';
import images from '../../constants/images';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import {moderateScale} from '../../styles/responsiveFontSize';
import {GoogleSignin} from '@react-native-google-signin/google-signin';

const HomeScreen = () => {
  const route = useRoute();
  const userInfo = route.params?.userInfo;
  const navigation = useNavigation();
  console.log(userInfo ? userInfo.user.photo : null);

  const signOut = async () => {
    try {
      await GoogleSignin.signOut();
      navigation.goBack();
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

export default HomeScreen;
