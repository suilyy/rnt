import { TestSuite, TestCase, Tester } from '@rnoh/testerino';
import React from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import DropShadow from 'react-native-drop-shadow';

function DropShadowTest() {
    return (
        <Tester>
		<ScrollView keyboardShouldPersistTaps={'always'} keyboardDismissMode={'none'}>
            <TestSuite name="DropShadow">
                <TestCase itShould="DropShadow: shadowRadius、shadowColor、shadowOpacity">
                    <View style={styles.container}>
                        <DropShadow style={styles.shadow}>
                            <View style={styles.box} />
                        </DropShadow>
                    </View>
                </TestCase>
                <TestCase itShould="DropShadow: shadowColor、shadowRadius">
                    <View style={styles.container}>
                        <DropShadow
                            style={{
                                shadowColor: 'rgb(0 0 0)',
                                shadowOffset: {
                                    width: 0,
                                    height: 0,
                                },
                                shadowOpacity: 1,
                                shadowRadius: 30,
                            }}>
                            <View style={styles.box} />
                        </DropShadow>
                    </View>
                </TestCase>
                <TestCase itShould="DropShadow: shadowOffset, shadowColor、shadowOpacity">
                    <View style={styles.container}>
                        <DropShadow
                            style={{
                                shadowColor: 'blue',
                                shadowOffset: {
                                    width: 10,
                                    height: 50,
                                },
                                shadowOpacity: 0.6,
                                shadowRadius: 120,
                            }}>
                            <View style={styles.box} />
                        </DropShadow>
                    </View>
                </TestCase>
            </TestSuite>
			</ScrollView>
        </Tester>
    );
}

export default {
  displayName: "DropShadowDemo",
  framework: "React",
  category: "UI",
  title: "DropShadowDemo",
  documentationURL: "https://gitee.com/react-native-oh-library/usage-docs/blob/master/zh-cn/react-native-drop-shadow.md",
  description: "添加阴影效果组件",
  examples: [
    {
      title: "drop-shadow",
      render: function (): any {
        return <DropShadowTest />;
      },
    },
  ],
};

const styles = StyleSheet.create({
    box: { height: 50, width: 50, backgroundColor: 'red' },
    shadow: {
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 0,
        },
        shadowOpacity: 0,
        shadowRadius: 30,
    },
    container: { alignItems: 'center', justifyContent: 'center', height: 200 },
});