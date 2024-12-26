/**
 *
 * 入口文件
 */
import React from 'react';
import { SafeAreaView, ScrollView, View } from 'react-native';

import * as testSuiteByName from './examples/index';

import { NavigationContainer, Page } from './components/Navigation';

export function CountryPickerTestApp() {
  return (
    <View style={{ backgroundColor: 'black' }}>
      <SafeAreaView>
        <NavigationContainer>
          {Object.keys(testSuiteByName).map(testSuiteName => {
            const TestSuite = testSuiteByName[testSuiteName as keyof typeof testSuiteByName];
            return (
              <Page key={testSuiteName} name={`${testSuiteName.replace('Test', '')}`}>
                <View style={{ flex: 1 }}>
                  <ScrollView style={{ flex: 1 }}>
                    <TestSuite key={testSuiteName} />
                  </ScrollView>
                </View>
              </Page>
            );
          })}
          <Page name={`占位符1`}>
            <View style={{ flex: 1 }}></View>
          </Page>
          <Page name={`占位符2`}>
            <View style={{ flex: 1 }}></View>
          </Page>
        </NavigationContainer>
      </SafeAreaView>
    </View>
  );
}

export default {
  displayName: 'react-native-country-picker-modal_test_app',
  framework: 'React',
  category: 'UI',
  title: 'react-native-country-picker-modal',
  documentationURL: 'https://github.com/react-native-oh-library/react-native-country-picker-modal',
  description: 'React Native Country Picker Modal',
  examples: [
    {
      title: 'react-native-country-picker-modal',
      render: function (): any {
        return <CountryPickerTestApp />;
      },
    },
  ],
};
