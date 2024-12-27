import React, { Component } from 'react';
import { Button, View, Text} from 'react-native';
import { Nav } from './Nav'
class App extends Component {
    render() {
        return (<View style={{ flex: 1 }}>
            <Nav />
        </View>);
    };
}

// 或者使用 export default 导出
export default {
  displayName: "SpringScrollViewDemo",
  framework: "React",
  category: "UI",
  title: "SpringScrollViewDemo",
  documentationURL: "https://gitee.com/react-native-oh-library/usage-docs/blob/master/zh-cn/react-native-spring-scrollview.md",
  description: "具有弹性和动画效果的滚动视图",
  examples: [
    {
      title: "SpringScrollView",
      render: function (): any {
        return <App />;
      },
    },
  ],
};