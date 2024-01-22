import { StyleSheet, Text, View } from 'react-native';
import { VictoryGroup, VictoryPolarAxis, VictoryArea, VictoryChart, VictoryTheme, VictoryLabel } from 'victory-native';
import { useState } from 'react';

interface props {
    radarData: Array<any>,
    scaleLimit: number,
    style: any
}
const RadarChartStaticFixedScale:React.FC<props> = ({radarData, scaleLimit, style}) =>  {
    const [characterData, setCharacterData] = useState(radarData);
  const getMaxima = (data: any) => {
    const groupedData = Object.keys(data[0]).reduce((memo, key) => {
      memo[key] = data.map((d) => d[key]);
      return memo;
    }, {});
    return Object.keys(groupedData).reduce((memo, key) => {
      memo[key] = Math.max(...groupedData[key]);
      return memo;
    }, {});
  } 

  const processData = (data: any) =>  {
    const maxByGroup = maxima;
    const makeDataArray = (d: any) => {
      return Object.keys(d).map((key) => {
        return { x: key, y: d[key] / scaleLimit };
      });
    };
    return data.map((datum: any) => makeDataArray(datum));
  }
  const [maxima, setMaxima] = useState(getMaxima(characterData))
  const [data, setData] = useState(processData(characterData))
  return (
    <View style={style}>
      <VictoryChart polar
        theme={VictoryTheme.material}
        domain={{ y: [ 0, 1 ] }}
      >
        <VictoryGroup colorScale={["gold", "orange", "tomato"]}
          style={{ data: { fillOpacity: 0.2, strokeWidth: 2 } }}
        >
          {data.map((data: any, i: number) => {
            return <VictoryArea key={i} data={data}/>;
          })}
        </VictoryGroup>
      {
        Object.keys(maxima).map((key, i) => {
          return (
            <VictoryPolarAxis 
            key={i} dependentAxis
              style={{
                axisLabel: { padding: 20 },
                axis: { stroke: "none" },
                grid: { stroke: "grey", strokeWidth: 0.25, opacity: 0.5 }
              }}
              tickLabelComponent={
                <VictoryLabel labelPlacement="vertical"/>
              }
              labelPlacement="perpendicular"
              axisValue={i + 1}
              label={key}
              tickFormat={(t) => t * scaleLimit}
              tickValues={[0.2, 0.4, 0.6, 0.8, 1]}
              tickCount={10}
            />
          );
        })
      }
        <VictoryPolarAxis
          labelPlacement="parallel"
          tickFormat={() => ""}
          style={{
            axis: { stroke: "none" },
            grid: { stroke: "grey", opacity: 0.5 }
          }}
        />
      </VictoryChart>
    </View>
  );
}
export default RadarChartStaticFixedScale;
