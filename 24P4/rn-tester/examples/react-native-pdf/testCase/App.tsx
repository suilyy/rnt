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
import testSuiteByName from './Test';


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

  

export const displayName = 'react-native-pdf';
export const framework = 'React';
export const category = 'basic';
export const title = 'react-native-pdf';
export const documentationURL = 'https://gitee.com/react-native-oh-library/usage-docs/blob/master/zh-cn/react-native-pdfs.md';
export const description = 'react-native-pdf';

export const examples = [
    {
        title: 'react-native-pdf',
        render: function (): any {
            return <App />;
        },
    },
];
