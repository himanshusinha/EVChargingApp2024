import {StyleSheet} from 'react-native';
import colors from '../constants/colors';
import {moderateScale} from '../styles/responsiveFontSize';
const styles = StyleSheet.create({
  button: {
    top: -30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonView: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: colors.PRIMARY,
  },
  imageStyle: {
    width: moderateScale(20),
    height: moderateScale(20),
  },
});
export default styles;
