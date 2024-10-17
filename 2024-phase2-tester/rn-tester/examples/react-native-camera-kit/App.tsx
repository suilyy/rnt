import React from 'react';
import { View } from 'react-native';
import { ScanCodeTestApp } from './scanCode/App';
import { CameraTestApp } from './camera/App';
import { NavigationContainer, Page } from './components/Navigation';

export function CameraKitTestApp() {
  return (
    <View>
      <NavigationContainer>
        <Page name={`ScanCodeTestApp`}>
          <ScanCodeTestApp />
        </Page>
        <Page name={`CameraTestApp`}>
          <CameraTestApp />
        </Page>
      </NavigationContainer>
    </View>
  );
}

export default {
  displayName: 'react-native-camera-kit_test_app',
  framework: 'React',
  category: 'UI',
  title: 'react-native-camera-kit',
  documentationURL: 'https://reactnative.dev/docs/text',
  description: 'React Native Camera Kit',
  examples: [
    {
      title: 'react-native-camera-kit',
      render: function (): any {
        return <CameraKitTestApp />;
      },
    },
  ],
};
