import React from 'react';
import {TouchableOpacity, Text, StyleSheet} from 'react-native';
import {colors} from '../../res/colors';

interface AppButtonProps {
  title: string;
  onPress: () => void;
  isDisabled?: boolean;
  style?: object;
}

const AppButton = ({
  title,
  onPress,
  isDisabled = false,
  style,
}: AppButtonProps) => {
  return (
    <TouchableOpacity
      style={[isDisabled ? styles.disabledButton : styles.button, style]}
      onPress={onPress}>
      <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 5,
    backgroundColor: colors.yellow,
    paddingHorizontal: 10,
    borderRadius: 10,
    paddingVertical: 5,
  },
  disabledButton: {
    alignItems: 'center',
    justifyContent: 'center',
    opacity: 0.5,
    marginHorizontal: 5,
    backgroundColor: colors.yellow,
    borderRadius: 10,
    paddingHorizontal: 10,
    paddingVertical: 5,
  },

  buttonText: {
    fontSize: 23,
    color: colors.white,
    textAlign: 'center',
  },
});

export default AppButton;
