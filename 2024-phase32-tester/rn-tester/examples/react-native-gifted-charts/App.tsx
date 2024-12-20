import React from 'react';
import {
  SafeAreaView,
  StatusBar,
  Text,
  View,
} from 'react-native';
import {NavigationContainer, Page} from './Navigation';
import {PortalProvider} from '@gorhom/portal';
import testSuiteByName from './tester';

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
      <View style={{backgroundColor: 'black',marginBottom:30}}>
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
  export default App;

export const displayName = "ReactNativeGiftedCharts";
export const framework = "React";
export const category = "Basic";
export const title = "react-native-gifted-charts";
export const documentationURL = "https://github.com/react-native-oh-library/react-native-gifted-charts";
export const description = "React Native Gifted Charts";

export const examples = [
  {
    title: "react-native-gifted-charts",
    render: function (): any {
      return <App />;
    },
  },
];
