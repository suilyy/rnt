import React from 'react';
import { Text, View } from 'react-native';
import SplashScreen from 'react-native-splash-screen';

class App extends React.Component {
  componentDidMount() {
    SplashScreen.hide();
  }

  render() {
    return (
      <View style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
      }}>
        <Text>Hello, world!</Text>
      </View>
    )
  }
}

//export default App;

export default {
  displayName: "SplashScreenDemo",
  framework: "React",
  category: "Tools",
  title: "SplashScreenDemo",
  documentationURL: "https://gitee.com/react-native-oh-library/usage-docs/blob/master/zh-cn/react-native-splash-screen.md",
  description: "自定义启动屏幕",
  examples: [
    {
      title: "splash-screen",
      render: function (): any {
        return <App />;
      },
    },
  ],
};