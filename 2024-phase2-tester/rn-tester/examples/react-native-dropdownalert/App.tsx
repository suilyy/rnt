import React, { useState } from "react";
import {
  SafeAreaView,
  StatusBar,
  View,
} from 'react-native';
import { CustAlertporpsDemo } from './CustAlertporpsDemo';
import { DropdownalertDemo } from './dropdownalertDemo';
import { ZIndexDemo } from './zIndexDemo';
import { NavigationContainer, Page } from './components';

const App = (): React.Node => {
  return (
    <View style={{ backgroundColor: 'black' }}>
      <StatusBar barStyle="light-content" />
      <SafeAreaView>
        <NavigationContainer>
          <Page name='CustAlertporpsDemo'>
            <CustAlertporpsDemo />
          </Page>
          <Page name='dropdownalertDemo'>
            <DropdownalertDemo />
          </Page>
          <Page name='zIndexDemo'>
            <ZIndexDemo />
          </Page>
        </NavigationContainer>
      </SafeAreaView>
    </View>
  )
};

export default App;

// 使用 export 导出
export const displayName = "DropdownalertExample";
export const framework = "React";
export const category = "UI";
export const title = "react-native-dropdownalert";
export const documentationURL = "https://github.com/react-native-oh-library/react-native-dropdownalert";
export const description = "Simple React Native dropdownalert component.";

export const examples = [
  {
    title: "Dropdownalert with default styling",
    render: function (): any {
      return <App />;
    },
  },
];