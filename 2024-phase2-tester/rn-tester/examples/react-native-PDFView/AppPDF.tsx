import React from 'react';
import {
  SafeAreaView,
  StatusBar,
  View,
} from 'react-native';
import {NavigationContainer, Page} from './Navigation';
import * as testSuiteByName from './PDF/test-case';
function App() {
  return (
    <View style={{backgroundColor: 'black'}}>
      <StatusBar barStyle="light-content" />
      <SafeAreaView>
        <NavigationContainer>
          <View id="__harmony::ready" />
          {Object.keys(testSuiteByName).map(testSuiteName => {
            const TestSuite =
              testSuiteByName[testSuiteName as keyof typeof testSuiteByName];
            return (
              <Page
                key={testSuiteName}
                name={`${testSuiteName.replace('Test', '')}`}>
                <TestSuite key={testSuiteName} />
              </Page>
            );
          })}
        </NavigationContainer>
      </SafeAreaView>
    </View>
  );
}

export default App;

// 使用 export 导出
export const displayName = "PDFViewExample";
export const framework = "React";
export const category = "UI";
export const title = "react-native-PDFView";
export const documentationURL = "https://github.com/react-native-oh-library/react-native-PDFView";
export const description = "Simple React Native PDFView component.";

export const examples = [
  {
    title: "PDFView with default styling",
    render: function (): any {
      return <App />;
    },
  },
];
