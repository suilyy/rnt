import React from 'react';
import {View} from 'react-native';
import {NavigationContainer, Page} from './components/Navigation';
import * as testSuiteByName from './App';

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

export function CreditCardDemo() {
  return (
    <View style={{backgroundColor: 'black'}}>
      <NavigationContainer>
        {Object.entries(testSuiteByName).map(([Name, Comp]) => {
          return (
            <Page key={Name} name={Name}>
              <Comp />
            </Page>
          );
        })}
      </NavigationContainer>
    </View>
  );
}
export default CreditCardDemo;

// 使用 export 导出
export const displayName = "CreditCardExample";
export const framework = "React";
export const category = "UI";
export const title = "react-native-credit-card-input";
export const documentationURL = "https://github.com/react-native-oh-library/react-native-credit-card-input";
export const description = "Simple React Native credit card input component.";

export const examples = [
  {
    title: "Credit card input with default styling",
    render: function (): any {
      return <CreditCardDemo />;
    },
  },
];