
import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  View,
} from 'react-native';
import {NavigationContainer, Page} from './Navigation';
import {PortalProvider} from '@gorhom/portal';
import testSuiteByName from './components';


const comList = Object.keys(testSuiteByName).map(testSuiteName => {
  return {
    name: testSuiteName,
    com: testSuiteByName[testSuiteName as keyof typeof testSuiteByName]
  }
})
// @ts-ignore
comList.sort((a, b) => {
  return a.name.localeCompare(b.name)
})

function App() {
    return (
      <View style={{backgroundColor: 'black'}}>
        <StatusBar barStyle="light-content" />
        <SafeAreaView>
          <NavigationContainer>
            <PortalProvider>
              {comList.map(com => {
                const TestSuite = com.com
                return (
                  <Page
                    key={com.name}
                    name={`${com.name}`}>
                        <TestSuite key={com.name} />
                  </Page>
                );
              })}
              
            </PortalProvider>
          </NavigationContainer>
        </SafeAreaView>
      </View>
    );
  }
  export default App

  // 使用 export 导出
export const displayName = "SkiaExample";
export const framework = "React";
export const category = "UI";
export const title = "react-native-skia";
export const documentationURL = "https://github.com/react-native-oh-library/react-native-skia";
export const description = "Simple React Native skia component.";

export const examples = [
  {
    title: "skia with default styling",
    render: function (): any {
      return <App />;
    },
  },
];