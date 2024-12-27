import React from 'react';
import { View, Button } from 'react-native';
import SafeModule from 'react-native-safe-module';

const App = () => {
  const NativeLottieView = SafeModule.component({
    viewName: 'LottieAnimationView',
    mockComponent: View,
  });
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>

      <NativeLottieView
        style={{ backgroundColor: 'red', width: 100, height: 100 }}
        source={undefined}
        sourceName={undefined}
        sourceJson={undefined}
      />
    </View>
  );
};

//export default App;

export default {
  displayName: "SafeModuleDemo",
  framework: "React",
  category: "UI",
  title: "SafeModuleDemo",
  documentationURL: "https://gitee.com/react-native-oh-library/usage-docs/blob/master/zh-cn/react-native-safe-module.md",
  description: "提供了一种安全的方式来导入和使用模块,防止因模块缺失而导致的应用崩溃，提高应用的健壮性和稳定性",
  examples: [
    {
      title: "safe-module",
      render: function (): any {
        return <App />;
      },
    },
  ],
};
