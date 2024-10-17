import React, { ReactElement } from 'react';
import { PhotoTest } from './Photo/PhotoTest';
import { CodeScanTest } from './CodeScan/CodeScanTest';
import { VideoTest } from './Video/VideoTest';
import { NavigationContainer, Page } from './components/Navigation';
import { View } from 'react-native';

export const VisionCameraExampleApp = (): ReactElement => {
  return (
    <View>
      <NavigationContainer>
        <Page name={`PhotoTest`}>
          <PhotoTest />
        </Page>
        <Page name={`CodeScanTest`}>
          <CodeScanTest />
        </Page>
        <Page name={`VideoTest`}>
          <VideoTest />
        </Page>
      </NavigationContainer>
    </View>
  );
};

export default {
  displayName: 'react-native-vision-camera_test_app',
  framework: 'React',
  category: 'UI',
  title: 'react-native-vision-camera',
  documentationURL: 'https://github.com/react-native-oh-library/react-native-vision-camera',
  description: 'React Native Vision Camera',
  examples: [
    {
      title: 'react-native-vision-camera',
      render: function (): any {
        return <VisionCameraExampleApp />;
      },
    },
  ],
};
