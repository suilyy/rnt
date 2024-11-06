import React from "react";
import { View, ScrollView } from "react-native";
import { Tester } from "@rnoh/testerino";
import { NavigationContainer, Page } from "./components/Navigation";
import GitHubExample from "./GitHubExample";
// // 在 ./src/screens/componentScreens/index.js 中导出的组件均为测试demo，没有导出则不是, 例如TextScreen、ViewScreen等
// import { TextScreen, ViewScreen } from './src/screens/componentScreens';
// // 在 ./src/screens/incubatorScreens/index.js 中导出的组件均为测试demo，没有导出则不是, 例如IncubatorToastScreen、IncubatorSliderScreen等
// import { IncubatorToastScreen, IncubatorSliderScreen} from './src/screens/incubatorScreens';
// // 在 ./src/screens/nativeComponentScreens/index.js 中导出的组件均为测试demo，没有导出则不是, 例如KeyboardTrackingViewScreen等
// import { KeyboardTrackingViewScreen, KeyboardAccessoryViewScreen } from './src/screens/nativeComponentScreens';

import * as ComponentScreens from "./src/screens/componentScreens/index";
import * as IncubatorScreens from "./src/screens/incubatorScreens/index";
import * as NativeComponentScreens from "./src/screens/nativeComponentScreens/index";

const App = () => {
  // 入口文件，替换成不同的测试Demo组件
  // 如：
  // return <TextScreen />
  return (
    <NavigationContainer>
      <Page name="GitHubExample">
        <Tester style={{ flex: 1 }}>
          <GitHubExample />
        </Tester>
      </Page>
      {Object.keys(ComponentScreens).map((testSuiteName) => {
        const TestSuite =
          ComponentScreens[testSuiteName as keyof typeof ComponentScreens];
        return (
          // <Tester style={{flex: 1}}>
          <Page
            key={testSuiteName}
            name={`${testSuiteName.replace("Screen", "")}`}
          >
            <Tester style={{ flex: 1 }}>
              <ScrollView>
                <TestSuite key={testSuiteName} componentId={testSuiteName} />
              </ScrollView>
            </Tester>
          </Page>
          // </Tester>
        );
      })}
      {Object.keys(IncubatorScreens).map((testSuiteName) => {
        const TestSuite =
          IncubatorScreens[testSuiteName as keyof typeof IncubatorScreens];
        return (
          <Page
            key={testSuiteName}
            name={`${testSuiteName.replace("Screen", "")}`}
          >
            <Tester style={{ flex: 1 }}>
              <ScrollView>
                <TestSuite key={testSuiteName} />
              </ScrollView>
            </Tester>
          </Page>
        );
      })}
      {Object.keys(NativeComponentScreens).map((testSuiteName) => {
        const TestSuite =
          NativeComponentScreens[
            testSuiteName as keyof typeof NativeComponentScreens
          ];
        return (
          <Page
            key={testSuiteName}
            name={`${testSuiteName.replace("Screen", "")}`}
          >
            <TestSuite key={testSuiteName} />
          </Page>
        );
      })}
    </NavigationContainer>
  );
};

export default App;

// 使用 export 导出
export const displayName = "UILibExample";
export const framework = "React";
export const category = "UI";
export const title = "react-native-ui-lib";
export const documentationURL = "https://github.com/react-native-oh-library/react-native-ui-lib";
export const description = "Simple React Native ui lib component.";

export const examples = [
  {
    title: "UI lib with default styling",
    render: function (): any {
      return <App />;
    },
  },
];
