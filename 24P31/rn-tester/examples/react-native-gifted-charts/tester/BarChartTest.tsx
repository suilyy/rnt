import React, { useRef } from 'react';
import { View, ScrollView, Button } from 'react-native';
import { BarChart } from 'react-native-gifted-charts';
import { TestCase, Tester } from "@rnoh/testerino";

const BarChartTest = () => {
    const scrollRef = useRef(null);
  
  const barData = [
    {
      value: 50, label: 'Jan', frontColor: '#177AD5',
    },
    { value: 80, label: 'Feb', frontColor: '#ED6665' },
    { value: 90, label: 'Mar', frontColor: '#8B78E6' },
    { value: 70, label: 'Apr', frontColor: '#FFA500' },
    { value: 60, label: 'May', frontColor: '#2ECC71' },
    { value: 85, label: 'Jun', frontColor: '#9B59B6' },
  ];

  const barData2 = [
    { value: 10, label: 'Jan', frontColor: '#177AD5' },
    { value: 80, label: 'Feb', frontColor: '#ED6665' },
    { value: 90, label: 'Mar', frontColor: '#8B78E6' },
    { value: 70, label: 'Apr', frontColor: '#FFA500' },
  ];

  const barDataRef = [
    { value: 10, label: 'Jan', frontColor: '#177AD5' },
    { value: 80, label: 'Feb', frontColor: '#ED6665' },
    { value: 90, label: 'Mar', frontColor: '#8B78E6' },
    { value: 70, label: 'Apr', frontColor: '#FFA500' },
    { value: 10, label: 'Jan', frontColor: '#177AD5' },
    { value: 80, label: 'Feb', frontColor: '#ED6665' },
    { value: 90, label: 'Mar', frontColor: 'blue' },
    { value: 70, label: 'Apr', frontColor: 'red' },
  ];
  const barConfig = {
    color: 'orange',
    borderTopLeftRadius: 5,
    borderTopRightRadius: 10,
    barWidth:50
  };
  const lowerarConfig = {
    color: 'red',
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 5,
  };

  const stackData = [
    {
      stacks: [
        { value: 80, ...barConfig },
        { value: -40, ...lowerarConfig },
      ],
      label: 'April',
      spacing:10
    },
    {
      stacks: [
        { value: 184, ...barConfig },
        { value: -168, ...lowerarConfig },
      ],
      label: 'Mei'
    },
    {
      stacks: [
        { value: 210, ...barConfig },
        { value: -220, ...lowerarConfig },
      ],
      label: 'Juni'
    },
  ];

  const barChartConfig = [
    {
      showLine: true,
      lineData: [{ value: 80 }, { value: 20 }, { value: 60 }, { value: 40 }, { value: 50 }, { value: 60 }],
      lineData2: [{ value: 70 }, { value: 80 }, { value: 80 }, { value: 70 }, { value: 60 }, { value: 50 }],
      lineConfig: { dataPointsShape: 'rectangular', dataPointsWidth: 10 ,dataPointsHeight:10},
      lineConfig2: { dataPointsShape: 'rectangular', dataPointsWidth: 10,dataPointsHeight:10 }
    },
  ]

  return (
    <Tester style={{ paddingBottom: 30 }}>
      <ScrollView>
        <TestCase itShould='test 
            referenceLine2Position 
            referenceLinesOverChartContent
            showVerticalLines
            '>
          <View style={{ borderWidth: 1 }}>
            <BarChart
              data={barData}
              barWidth={30} // 柱状图宽度
              spacing={20} // 柱状图之间的间距
              initialSpacing={10} // 初始间距
              showYAxisIndices // 显示Y轴刻度
              yAxisThickness={1} // Y轴厚度
              xAxisThickness={1} // X轴厚度
              yAxisTextStyle={{ color: 'black' }} // Y轴文本样式
              xAxisLabelTextStyle={{ color: 'black' }} // X轴标签文本样式
              showReferenceLine1 // 显示第一条参考线
              referenceLine1Position={70} // 第一条参考线位置
              referenceLine1Config={{ color: 'gray', dashWidth: 2, dashGap: 3 }} // 第一条参考线样式
              showReferenceLine2 // 显示第二条参考线
              referenceLine2Position={30} // 第二条参考线位置
              referenceLine2Config={{ color: 'blue', dashWidth: 2, dashGap: 3 }} // 第二条参考线样式
              referenceLinesOverChartContent={true}
              showVerticalLines ={false}
            />
          </View>
        </TestCase>

        <TestCase itShould='test 
            referenceLine2Position 
            showReferenceLine3 
            referenceLine3Position 
            referenceLinesOverChartContent
            showVerticalLines
            xAxisIndicesHeight
            xAxisIndicesWidth
            xAxisIndicesColor
            secondaryYAxis
            '>
          <View style={{ borderWidth: 1 }}>
            <BarChart
              data={barData2}
              width={200}
              barWidth={30} // 柱状图宽度
              spacing={20} // 柱状图之间的间距
              initialSpacing={10} // 初始间距
              showYAxisIndices // 显示Y轴刻度
              yAxisThickness={1} // Y轴厚度
              xAxisThickness={1} // X轴厚度
              yAxisTextStyle={{ color: 'black' }} // Y轴文本样式
              xAxisLabelTextStyle={{ color: 'black' }} // X轴标签文本样式
              showReferenceLine1 // 显示第一条参考线
              referenceLine1Position={70} // 第一条参考线位置
              referenceLine1Config={{ color: 'gray', dashWidth: 2, dashGap: 3 }} // 第一条参考线样式
              showReferenceLine2 // 显示第二条参考线
              referenceLine2Position={30} // 第二条参考线位置
              showReferenceLine3 // 显示第三条参考线
              referenceLine3Position={60} // 第三条参考线位置
              referenceLine2Config={{ color: 'blue', dashWidth: 2, dashGap: 3 }} // 第二条参考线样式
              referenceLine3Config={{ color: 'red', dashWidth: 3, dashGap: 3 }} // 第三条参考线样式
              showVerticalLines
              referenceLinesOverChartContent={false}
              xAxisIndicesHeight={10} // 设置 X 轴刻度线的高度
              xAxisIndicesColor="blue" // 设置 X 轴刻度线的颜色
              xAxisIndicesWidth={5}  //设置 X 轴刻度线的宽度
              yAxisIndicesHeight={10} //设置 Y 轴刻度线的高度
              yAxisIndicesWidth={8}  //设置 Y 轴刻度线的宽度
              yAxisIndicesColor="red" // 设置 Y 轴刻度线的颜色
              secondaryYAxis={true} //显示此Y轴右刻度线
            />
          </View>
        </TestCase>
        <TestCase itShould='test 
          secondaryYAxis 
          xAxisIndicesHeight 
          xAxisIndicesWidth
          xAxisIndicesColor
          yAxisIndicesHeight
          yAxisIndicesWidth
          yAxisIndicesColor
          '>
          <View style={{ borderWidth: 1 }}>
            <BarChart
              data={barData}
              barWidth={30} // 柱状图宽度
              spacing={20} // 柱状图之间的间距
              initialSpacing={10} // 初始间距
              showYAxisIndices // 显示 Y 轴刻度线
              yAxisThickness={1} // Y 轴厚度
              xAxisThickness={1} // X 轴厚度WWWW
              yAxisTextStyle={{ color: 'black' }} // Y 轴文本样式
              xAxisLabelTextStyle={{ color: 'black' }} // X 轴标签文本样式
              showXAxisIndices // 显示 X 轴刻度线
              animationDuration={5000} // 设置动画持续时间为 5000 毫秒
              xAxisIndicesHeight={10} // 设置 X 轴刻度线的高度
              xAxisIndicesColor="blue" // 设置 X 轴刻度线的颜色
              xAxisIndicesWidth={5}  //设置 X 轴刻度线的宽度
              yAxisIndicesHeight={10} //设置 Y 轴刻度线的高度
              yAxisIndicesWidth={8}  //设置 Y 轴刻度线的宽度
              yAxisIndicesColor="red" // 设置 Y 轴刻度线的颜色
              secondaryYAxis={false} //显示此Y轴刻度线
            />
          </View>
        </TestCase>
        <TestCase itShould='test  BarChart
          borderTopLeftRadius 5
          borderTopRightRadius 10
          borderBottomLeftRadius 10
          borderBottomRightRadius 5
          formatYLabel
          '>
          <View style={{ borderWidth: 1 }}>
            <BarChart
              barWidth={20}
              spacing={40}
              xAxisLabelTextStyle={{
                fontFamily: 'Goga-Bold',
                color: 'black',
                marginBottom: -20,
              }}
              yAxisTextStyle={{
                left: 0,
                color: '#FF6B00',
                fontFamily: 'Goga-Bold',
              }}
              stackData={stackData}
              mostNegativeValue={-220}
              yAxisThickness={0}
              xAxisThickness={1}
              noOfSections={5}
              rulesThickness={0}
              formatYLabel={label => `€${label}`}
              autoShiftLabelsForNegativeStacks={false}
              labelsDistanceFromXaxis={210}
            />
          </View>
        </TestCase>
        <TestCase itShould='test  BarChart
          stripBehindBars false

          '>
          <View style={{ borderWidth: 1 }}>
            <BarChart
              showFractionalValues
              showYAxisIndices
              showXAxisIndices
              hideRules
              showVerticalLines
              verticalLinesColor={'white'}
              overflowTop={10}
              noOfSections={5}
              data={barData}
              showGradient
              frontColor={'#1B6BB0'}
              gradientColor={'#FFEEFE'}
              backgroundColor={'#FECF9E'}
              pointerConfig={{
                initialPointerIndex: 0,
                stripBehindBars: false,
                pointerStripHeight: 207,
              }}
            />
          </View>
        </TestCase>
        <TestCase itShould='test  BarChart
          stripBehindBars true
          '>
          <View style={{ borderWidth: 1 }}>
            <BarChart
              showFractionalValues
              showYAxisIndices
              showXAxisIndices
              hideRules
              showVerticalLines
              verticalLinesColor={'white'}
              overflowTop={10}
              noOfSections={5}
              data={barData}
              showGradient
              frontColor={'#1B6BB0'}
              gradientColor={'#FFEEFE'}
              backgroundColor={'#FECF9E'}
              pointerConfig={{
                initialPointerIndex: 0,
                stripBehindBars: true,
                pointerStripHeight: 207,
                secondaryPointerColor: 'blue'
              }}
            />
          </View>
        </TestCase>
        <TestCase itShould='test  BarChart
          stripBehindBars true
          '>
          <View style={{ borderWidth: 1 }}>
            <Button title='点击测试 scrollRef' onPress={()=>{
              scrollRef?.current?.scrollToEnd()
            }}></Button>
            <BarChart
             data={barDataRef}
             scrollRef={scrollRef}
            />
          </View>
        </TestCase>
        {
          barChartConfig.map((item, index) => {
            return (
              <TestCase itShould={JSON.stringify(item)} key={JSON.stringify(item)} tags={['C_API']}>
                <BarChart data={barData}  {...item}></BarChart>
              </TestCase>
            )
          })
        }
      </ScrollView>
    </Tester>
  );
};

export default BarChartTest;
