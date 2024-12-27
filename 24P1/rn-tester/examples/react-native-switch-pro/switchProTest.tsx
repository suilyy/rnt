import { TestSuite, TestCase, Tester } from '@rnoh/testerino';
import React, { Component } from 'react';
import { View, StyleSheet, Text, ScrollView } from 'react-native';
import Switch from 'react-native-switch-pro';

class SwitchProTest extends Component {
    state = {
        value: false,
        value1: true,
    };
    render() {
        return (
            <Tester>
                <TestSuite name="SwitchPro">
                    <ScrollView>
                        <TestCase itShould="style、label、value、onAsyncPress、onSyncPress">
                            <View style={styles.container}>
                                <Switch
                                    label={2}
                                    value={this.state.value}
                                    style={{ marginTop: 20 }}
                                    onSyncPress={value => this.setState({ value })}
                                />
                                <Text> two way binding</Text>
                                <Switch
                                    label={3}
                                    value={this.state.value}
                                    style={{ marginTop: 20 }}
                                />
                                <Text> controlled by outside</Text>
                                <Switch
                                    style={{ marginTop: 20 }}
                                    value={this.state.value}
                                    onAsyncPress={callback => {
                                        setTimeout(() => callback(true), 1000);
                                    }}
                                />
                            </View>
                        </TestCase>
                        <TestCase itShould="width、height">
                            <View style={styles.container}>
                                <Switch width={60} height={30} />
                            </View>
                        </TestCase>
                        <TestCase itShould="circleColorActive、circleColorInactive">
                            <View style={styles.container}>
                                <Switch circleColorActive="black" circleColorInactive="red" />
                            </View>
                        </TestCase>
                        <TestCase itShould="disabled">
                            <View style={styles.container}>
                                <Switch disabled={false} />
                                <Switch style={{ marginTop: 20 }} disabled={true} />
                            </View>
                        </TestCase>
                        <TestCase itShould="circleStyle">
                            <View style={styles.container}>
                                <Switch circleStyle={{ backgroundColor: '#230dff' }} />
                            </View>
                        </TestCase>
                        <TestCase itShould="backgroundInactive、backgroundActive">
                            <View style={styles.container}>
                                <Switch
                                    backgroundInactive="#0061f782"
                                    backgroundActive="#1cfdff82"
                                />
                            </View>
                        </TestCase>
                    </ScrollView>
                </TestSuite>
            </Tester>
        );
    }
}

// 使用 export default 导出
export default {
  displayName: "SwitchProDemo",
  framework: "React",
  category: "UI",
  title: "SwitchProDemo",
  documentationURL: "https://gitee.com/react-native-oh-library/usage-docs/blob/master/zh-cn/react-native-switch-pro.md",
  description: "开关组件",
  examples: [
    {
      title: "switch-pro",
      render: function (): any {
        return <SwitchProTest />;
      },
    },
  ],
};

const styles = StyleSheet.create({
    container: {
        height: 300,
        width: 350,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#5174a2',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
});