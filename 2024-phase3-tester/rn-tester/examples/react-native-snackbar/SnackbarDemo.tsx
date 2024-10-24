import React from 'react';
import { View, StyleSheet, Button, ScrollView} from "react-native";
import { Tester, TestSuite ,TestCase} from '@rnoh/testerino';
import Snackbar from 'react-native-snackbar'

export const SnackbarTest = () => {

  return (
    <View style={{ width: '100%', height: '100%', backgroundColor: 'white', flex: 1 }}>
      <ScrollView style={styles.container}>
        <Tester style={{ width: '100%', height: 800 }}>
          <TestSuite name='snackbar'>
            <TestCase
              tags={['C_API']}
              itShould="snackbar1">
              <Button title="点击显示组件,实现text属性" 
              onPress={()=>{
                Snackbar.show({  
                    text: 'Hello harmony',
                    })}} />
            </TestCase>
            <TestCase
              tags={['C_API']}
              itShould="snackbar2">
              <Button title="点击显示组件，实现text和marginBottom属性，增加了距离底边距离" 
              onPress={()=>{
                Snackbar.show({  
                    text: 'Hello harmony',
                    marginBottom:300,
                    })}} />
            </TestCase>
          </TestSuite>
        </Tester>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    backgroundColor: '#333',
    flex: 1,
  },
  Snackbar: {
    width: "100%",
    backgroundColor: 'white'
  }
});

export const displayName = "ReactNativeSnackbar";
export const framework = "React";
export const category = "UI";
export const title = "react-native-snackbar";
export const documentationURL = "https://github.com/react-native-oh-library/react-native-snackbar";
export const description = "React Native Snackbar";

export const examples = [
  {
    title: "react-native-snackbar",
    render: function (): any {
      return <SnackbarTest />;
    },
  },
];
