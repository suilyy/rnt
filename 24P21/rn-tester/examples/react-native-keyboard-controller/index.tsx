
import React, { useContext } from 'react';
import {
  SafeAreaView,
} from 'react-native';
import { NavigationContainer, Page } from './components/Navigation/Navigation';
import { KeyboardProvider } from "react-native-keyboard-controller";
import * as keyboardControllerExample from './examples/index'
function App() {
  return (
    <>
      <SafeAreaView style={{ flex: 1, backgroundColor: '#000' }}>
        <KeyboardProvider enabled={true} statusBarTranslucent={false} navigationBarTranslucent={false}>
          <NavigationContainer>
            {Object.entries(keyboardControllerExample).map(
              ([exampleName, Example]) => {
                return (
                  <Page key={exampleName} name={`EXAMPLE: ${exampleName}`}>
                    <Example />
                  </Page>

                );
              },
            )}
          </NavigationContainer>
        </KeyboardProvider>
      </SafeAreaView>
    </>

  );
}

export default App;

// 使用 export 导出
export const displayName = "KeyboardControllerExample";
export const framework = "React";
export const category = "UI";
export const title = "react-native-keyboard-controller";
export const documentationURL = "https://github.com/react-native-oh-library/react-native-keyboard-controller";
export const description = "Simple React Native keyboard controller component.";

export const examples = [
  {
    title: "react-native-keyboard-controller",
    render: function (): any {
      return <App />;
    },
  },
];