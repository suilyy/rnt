import React from 'react';
import { SafeAreaView, ScrollView, StatusBar, StyleSheet, View } from 'react-native';
import { NavigationContainer, Page } from '../../components';
import { PortalProvider } from '@gorhom/portal';
import testSuiteByName from './components';

const comList = Object.keys(testSuiteByName).map(testSuiteName => {
  return {
    name: testSuiteName,
    com: testSuiteByName[testSuiteName as keyof typeof testSuiteByName],
  };
});
// @ts-ignore
comList.sort((a, b) => {
  return a.name.localeCompare(b.name);
});

function App() {
  return (
    <View style={{ backgroundColor: 'black', flex: 1 }}>
      <StatusBar barStyle="light-content" />
      <SafeAreaView>
        <NavigationContainer>
          <PortalProvider>
            {comList.map(com => {
              const TestSuite = com.com;
              return (
                <Page key={com.name} name={`${com.name}`}>
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


export default {
  displayName: 'react-native-svg',
  framework: 'React',
  category: 'UI',
  title: 'react-native-svg',
  documentationURL: 'https://github.com/software-mansion/react-native-svg',
  description: 'React Native svg',
  examples: [
    {
      title: 'React Native svg',
      render: function (): any {
        return <App />;
      },
    },
  ]
}