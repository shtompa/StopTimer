import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {routes} from './routes';
import HomeScreen from '../scenes/HomeScreen';
import StopWatchTimerScreen from '../scenes/StopWatchTimerScreen';

const Stack = createNativeStackNavigator();

function RootStack() {
  return (
    <Stack.Navigator
      initialRouteName={routes.HOME_SCREEN}
      screenOptions={{
        animationTypeForReplace: 'push',
        animation: 'slide_from_right',
        orientation: 'portrait',
      }}>
      <Stack.Screen name={routes.HOME_SCREEN} component={HomeScreen} />
      <Stack.Screen
        name={routes.STOPWATCH_TIMER_SCREEN}
        component={StopWatchTimerScreen}
      />
    </Stack.Navigator>
  );
}

export default function NavContainer() {
  return (
    <NavigationContainer>
      <RootStack />
    </NavigationContainer>
  );
}
