import React from 'react';
import {
  StatusBar,
  View,
} from 'react-native';
import { DeckSwiperExampleTestDemo } from './DeckSwiperExampleTest/index'
//该文件为测试demo的主入口，这里会展示8个文件，请在本地创建一个tests/DeckSwiperExampleTest目录
//然后将DeckSwiperExampleTest1-8用例和index，navigation放在该目录下tests/DeckSwiperExampleTest.
function App() {
  return (
    <View style={{ backgroundColor: 'black' }}>
      <StatusBar barStyle="light-content" />
        <DeckSwiperExampleTestDemo />
    </View>
  );
}

export default App;

// 使用 export 导出
export const displayName = "DeckSwiperExample";
export const framework = "React";
export const category = "UI";
export const title = "react-native-deck-swiper";
export const documentationURL = "https://github.com/alexbrillant/react-native-deck-swiper";
export const description = "Simple React Native deck swiper component.";

export const examples = [
  {
    title: "Deck swiper with default styling",
    render: function (): any {
      return <App />;
    },
  },
];
