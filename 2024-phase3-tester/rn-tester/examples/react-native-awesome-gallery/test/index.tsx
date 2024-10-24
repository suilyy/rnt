import React from 'react';
import {
  SafeAreaView,
  StatusBar,
  View,
} from 'react-native';
import { NavigationContainer, Page } from '../components';
import * as exampleByName from './AwesomeGalleryTest';

const { TestCase, ...remainingExampleByName } = exampleByName;

function App() {
  return (
    <View>
      <StatusBar barStyle="light-content" />
      <SafeAreaView>
        <NavigationContainer>
          {
            Object.keys(TestCase).map(key => {
              let Example = remainingExampleByName[key];
              return (
                <Page key={key} name={TestCase[key]}>
                  <Example />
                </Page>
              );
            })
          }
        </NavigationContainer>
      </SafeAreaView>
    </View>
  );
}

export default App;

export const displayName = "ReactNativeAwesomeGallery";
export const framework = "React";
export const category = "UI";
export const title = "react-native-awesome-gallery";
export const documentationURL = "https://github.com/Flair-Dev/react-native-awesome-gallery";
export const description = "React Native Awesome Gallery";

export const examples = [
  {
    title: "react-native-awesome-gallery",
    render: function (): any {
      return <App />;
    },
  },
];
