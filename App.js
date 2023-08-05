import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Text numberOfLines={1} ellipsizeMode='tail'>Süleyman Aslan Süleyman Aslan Süleyman Aslan Süleyman Aslan Süleyman AslanSüleyman AslanSüleyman AslanSüleyman AslanSüleyman AslanSüleyman Aslan</Text>
      <Text>
        <Text>First part and </Text>
        <Text>second part</Text>
      </Text>
      <StatusBar style="auto" />
    </SafeAreaView>
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
