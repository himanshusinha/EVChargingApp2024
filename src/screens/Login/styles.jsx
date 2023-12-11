import {StyleSheet} from 'react-native';
import {
  moderateScale,
  moderateScaleVertical,
  scale,
} from '../../styles/responsiveFontSize';
import colors from '../../constants/colors';
import fontFamily from '../../styles/fontFamily';

const styles = StyleSheet.create({
  container: {flex: 1},
  logoContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: moderateScale(20),
  },
  logoStyle: {width: '60%', height: moderateScale(30)},
  bannerStyle: {width: '100%', height: moderateScale(240)},
  buttonContainer: {
    justifyContent: 'flex-end',
    alignItems: 'center',
    marginBottom: moderateScaleVertical(20),
  },
  buttonStyle: {width: '95%', alignItems: 'center'},
  textStyle: {color: colors.WHITE, textAlign: 'center'},
  subTitle: {
    fontFamily: fontFamily.ROBOTO_LIGHT,
    color: 'grey',
    fontSize: scale(16),
  },
  title: {
    fontFamily: fontFamily.ROBOTO_LIGHT,
    color: 'grey',
    fontSize: scale(16),
  },
  titleContainer: {
    marginTop: moderateScaleVertical(10),
    justifyContent: 'center',
    alignItems: 'center',
  },
  mainTitle: {
    fontSize: scale(18),
    fontFamily: fontFamily.ROBOTO_BOLD,
    color: 'black',
    alignSelf: 'center',
  },
  mainSubTitle: {
    fontSize: scale(18),
    fontFamily: fontFamily.ROBOTO_BOLD,
    color: 'black',
    alignSelf: 'center',
  },
  mainTitleContainer: {marginTop: moderateScaleVertical(30)},
  mainContainer: {
    flex: 1,
    alignItems: 'center',
  },
});
export default styles;
