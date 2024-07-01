import {StyleSheet, View} from 'react-native';
import AppButton from '../components/AppButton';
import {useNavigation} from '@react-navigation/native';
import {routes} from '../navigation/routes';
import {colors} from '../../res/colors';

const HomeScreen = () => {
  const navigation = useNavigation<any>();
  return (
    <View style={styles.container}>
      <AppButton
        title={'Stopwatch Timer'}
        onPress={() => navigation.navigate(routes.STOPWATCH_TIMER_SCREEN)}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.white,
    padding: 10,
  },
});

export default HomeScreen;
