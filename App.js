import { StatusBar, SafeAreaView, View } from 'react-native';
import { useFonts, Montserrat_400Regular, Montserrat_700Bold } from '@expo-google-fonts/montserrat';
import Cesta from './src/componentes/Telas/Index';
import mock from './src/mocks/Cesta';
import AppLoading from 'expo-app-loading';


export default function App() {
  const [fontCarregada] = useFonts({
    "MontserratRegular": Montserrat_400Regular,
    "MontserratBold": Montserrat_700Bold,
  });

  if (!fontCarregada) {
    return <AppLoading />;
  }

  return (
    <SafeAreaView style={{flex:1}}>
      <StatusBar/>
      <Cesta {...mock}/>
    </SafeAreaView>
  );
}
