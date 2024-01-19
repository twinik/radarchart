import { StyleSheet, Text, View } from 'react-native';import RadarChart from './RadarChart';

export default function App() {
    const characterData = [
    { strength: 1, intelligence: 300, luck: 1, stealth: 40, charisma: 50 },
    { strength: 2, intelligence: 300, luck: 2, stealth: 80, charisma: 90 },
    { strength: 5, intelligence: 225, luck: 3, stealth: 60, charisma: 120 }
  ];
  return (
    <View style={styles.container}>
      <RadarChart radarData={characterData} style={styles.radarChart}/>
      <Text style={{fontSize: 20, textAlign: "center", width: "70%"}}>Welcom to Victory Radar Chart</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },
  radarChart: {
    alignItems: 'center',
    justifyContent: 'center'
  },
});
