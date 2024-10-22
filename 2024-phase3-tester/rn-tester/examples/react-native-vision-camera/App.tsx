import React, {ReactElement} from 'react';
import {PhotoTest} from './Photo/PhotoTest';
import {CodeScanTest} from './CodeScan/CodeScanTest';
import {VideoTest} from './Video/VideoTest';
import {TabNavigator} from './components/TabNavigator';

const tabs = [
  {title: 'PhotoTest', content: <PhotoTest />},
  {title: 'CodeScanTest', content: <CodeScanTest />},
  {title: 'VideoTest', content: <VideoTest />},
];

export const VisionCameraExampleApp = (): ReactElement => {
  return <TabNavigator tabs={tabs} />;
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
