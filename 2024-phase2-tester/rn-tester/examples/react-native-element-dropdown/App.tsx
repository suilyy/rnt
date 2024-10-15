import React from 'react';
import { View } from 'react-native';
import { NavigationContainer, Page } from '../../components';
import { DropdownTest } from './examples/DropdownTest';
import { MultiSelectTest } from './examples/MultiSelectTest';
import { SelectCountryTest } from './examples/SelectCountryTest';

export function ElementDropdownTestApp() {
  return (
    <View >
      <NavigationContainer>
        <Page name={`DropdownTest`}>
          <DropdownTest />
        </Page>
        <Page name={`MultiSelectTest`}>
          <MultiSelectTest />
        </Page>
        <Page name={`SelectCountryTest`}>
          <SelectCountryTest />
        </Page>
      </NavigationContainer>
    </View>
  );
}

export default {
  displayName: 'react-native-element-dropdown_test_app',
  framework: 'React',
  category: 'UI',
  title: 'react-native-element-dropdown',
  documentationURL: 'https://github.com/hoaphantn7604/react-native-element-dropdown',
  description: 'React Native Element Dropdown',
  examples: [
    {
      title: 'react-native-element-dropdown',
      render: function (): any {
        return <ElementDropdownTestApp />;
      },
    },
  ],
};
