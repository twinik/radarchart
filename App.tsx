import { StyleSheet, Text, View, ScrollView } from 'react-native';
import RadarChartOriginal from './RadarChartOriginal';
import RadarChartStaticFixedScale from './RadarChartStaticFixedScale';
import RadarChartDynamicFixedScale from './RadarChartDynamicFixedScale';
export default function App() {
  const characterData = [
    { strength: 1, intelligence: 4, luck: 3, stealth: 2, charisma: 8 },
    { strength: 2, intelligence: 9, luck: 2, stealth: 5, charisma: 3 },
    { strength: 4, intelligence: 7, luck: 6, stealth: 8, charisma: 6 }
  ];
  //const characterData = [ { strength: 1, intelligence: 4, luck: 3, stealth: 2, charisma: 3 } ]
  return (
    <ScrollView style={styles.container}>
      <RadarChartOriginal radarData={characterData} style={styles.radarChart}/>
      <View style={{alignItems: "center"}}><Text style={{fontSize: 20, textAlign: "center", width: "70%"}}>Original RadarChart.</Text></View>
      <RadarChartDynamicFixedScale radarData={characterData} style={styles.radarChart}/>
      <View style={{alignItems: "center"}}><Text style={{fontSize: 20, textAlign: "center", width: "70%"}}>Maximun Scale caculated automatically</Text></View>
      <RadarChartStaticFixedScale radarData={characterData} scaleLimit = {10} style={styles.radarChart}/>
      <View style={{alignItems: "center"}}><Text style={{fontSize: 20, textAlign: "center", width: "70%", margin: "auto"}}>Maximun Scale can be set manually. Now, default value is 10</Text></View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    height: "100%"
  },
  radarChart: {
    alignItems: 'center'
  },
});
