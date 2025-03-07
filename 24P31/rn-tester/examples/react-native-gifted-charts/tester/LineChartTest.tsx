import React from 'react';
import { ScrollView, View } from 'react-native';
import { LineChart } from 'react-native-gifted-charts';
import { TestCase, Tester } from "@rnoh/testerino";

const SegmentedDataSetChart = () => {
  const data = [
    { value: 50 },
    { value: 80 },
    { value: 90 },
    { value: 70 },
  ];

  const lineData = [
    {
      value: 50,
      dataPointRadius: 3, // 第一个数据点的半径
    },
    {
      value: 80,
      dataPointRadius: 6, // 第二个数据点的半径
    },
    {
      value: 90,
      dataPointRadius: 9, // 第三个数据点的半径
    },
    {
      value: 100,
      dataPointRadius: 9, // 第四个数据点的半径
    },
    {
      value: 5,
      dataPointRadius: 7, // 第五个数据点的半径
    },
    {
      value: 16,
      dataPointRadius: 8, // 第六个数据点的半径
    }];
  const lineTowData = [
    {
      value: 100,
      dataPointRadius: 3, // 第一个数据点的半径
    },
    {
      value: 70,
      dataPointRadius: 6, // 第二个数据点的半径
    },
    {
      value: 20,
      dataPointRadius: 9, // 第三个数据点的半径
    },
    {
      value: 33,
      dataPointRadius: 9, // 第四个数据点的半径
    },
    {
      value: 56,
      dataPointRadius: 7, // 第五个数据点的半径
    },
    {
      value: 10,
      dataPointRadius: 8, // 第六个数据点的半径
    }];

  return (
    <Tester style={{ paddingBottom: 30 }}>
        <ScrollView>
          <View style={{ borderWidth: 1 }}>
            <TestCase itShould='test LineChart 
                startFillColor1
                endFillColor1
                startOpacity1
                curved
                isAnimated
                dataPointRadius
                yAxisOffset
                formatYLabel
                '>
              <View style={{ borderWidth: 1 }}>
                <LineChart
                  data={lineData}
                  width={300}
                  height={200}
                  yAxisOffset={40}
                  formatYLabel={(value) => `${value}%`}
                  verticalLinesUptoDataPoint={true}
                  secondaryData={lineTowData}
                  secondaryLineConfig={{
                    color: 'red',
                    thickness: 2,
                  }}
                  curved={true}
                  areaChart={true}
                  startFillColor1="rgba(255, 0, 0, 0.3)"
                  endFillColor1="hsla(128, 100.00%, 50.00%, 0.00)"
                  startOpacity1={0.3}
                  isAnimated={true}
                />
              </View>
            </TestCase>
          </View>
        </ScrollView>
    </Tester>
  );
};

export default SegmentedDataSetChart;
