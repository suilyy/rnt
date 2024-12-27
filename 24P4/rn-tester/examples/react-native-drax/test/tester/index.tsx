import React from 'react';
import {
  SafeAreaView,
  StatusBar,
  View,
} from 'react-native';
import {NavigationContainer, Page} from './Navigation';
import {PortalProvider} from '@gorhom/portal';
import testSuiteByName from './testerDemo';

const comList = Object.keys(testSuiteByName).map(testSuiteName => {
  return {
    name: testSuiteName,
    com: testSuiteByName[testSuiteName as keyof typeof testSuiteByName],
  };
});
// @ts-ignore
comList.sort((a, b) => {
  // return a.name.localeCompare(b.name);
  return a - b;
});

function DraxDemo() {
  return (
    <View style={{backgroundColor: 'black'}}>
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
export default DraxDemo;



export const displayName = 'react-native-drax';
export const framework = 'React';
export const category = 'basic';
export const title = 'react-native-drax';
export const documentationURL = 'https://gitee.com/react-native-oh-library/usage-docs/blob/master/zh-cn/react-native-drax.md';
export const description = 'react-native-drax';

export const examples = [
    {
        title: 'react-native-drax',
        render: function (): any {
            return <DraxDemo />;
        },
    },
];
