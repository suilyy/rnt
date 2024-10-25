import React, {ReactElement} from 'react';
import {PhotoTestApp} from './Photo/App';
import {CodeScanTestApp} from './CodeScan/App';
import {VideoTestAPP} from './Video/APP';
import {TabNavigator} from '../components/TabNavigator';

const tabs = [
  {title: 'PhotoTestApp', content: <PhotoTestApp />},
  {title: 'CodeScanTestApp', content: <CodeScanTestApp />},
  {title: 'VideoTestAPP', content: <VideoTestAPP />},
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

