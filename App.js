import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import Header from './src/components/Header';
import CarList from './src/components/CarList';

export default function App() {
  const { container } = styles
  return (
    <View style={{ container }}>
      <Header title={"Cars"} />
      <CarList />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
