import React from 'react';
import {
  StatusBar,
  Text,
  View,Button
} from 'react-native';
import { GiftedChatDemo } from './index'
import { SafeAreaProvider,SafeAreaView,initialWindowMetrics } from '@react-native-oh-tpl/react-native-safe-area-context';
import "react-native-get-random-values";

function App() {
  return (
    <SafeAreaProvider initialMetrics={initialWindowMetrics}>
      <SafeAreaView style={{ flex: 1 }}>
        <StatusBar barStyle="light-content" />
          <GiftedChatDemo />
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

export default App;

// 使用 export 导出
export const displayName = "GiftedChatExample";
export const framework = "React";
export const category = "UI";
export const title = "react-native-gifted-chat";
export const documentationURL = "https://github.com/FaridSafi/react-native-gifted-chat";
export const description = "Simple React Native gifted chat component.";

export const examples = [
  {
    title: "Gifted chat with default styling",
    render: function (): any {
      return <App />;
    },
  },
];
