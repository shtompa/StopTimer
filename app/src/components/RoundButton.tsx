import React from 'react';
import {TouchableOpacity, Text, StyleSheet} from 'react-native';
import {colors} from '../../res/colors';

interface RoundButtonProps {
  title: string;
  onPress: () => void;
  isDisabled?: boolean;
  style?: object;
}

const RoundButton = ({
  title,
  onPress,
  isDisabled = false,
  style,
}: RoundButtonProps) => {
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
    height: 100,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 50,
    marginHorizontal: 5,
    aspectRatio: '1',
    backgroundColor: colors.yellow,
  },
  disabledButton: {
    height: 100,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 50,
    opacity: 0.5,
    marginHorizontal: 5,
    aspectRatio: '1',
    backgroundColor: colors.yellow,
  },

  buttonText: {
    fontSize: 23,
    color: colors.white,
    textAlign: 'center',
  },
});

export default RoundButton;
