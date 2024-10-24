import * as React from 'react';
import { Text } from 'react-native';
import VersionNumber from 'react-native-version-number';
import { Tester, TestCase } from '@rnoh/testerino';

export default  function NativeVersionNumberDemo () {
  return (
    <Tester>
      <TestCase itShould='应用程序版本：appVersion'>Demo
        <Text>appVersion:{VersionNumber.appVersion}</Text>
      </TestCase>
      <TestCase itShould='构建版本：buildVersion'>
        <Text>buildVersion:{VersionNumber.buildVersion}</Text>
      </TestCase>
      <TestCase itShould='应用标识：bundleIdentifier'>
        <Text>bundleIdentifier:{VersionNumber.bundleIdentifier}</Text>
      </TestCase>
    </Tester>
  );
};

export const displayName = "ReactNativeVersionNumber";
export const framework = "React";
export const category = "UI";
export const title = "react-native-version-number";
export const documentationURL = "https://github.com/react-native-oh-library/react-native-version-number";
export const description = "React Native Version Number";

export const examples = [
  {
    title: "react-native-version-number",
    render: function (): any {
      return <NativeVersionNumberDemo />;
    },
  },
];