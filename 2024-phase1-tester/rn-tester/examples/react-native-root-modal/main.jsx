import React from 'react';
import { View, StyleSheet, TouchableHighlight, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import SimpleModal from './SimpleModal';
import CustomStyle from './CustomStyle';
import Animation from './Animation';

const styles = StyleSheet.create({
    button: {
        backgroundColor: '#ccc',
        borderRadius: 5,
        padding: 10,
        marginBottom: 10
    }
});

function RootModalScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }} >
      <TouchableHighlight
        style={styles.button}
        underlayColor="#aaa"
        onPress={() => navigation.navigate('simple')}
        >
        <Text>Simple Modal</Text>
      </TouchableHighlight>
      <TouchableHighlight
        style={styles.button}
        underlayColor="#aaa"
        onPress={() => navigation.navigate('customStyle')}
        >
        <Text>Custom Modal</Text>
      </TouchableHighlight>
      <TouchableHighlight
        style={styles.button}
        underlayColor="#aaa"
        onPress={() => navigation.navigate('animation')}
        >
        <Text>Animation Modal</Text>
      </TouchableHighlight>
    </View>
  );
}

const Stack = createStackNavigator();

function App() {
  return (
        <NavigationContainer>
        <Stack.Navigator initialRouteName="Root Modal">
            <Stack.Screen name="simple" component={SimpleModal} title="SimpleModal" />
            <Stack.Screen name="customStyle" component={CustomStyle} title="CustomStyle" />
            <Stack.Screen name="animation" component={Animation} title="Animations" />
            <Stack.Screen name="Root Modal" component={RootModalScreen} />
        </Stack.Navigator>
        </NavigationContainer>
      );
}

//export default App;

export default {
  displayName: "RootModalDemo",
  framework: "React",
  category: "UI",
  title: "RootModalDemo",
  documentationURL: "https://gitee.com/react-native-oh-library/usage-docs/blob/master/zh-cn/react-native-root-modal.md",
  description: "在应用的顶层显示模态对话框",
  examples: [
    {
      title: "root-modal",
      render: function (): any {
        return <App />;
      },
    },
  ],
};