import React from 'react';
import { View, Text, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import setSiblingWrapperTest from './setSiblingWrapperTest';
import SiblingsDemo from './SiblingsDemo';


const Stack = createStackNavigator();

class Entrance extends React.Component {
    onPress1 = () => {
        this.props.navigation.navigate('setSiblingWrapper');
    }
    onPress2 = () => {
        this.props.navigation.navigate('Siblings');
    }


    render() {
        return (
            <View style={{padding:14}}>
                <View style={{height:50}}>
                    <Button title="setSiblingWrapper"  onPress={this.onPress1}></Button>
                </View>
                <View style={{height:50,marginTop:12}}>
                    <Button title="Siblings"  onPress={this.onPress2}></Button>
                </View>
            </View>
        );
    }
};

class RootSiblingsDemo extends React.Component {
    render() {
        return (
            <NavigationContainer>
                <Stack.Navigator initialRouteName="root-sibling测试入口">
                    <Stack.Screen name="测试入口" component={Entrance} />
                    <Stack.Screen name="setSiblingWrapper" component={setSiblingWrapperTest} />
                    <Stack.Screen name="Siblings" component={SiblingsDemo} />
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
        return <RootSiblingsDemo />;
      },
    },
  ],
};
