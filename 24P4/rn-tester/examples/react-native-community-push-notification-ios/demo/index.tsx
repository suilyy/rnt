import React from "react";
import { NavigationContainer} from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import PushPage from './PushNotificationIosDemo'
import JumPage from './JumPage'
const Stack = createStackNavigator();
class PushAppDemo extends React.Component {
    render() {
        return <NavigationContainer>
            <Stack.Navigator initialRouteName="PushPage">
                <Stack.Screen name="PushPage" component={PushPage} />
                <Stack.Screen name="JumPage" component={JumPage} />
            </Stack.Navigator>
        </NavigationContainer>;
    };
}

//export default App
export default {
    displayName: "Push-PushAppDemo",
    framework: "React",
    category: "Tools",
    title: "PushAppDemo",
    documentationURL: "https://gitee.com/react-native-oh-library/usage-docs/blob/master/zh-cn/react-native-community-push-notification-ios.md",
    description: "本地通知以及远程推送",
    examples: [
      {
        title: "Push-Notification",
        render: function (): any {
          return <PushAppDemo/>;
        },
      },
    ],
  };