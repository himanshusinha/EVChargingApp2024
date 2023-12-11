import colors from '../../constants/colors';
import {StyleSheet} from 'react-native';
import {moderateScale, textScale} from '../../styles/responsiveFontSize';

// define your styles
const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.PRIMARY,
    height: moderateScale(52),
    borderRadius: moderateScale(8),
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    paddingHorizontal: moderateScale(16),
    width: '90%',
  },
  textStyle: {
    width: '90%',
    color: colors.WHITE,
    fontSize: textScale(16),
    alignSelf: 'center',
  },
});
export default styles;
