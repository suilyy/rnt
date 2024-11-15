import React from 'react';
import {
  StatusBar,
  View,
} from 'react-native';
import { AnimatableExampleDemo } from './animatable'

//该文件为测试demo的主入口，这里会展示27个文件，请在本地创建一个animatable目录
//AnimatableExampleDemo1-3用例和index，navigation放在该目录下animatable.
function App() {
  return (
    <View style={{ backgroundColor: 'black' }}>
      <StatusBar barStyle="light-content" />
        <AnimatableExampleDemo />
    </View>
  );
}

export default App;

// 使用 export 导出
export const displayName = "AnimatableExample";
export const framework = "React";
export const category = "UI";
export const title = "react-native-animatable";
export const documentationURL = "https://github.com/oblador/react-native-animatable";
export const description = "Simple React Native Animatable component.";

export const examples = [
  {
    title: "Animatable with default styling",
    render: function (): any {
      return <App />;
    },
  },
];
