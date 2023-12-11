//import liraries
import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  ActivityIndicator,
} from 'react-native';
import styles from './styles';
// create a component
const AppButton = ({
  onPress = () => {},
  text = '',
  style = {},
  leftImg = null,
  isLoading = false,
  buttonDisabled,
  textStyle = {},
}) => {
  return (
    <TouchableOpacity
      disabled={buttonDisabled}
      style={{...styles.container, ...style}}
      onPress={onPress}
      activeOpacity={0.7}>
      <Text style={{...styles.textStyle, ...textStyle}}>{text}</Text>

      <View />
    </TouchableOpacity>
  );
};

export default AppButton;
