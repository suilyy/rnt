import React from 'react';
import { View, Text, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import setSiblingWrapperTest from './setSiblingWrapperTest';
import SiblingsDemo from './SiblingsDemo';

const Stack = createStackNavigator();

class Entrance extends React.Component {
    onPress1 = () => {
        this.props.navigation.navigate('SetSiblingWrapper');
    }
    onPress2 = () => {
        this.props.navigation.navigate('Sibling');
    }


    render() {
        return (
            <View style={{padding:14}}>
                <View style={{height:50}}>
                    <Button title="SetSiblingWrapper"  onPress={this.onPress1}></Button>
                </View>
                <View style={{height:50,marginTop:12}}>
                    <Button title="Sibling"  onPress={this.onPress2}></Button>
                </View>
            </View>
        );
    }
};

class App extends React.Component {
    render() {
        return (
            <NavigationContainer>
                <Stack.Navigator initialRouteName="react-native-root-siblings 组件测试">
                    <Stack.Screen name="root-siblings测试入口" component={Entrance} />
                    <Stack.Screen name="SetSiblingWrapper" component={setSiblingWrapperTest} />
                    <Stack.Screen name="Sibling" component={SiblingsDemo} />
                </Stack.Navigator>
            </NavigationContainer>
        );
    }
}


export default {
  displayName: "RootSiblingsDemo",
  framework: "React",
  category: "UI",
  title: "RootSiblingsDemo",
  documentationURL: "https://gitee.com/react-native-oh-library/usage-docs/blob/master/zh-cn/react-native-root-siblings.md",
  description: "适用于需要在应用的任何地方显示浮动组件、模态对话框、Toast 消息等场景",
  examples: [
    {
      title: "root-siblings",
      render: function (): any {
        return <App />;
      },
    },
  ],
};
