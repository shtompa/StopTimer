import React from 'react';
import {StyleSheet, TextInput, Text, View} from 'react-native';
import {colors} from './app/res/colors';
import {strings} from './app/res/strings';
import RoundButton from './app/src/components/RoundButton';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      seconds: 0,
      remainingSeconds: 0,
      isRunning: false,
    };
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.isRunning !== this.state.isRunning && this.state.isRunning) {
      this.intervalId = setInterval(() => {
        this.setState(prevState => ({
          remainingSeconds: Math.max(0, prevState.remainingSeconds - 1),
        }));
      }, 1000);
    } else if (
      prevState.isRunning !== this.state.isRunning &&
      !this.state.isRunning
    ) {
      clearInterval(this.intervalId);
    }
  }

  componentWillUnmount() {
    clearInterval(this.intervalId);
  }

  onStart = () => {
    this.setState({isRunning: true, remainingSeconds: this.state.seconds});
  };

  onStop = () => {
    this.setState({isRunning: false});
  };

  onReset = () => {
    this.setState({isRunning: false, remainingSeconds: 0});
  };

  onTextChange = text => {
    this.setState({seconds: parseInt(text) || 0});
  };

  formatTime = seconds => {
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

  render() {
    return (
      <View style={styles.mainContainer}>
        <View style={styles.textInputContainer}>
          <Text style={styles.textInputTitle}>{strings.timerTitle}</Text>
          <TextInput
            value={this.state.seconds.toString()}
            onChangeText={this.onTextChange}
            keyboardType="numeric"
            style={styles.textInput}
          />
        </View>
        <View style={styles.timerContainer}>
          <Text style={styles.timerText}>
            {this.formatTime(this.state.remainingSeconds)}
          </Text>
        </View>
        <View style={styles.buttonContainer}>
          <RoundButton
            title={strings.start}
            onPress={this.onStart}
            isDisabled={this.state.isRunning}
            style={{backgroundColor: colors.green}}
          />
          <RoundButton
            title={strings.stop}
            onPress={this.onStop}
            isDisabled={!this.state.isRunning}
            style={{backgroundColor: colors.red}}
          />
          <RoundButton title={strings.reset} onPress={this.onReset} />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
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
  buttonText: {
    fontSize: 23,
    color: colors.white,
    textAlign: 'center',
  },
});

export default App;
