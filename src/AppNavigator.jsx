import {StyleSheet, TurboModuleRegistry} from 'react-native';
import React, {useState, useEffect} from 'react';
import SplashScreen from './screens/SplashScreen';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Auth from './stack/Auth';
import Main from './stack/Main';
import {useSelector} from 'react-redux';

const Stack = createNativeStackNavigator();

const AppNavigator = () => {
  const [isLoading, setIsLoading] = useState(true);
  const token = useSelector(state => state.token);

  useEffect(() => {
    (async () => {
      setTimeout(() => {
        setIsLoading(false);
      }, 2000);
    })();
  }, []);

  if (isLoading) {
    return (
      <>
        <SplashScreen />
      </>
    );
  }

  return (
    <NavigationContainer>
      <Stack.Navigator>
        {!token?.trim() ? (
          <Stack.Screen
            name="Auth"
            key={'Auth'}
            component={Auth}
            options={{
              headerShown: false,
            }}
          />
        ) : (
          <Stack.Screen
            name="Main"
            key={'Main'}
            component={Main}
            options={{
              headerShown: false,
            }}
          />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;

const styles = StyleSheet.create({});
