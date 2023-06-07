import { StyleSheet, View } from 'react-native';
import { useCallback } from 'react';
import { useFonts } from 'expo-font'
import * as SplashScreen from 'expo-splash-screen'
import Header from './components/Header';
import Main from './components/Main';
import NavBar from './components/NavBar';

SplashScreen.preventAutoHideAsync();

export default function App() {

  const [fontsLoaded] = useFonts({
    'SpaceMono-regular': require('./assets/fonts/SpaceMono-Regular.ttf'),
    'SpaceMono-italic': require('./assets/fonts/SpaceMono-Italic.ttf'),
    'SpaceMono-bolditalic': require('./assets/fonts/SpaceMono-BoldItalic.ttf'),
    'SpaceMono-bold': require('./assets/fonts/SpaceMono-Bold.ttf')
  })

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <View style={styles.container} onLayout={onLayoutRootView}>
      <Header />
      <Main />
      <NavBar />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
