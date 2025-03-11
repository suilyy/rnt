import React, { useRef } from 'react';
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
  const lineData2 = [
    { value: 0 },
    { value: 20 },
    { value: 18 },
    { value: 40 },
    { value: 36 },
    { value: 60 },
    { value: 54 },
    { value: 85 },
  ];
  const scrollref = useRef();
  const areaChartprops = [
    {
      areaChart: true,
      startFillColor: 'red',
      endFillColor: 'blue',
      startOpacity: 1,
      endOpacity: 0.5,
      data: [{ value: 50 }, { value: 80 }, { value: 90 }, { value: 70 }],
    },
    {
      areaChart: true,
      areaChart1: true,
      startFillColor1: 'green',
      endFillColor1: 'blue',
      startOpacity1: 1,
      endOpacity1: 0.5,
      data: [{ value: 50 }, { value: 80 }, { value: 90 }, { value: 70 }]
    },
    {
      areaChart: true,
      areaChart2: true,
      startFillColor2: 'pink',
      endFillColor2: 'blue',
      startOpacity2: 1,
      dataPointsWidth2:10,
      dataPointsColor2:"red",
      dataPointsShape2:"rectangular",
      endOpacity1: 0.5,
      data2: [{ value: 50 }, { value: 80 }, { value: 90 }, { value: 70 }],
      data: [{ value: 70 }, { value: 85 }, { value: 95 }, { value: 100 }],
    },
    {
      areaChart: true,
      areaChart3: true,
      startFillColor3: 'orange',
      endFillColor3: 'blue',
      dataPointsColor3:"blue",
      startOpacity3: 1,
      endOpacity1: 0.5,
      data: [{ value: 50 }, { value: 80 }, { value: 90 }, { value: 80 }],
      data3: [{ value: 40 }, { value: 55 }, { value: 65 }, { value: 75 }],
    },
    {
      areaChart: true,
      areaChart4: true,
      startFillColor4: 'black',
      endFillColor4: 'blue',
      startOpacity4: 1,
      endOpacity1: 0.5,
      data: [{ value: 50 }, { value: 80 }, { value: 90 }, { value: 70 }],
      data4: [{ value: 25 }, { value: 35 }, { value: 45 }, { value: 55 }],
    },
    {
      areaChart: true,
      areaChart5: true,
      startFillColor5: 'gray',
      endFillColor5: 'blue',
      startOpacity5: 1,
      endOpacity1: 0.5,
      data: [{ value: 50 }, { value: 80 }, { value: 90 }, { value: 70 }],
      data5: [{ value: 10 }, { value: 20 }, { value: 30 }, { value: 40 }],
    }
  ]

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
                secondaryLineConfig
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

          <TestCase itShould='test LineChart 
                startFillColor2
                endFillColor2
                startOpacity2
                lineGradientDirection="vertical"
                '>
            <View style={{ borderWidth: 1 }}>
              <LineChart
                areaChart
                curved
                data={lineData}
                data2={lineData2}
                height={250}
                showVerticalLines
                spacing={44}
                initialSpacing={0}
                color1="skyblue"
                color2="orange"
                textColor1="green"
                hideDataPoints
                startFillColor1="skyblue"
                startFillColor2="orange"
                endFillColor2="blue"
                startOpacity2={0.5}
                lineGradient
                lineGradientDirection="vertical"
                lineGradientStartColor="orange"
                lineGradientEndColor= "red"
              />
            </View>
          </TestCase>

          <TestCase itShould='test LineChart 
                startFillColor3
                endFillColor3
                startOpacity3
                lineGradientDirection="horizontal"
                '>
            <View style={{ borderWidth: 1 }}>
              <LineChart
                areaChart
                curved
                data={lineData}
                data3={lineData2}
                height={250}
                showVerticalLines
                spacing={44}
                initialSpacing={0}
                color1="skyblue"
                color2="orange"
                textColor1="green"
                hideDataPoints
                startFillColor1="skyblue"
                startFillColor3="green"
                endFillColor3="orange"
                startOpacity3={0.5}
                lineGradient
                lineGradientDirection="horizontal"
                lineGradientStartColor="orange"
                lineGradientEndColor= "red"
              />
            </View>
          </TestCase>
          <TestCase itShould='test LineChart 
                startFillColor4
                endFillColor4
                startOpacity4
                '>
            <View style={{ borderWidth: 1 }}>
              <LineChart
                areaChart
                curved
                data={lineData}
                data4={lineData2}
                height={250}
                showVerticalLines
                spacing={44}
                initialSpacing={0}
                color1="skyblue"
                color2="orange"
                textColor1="green"
                hideDataPoints
                startFillColor1="skyblue"
                startFillColor4="green"
                endFillColor4="blue"
                startOpacity4={0.5}
              />
            </View>
          </TestCase>
          <TestCase itShould='test LineChart 
                startFillColor5
                endFillColor4
                startOpacity4
                '>
            <View style={{ borderWidth: 1 }}>
              <LineChart
                areaChart
                curved
                data={lineData}
                data5={lineData2}
                height={250}
                showVerticalLines
                spacing={44}
                initialSpacing={0}
                color1="skyblue"
                color2="orange"
                textColor1="green"
                hideDataPoints
                startFillColor1="skyblue"
                startFillColor5="red"
                endFillColor5="blue"
                startOpacity5={0.8}
              />
            </View>
          </TestCase>
          <TestCase itShould='test LineChart 
                startFillColor3
                endFillColor3
                startOpacity3
                lineGradientDirection="horizontal"
                '>
            <View style={{ borderWidth: 1 }}>
              <LineChart
                areaChart
                curved
                data={lineData}
                data3={lineData2}
                height={250}
                showVerticalLines
                spacing={44}
                initialSpacing={0}
                color1="skyblue"
                color2="orange"
                textColor1="green"
                hideDataPoints
                startFillColor1="skyblue"
                startFillColor3="green"
                endFillColor3="orange"
                startOpacity3={0.5}
                lineGradient
                lineGradientDirection="horizontal"
                lineGradientStartColor="orange"
                lineGradientEndColor= "red"
              />
            </View>
          </TestCase>
          <TestCase itShould='test LineChart 
                startFillColor4
                endFillColor4
                startOpacity4
                '>
            <View style={{ borderWidth: 1 }}>
              <LineChart
                areaChart
                curved
                data={lineData}
                data4={lineData2}
                height={250}
                showVerticalLines
                spacing={44}
                initialSpacing={0}
                color1="skyblue"
                color2="orange"
                textColor1="green"
                hideDataPoints
                startFillColor1="skyblue"
                startFillColor4="green"
                endFillColor4="blue"
                startOpacity4={0.5}
              />
            </View>
          </TestCase>
          <TestCase itShould='test LineChart 
                verticalLinesUptoDataPoint = {false}
                '>
            <View style={{ borderWidth: 1 }}>
              <LineChart
                 spacing={30}
                 curved
                 thickness={4}
                 hideRules
                 hideDataPoints
                 data={data}
                 color2="yellow"
                 thickness2={2}
                 yAxisTextStyle={{color: 'lightgray'}}
                 showVerticalLines
                 verticalLinesUptoDataPoint = {false}
                 verticalLinesColor={'#243'}
              />
            </View>
          </TestCase>
          <TestCase itShould='test LineChart 
                verticalLinesUptoDataPoint
                '>
            <View style={{ borderWidth: 1 }}>
              <LineChart
                 spacing={30}
                 curved
                 thickness={4}
                 hideRules
                 hideDataPoints
                 data={data}
                 color2="yellow"
                 thickness2={2}
                 yAxisTextStyle={{color: 'lightgray'}}
                 showVerticalLines
                 verticalLinesUptoDataPoint
                 verticalLinesColor={'#243'}
              />
            </View>
          </TestCase>
        </View>
        {
          areaChartprops.map(item => {
            return (
              <TestCase key={JSON.stringify(item)} itShould={JSON.stringify(item)} tags={['C_API']}>
                <LineChart scrollRef={scrollref} {...item}></LineChart>
              </TestCase>
            )
          })
        }
      </ScrollView>
    </Tester>
  );
};

export default SegmentedDataSetChart;
