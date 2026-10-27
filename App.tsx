import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, Text } from 'react-native';
import Probe from './Probe';

export default function App() {
  return (
    <SafeAreaView style={{ flex: 1, paddingTop: 48 }}>
      <Text style={{ fontSize: 18, padding: 16 }}>DOM component storage:</Text>
      <Probe dom={{ style: { flex: 1 } }} />
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}
