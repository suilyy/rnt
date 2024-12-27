import React from 'react';
import {View} from 'react-native';
import {NavigationContainer, Page} from './Navigation';
import * as CompByNames from './components';

function AppTest() {
  return (
    <View style={{backgroundColor: 'black', paddingBottom: 70}}>
    <NavigationContainer>
      {Object.entries(CompByNames).map(([Name, Comp]) => {
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

export const displayName = 'KeyboardAwareScrollView';
export const framework = 'React';
export const category = 'UI';
export const title = 'KeyboardAwareScrollView';
export const documentationURL = 'https://reactnative.dev/docs/button';
export const description = 'React Native Keyboard Aware ScrollView.';

export const examples = [
  {
    title: 'React Native KeyboardAwareScrollView',
    render: function (): any {
      return <AppTest />;
    },
  },
];