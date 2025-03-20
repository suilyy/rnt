import React from 'react';
import {
  SafeAreaView,
  StatusBar,
  Text,
  View,
} from 'react-native';
import { NavigationContainer, Page } from './Navigation';
import TestVideo from './TestVideo';

function App() {
  return (
    <View style={{ backgroundColor: 'black', marginBottom: 30 }}>
      <NavigationContainer>
        <Page name="TestVideo">
          <TestVideo />
        </Page>
      </NavigationContainer>
    </View>
  );
}
export default App;


export const displayName = 'react-native-video';
export const framework = 'React';
export const category = 'basic';
export const title = 'react-native-video';
export const documentationURL = 'https://gitee.com/react-native-oh-library/usage-docs/blob/master/zh-cn/react-native-video.md';
export const description = 'react-native-video';

export const examples = [
    {
        title: 'react-native-video',
        render: function (): any {
            return <App />;
        },
    },
];
