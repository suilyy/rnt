
import { Tester, TestSuite, TestCase } from '@rnoh/testerino';
import { NavigationContainer, Page } from "./navitagiton"
import {ScrollView } from 'react-native';
import MMKVStorageTest from './MMKVStorageTest'
import MyComponent from './MMKVUseIndexTest';

export const MMKVDemo = () => {
  return (
    <Tester>
      <TestCase tags={['C_API']} itShould="material-ui">
      
        <NavigationContainer>
          <Page name="MMKVStorageTest">
            <MMKVStorageTest />
          </Page>
          <Page name="MMKVUseIndexTest">
            <MyComponent />
          </Page>
        </NavigationContainer>
      </TestCase>
    </Tester>
  )
}


// 使用 export 导出
export const displayName = "MMKVStorageExample";
export const framework = "React";
export const category = "Basic";
export const title = "react-native-mmkv-storage";
export const documentationURL = "https://github.com/react-native-oh-library/react-native-mmkv-storage";
export const description = "Simple React Native  mmkv storage.";

export const examples = [
  {
    title: "react-native-mmkv-storage",
    render: function (): any {
      return <MMKVDemo />;
    },
  },
];