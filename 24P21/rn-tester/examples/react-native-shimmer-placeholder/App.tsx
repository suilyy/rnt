import React from "react";
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { NavigationContainer, Page } from "./components/Navigation";

import ContainPropTest from "./shimmer-placeholder/containPropTest";
import ShimmerPlaceholderTest from "./shimmer-placeholder/shimmerPlaceholderTest";

function App() {
  return (
    <View style={{ backgroundColor: "black" }}>
      <StatusBar barStyle="light-content" />
      <SafeAreaView>
        <NavigationContainer>
          <View id="__harmony::ready" />
          <Page name="ContainPropTest">
            <ContainPropTest />
          </Page>
          <Page name="ShimmerPlaceholderTest">
            <ShimmerPlaceholderTest />
          </Page>
        </NavigationContainer>
      </SafeAreaView>
    </View>
  );
}

export default App;

// 使用 export 导出
export const displayName = "ShimmerPlaceholderExample";
export const framework = "React";
export const category = "UI";
export const title = "react-native-shimmer-placeholder";
export const documentationURL = "https://github.com/tomzaku/react-native-shimmer-placeholder";
export const description = "Simple React Native shimmer placeholder component.";

export const examples = [
  {
    title: "Shimmer placeholder with default styling",
    render: function (): any {
      return <App />;
    },
  },
];
