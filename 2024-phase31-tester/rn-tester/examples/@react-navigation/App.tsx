import React from 'react';
import {
  SafeAreaView,
  View,
} from 'react-native';
import { NavigationContainer, Page } from './Navigation';
import { PortalProvider } from '@gorhom/portal';
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
    <View style={{ backgroundColor: 'black' ,marginBottom:40 }}>
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

export const displayName = '@react-navigation';
export const framework = 'React';
export const category = 'UI';
export const title = '@react-navigation';
export const documentationURL = 'https://reactnative.dev/docs/button';
export const description = '@react-navigation';

export const examples = [
  {
    title: '@react-navigation',
    render: function (): any {
      return <App />;
    },
  },
];
