import React from 'react';
import { View, Text, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import {HookTest} from './HookTest';
import {SafeAreaViewExample} from './SafeAreaFrameContextTest';
import {SafeAreaFrameContextExample} from './SafeAreaInsetContextTest';
import {SafeAreaInsetsContextExample} from './SafeAreaViewTest';
import {WithSafeAreaInsetsExample} from './WithSafeAreaInsetsTest';


const Stack = createStackNavigator();

class Entrance extends React.Component {
    onPress1 = () => {
        this.props.navigation.navigate('HookTest');
    }
    onPress2 = () => {
        this.props.navigation.navigate('SafeAreaFrameContextTest');
    }
    onPress3 = () => {
        this.props.navigation.navigate('SafeAreaInsetContextTest');
    }
    onPress4 = () => {
        this.props.navigation.navigate('SafeAreaViewTest');
    }
	onPress5 = () => {
        this.props.navigation.navigate('WithSafeAreaInsetsTest');
    }


    render() {
        return (
            <View style={{padding:14}}>
                <View style={{height:50}}>
                    <Button title="Hook"  onPress={this.onPress1}></Button>
                </View>
                <View style={{height:50,marginTop:12}}>
                    <Button title="SafeAreaFrameContext"  onPress={this.onPress2}></Button>
                </View>
                <View style={{height:50,marginTop:12}}>
                    <Button title="SafeAreaInsetContext"  onPress={this.onPress3}></Button>
                </View>
                <View style={{height:50,marginTop:12}}>
                    <Button title="SafeAreaView"  onPress={this.onPress4}></Button>
                </View>
				<View style={{height:50,marginTop:12}}>
                    <Button title="WithSafeAreaInsets"  onPress={this.onPress5}></Button>
                </View>
            </View>
        );
    }
};

class App extends React.Component {
    render() {
        return (
            <NavigationContainer>
                <Stack.Navigator initialRouteName="safe-area">
                    <Stack.Screen name="safe-area" component={Entrance} />
                    <Stack.Screen name="HookTest" component={HooksExample} />
                    <Stack.Screen name="SafeAreaFrameContextTest" component={SafeAreaViewExample} />
                    <Stack.Screen name="SafeAreaInsetContextTest" component={SafeAreaFrameContextExample} />
                    <Stack.Screen name="SafeAreaViewTest" component={SafeAreaInsetsContextExample} />
					<Stack.Screen name="WithSafeAreaInsetsTest" component={WithSafeAreaInsetsExample} />
                </Stack.Navigator>
            </NavigationContainer>
        );
    }
}

//export default App;

export default {
  displayName: "SafeAreaContextDemo",
  framework: "React",
  category: "UI",
  title: "SafeAreaContextDemo",
  documentationURL: "https://gitee.com/react-native-oh-library/usage-docs/blob/master/zh-cn/react-native-safe-area-context.md",
  description: "A flexible way to handle safe area insets in JS",
  examples: [
    {
      title: "safe-area-context",
      render: function (): any {
        return <App />;
      },
    },
  ],
};
