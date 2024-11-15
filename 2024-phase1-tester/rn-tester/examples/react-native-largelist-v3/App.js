import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import * as Examples from "./RNlargelistExample";
const Stack = createStackNavigator();

class App extends React.Component {
  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          {Object.keys(Examples).map((key) => (
            <Stack.Screen key={key} name={key} component={Examples[key]} />
          ))}
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}


export default {
  displayName: "LargelistDemo",
  framework: "React",
  category: "UI",
  title: "LargelistDemo",
  documentationURL: "https://gitee.com/react-native-oh-library/usage-docs/blob/master/zh-cn/react-native-largelist.md",
  description: "高性能列表组件,适合用于实现长列表、无限滚动、瀑布流等场景",
  examples: [
    {
      title: "Largelist",
      render: function (): any {
        return <App />;
      },
    },
  ],
};
