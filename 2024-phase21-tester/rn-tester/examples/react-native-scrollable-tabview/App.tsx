import React from 'react';
import {
  StatusBar,
  View,
} from 'react-native';
import { ScrollableTabviewExampleDemo } from './ScrollableTabviewExampleTest'

//该文件为测试demo的主入口，这里会展示27个文件，请在本地创建一个tests/ScrollableTabviewExampleTest目录
//然后将ScrollableTabviewExample1-27用例和index，navigation放在该目录下tests/ScrollableTabviewExampleTes.
function App() {
  return (
    <View style={{ backgroundColor: 'black' }}>
      <StatusBar barStyle="light-content" />
        <ScrollableTabviewExampleDemo />
    </View>
  );
}

export default App;

// 使用 export 导出
export const displayName = "ScrollableTabviewExample";
export const framework = "React";
export const category = "Basic";
export const title = "react-native-scrollable-tabview";
export const documentationURL = "https://github.com/itenl/react-native-scrollable-tabview";
export const description = "Simple React Native ScrollableTabview component.";

export const examples = [
  {
    title: "ScrollableTabview with default styling",
    render: function (): any {
      return <App />;
    },
  },
];
