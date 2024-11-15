import React, { Component } from 'react';
import { Button, View, Text } from 'react-native';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import PanDemo from './PanDemo-CAPI'
import OrientationDemo from './OrientationDemo-CAPI'
import ScrollViewDemo from './ScrollViewDemo-CAPI'
import TimingDemo from './TimingDemo-CAPI'
import { Nav } from './Nav'

class App extends Component {
    render() {
        return (<View style={{ flex: 1 }}>
            <Nav />
        </View>);
    };
}

export default {
  displayName: "BingdingxDemo",
  framework: "React",
  category: "UI",
  title: "BingdingxDemo",
  documentationURL: "https://gitee.com/react-native-oh-library/usage-docs/blob/master/zh-cn/react-native-bindingx.md",
  description: "提供了一种强大的数据绑定和动画系统",
  examples: [
    {
      title: "bindingx",
      render: function (): any {
        return <App />;
      },
    },
  ],
};
