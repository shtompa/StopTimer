import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  TextInput,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';
import {colors} from './app/res/colors';
import {strings} from './app/res/strings';

const App = () => {
  const [seconds, setSeconds] = useState(0);
  const [remainingSeconds, setRemainingSeconds] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    if (isRunning) {
      const intervalId = setInterval(() => {
        setRemainingSeconds(prev => Math.max(0, prev - 1));
      }, 1000);

      return () => clearInterval(intervalId);
    }
  }, [isRunning]);

  const startButtonStyle = {
    ...style.button,
    backgroundColor: colors.green,
  };

  const startButtonDisabledStyle = {
    ...style.disabledButton,
    backgroundColor: colors.green,
  };

  const stopButtonStyle = {
    ...style.button,
    backgroundColor: colors.red,
  };

  const stopButtonDisabledStyle = {
    ...style.disabledButton,
    backgroundColor: colors.red,
  };

  const onStart = () => {
    setIsRunning(true);
    setRemainingSeconds(seconds);
  };

  const onStop = () => {
    setIsRunning(false);
  };

  const onReset = () => {
    setIsRunning(false);
    setRemainingSeconds(0);
  };

  const onTextChange = (text: string) => {
    setSeconds(parseInt(text) || 0);
  };

  const formatTime = (seconds: number) => {
    if (seconds < 0) {
      seconds = -seconds;
    }
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const remainingSeconds = seconds % 60;

    const formattedHours = hours.toString().padStart(2, '0');
    const formattedMinutes = minutes.toString().padStart(2, '0');
    const formattedSeconds = remainingSeconds.toString().padStart(2, '0');

    return `${formattedHours}:${formattedMinutes}:${formattedSeconds}`;
  };

  return (
    <View style={style.mainContainer}>
      <View style={style.textInputContainer}>
        <Text style={style.textInputTitle}>{strings.timerTitle}</Text>
        <TextInput
          value={seconds.toString()}
          onChangeText={onTextChange}
          keyboardType="numeric"
          style={style.textInput}
        />
      </View>
      <View style={style.timerContainer}>
        <Text style={style.timerText}>{formatTime(remainingSeconds)}</Text>
      </View>
      <View style={style.buttonContainer}>
        {
          // !isRunning && (
          <TouchableOpacity
            style={isRunning ? startButtonDisabledStyle : startButtonStyle}
            onPress={onStart}
            disabled={isRunning}>
            <Text style={style.buttonText}>{strings.start}</Text>
          </TouchableOpacity>
          // )
        }
        {
          // isRunning && (
          <TouchableOpacity
            style={!isRunning ? stopButtonDisabledStyle : stopButtonStyle}
            onPress={onStop}
            disabled={!isRunning}>
            <Text style={style.buttonText}>{strings.stop}</Text>
          </TouchableOpacity>
          // )
        }
        <TouchableOpacity style={style.button} onPress={onReset}>
          <Text style={style.buttonText}>{strings.reset}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const style = StyleSheet.create({
  mainContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.white,
    padding: 10,
  },
  textInputContainer: {
    margin: 30,
    justifyContent: 'center',
    marginBottom: 10,
  },
  textInputTitle: {
    fontSize: 18,
    color: colors.black,
  },
  textInput: {
    fontSize: 20,
    borderColor: colors.black,
    textAlign: 'center',
    borderWidth: 2,
    color: colors.black,
    margin: 10,
    paddingHorizontal: 5,
    borderRadius: 10,
  },
  timerContainer: {
    margin: 30,
    height: 200,
    width: 200,
    borderColor: colors.black,
    borderWidth: 2,
    borderRadius: 100,
    textAlign: 'center',
    justifyContent: 'center',
    alignItems: 'center',
  },
  timerText: {
    fontSize: 34,
    color: colors.black,
    textAlign: 'center',
  },
  buttonContainer: {
    margin: 10,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  button: {
    height: 100,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 50,
    paddingHorizontal: 20,
    paddingVertical: 5,
    aspectRatio: '1',
    borderColor: colors.black,
    backgroundColor: colors.yellow,
  },
  disabledButton: {
    height: 100,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 50,
    paddingHorizontal: 20,
    paddingVertical: 5,
    opacity: 0.5,
    marginHorizontal: 10,
    aspectRatio: '1',
    borderColor: colors.black,
    backgroundColor: 'red',
  },
  buttonText: {
    fontSize: 23,
    color: colors.white,
    textAlign: 'center',
  },
});

export default App;
