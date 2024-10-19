import React from 'react';
import {SafeAreaView, Text, StatusBar, View} from 'react-native';
import {NavigationContainer, Page} from '../../components';
import {PortalHost, PortalProvider} from '@gorhom/portal';
import ScrollViewProps from './ScrollViewProps';
import KeyboardAvoidingViewProps from './keyboardAvoidingViewProps';
import KeyboardOffset from './keyboardOffset';
import MultilineInputStyle from './multilineInputStyle';
import SupportHardwareKeyboard from './supportHardwareKeyboard';
import TopOffset from './topOffset';
import UseAnimatedScrollView from './useAnimatedScrollView';

// 该demo依赖 @gorhom/portal， 请先 npm i @gorhom/portal@1.0.14

function Example() {
  return (
    <>
      <View style={{backgroundColor: 'white'}}>
        <StatusBar barStyle="light-content" />
        <SafeAreaView>
          <NavigationContainer>
            <PortalProvider>
              <View id="__harmony::ready" />

              <Page name="ScrollViewProps">
                <ScrollViewProps />
              </Page>
              <Page name="KeyboardAvoidingViewProps">
                <KeyboardAvoidingViewProps />
              </Page>
              <Page name="KeyboardOffset">
                <KeyboardOffset />
              </Page>
              <Page name="MultilineInputStyle">
                <MultilineInputStyle />
              </Page>
              <Page name="SupportHardwareKeyboard">
                <SupportHardwareKeyboard />
              </Page>
              <Page name="TopOffset">
                <TopOffset />
              </Page>
              <Page name="UseAnimatedScrollView">
                <UseAnimatedScrollView />
              </Page>
            </PortalProvider>
          </NavigationContainer>
        </SafeAreaView>
      </View>
    </>
  );
}

export default Example;


export const displayName = 'react-native-input-scroll-view';
export const framework = 'React';
export const category = 'UI';
export const title = 'react-native-input-scroll-view';
export const documentationURL = 'https://gitee.com/react-native-oh-library/usage-docs/blob/master/zh-cn/react-native-input-scroll-view.md';
export const description = 'react-native-input-scroll-view';

export const examples = [
  {
    title: 'react-native-input-scroll-view',
    render: function (): any {
      return <Example />;
    },
  },
];