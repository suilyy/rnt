import React, { Component, useCallback } from 'react';
import {
    StyleSheet,
    View,
    Platform,
    StatusBar,
} from 'react-native';
import { SafeAreaProvider, SafeAreaView, initialWindowMetrics } from '@react-native-oh-tpl/react-native-safe-area-context';

import { Router } from "./reactNativeShared/components";
import { Tests } from "./reactNativeShared/tests";
import { TestsScreen } from "./reactNativeShared/screens/TestsScreen";

const TEST_ANDROID_STATUSBAR_OFFSET = false;

if (Platform.OS === "android") {
    StatusBar.setTranslucent(!TEST_ANDROID_STATUSBAR_OFFSET);
    StatusBar.setBackgroundColor("transparent");
}
function ReactNavigationSharedElementDemo() {
    return (
        <View style={[styles.container]}>
            <SafeAreaProvider initialMetrics={initialWindowMetrics}>
                <SafeAreaView style={{ flex: 1 }}>
                    <View style={{ flex: 1, marginTop: 0, transform: [{ translateY: 0 }] }}>
                        <Router initialNode={<TestsScreen tests={Tests} />} />
                    </View>
                </SafeAreaView>
            </SafeAreaProvider>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 15,
    }
});

// 或者使用 export default 导出
export const displayName = 'ReactNavigationSharedElementDemo';
export const framework = 'React';
export const category = 'UI';
export const title = 'react-navigation-shared-element';
export const documentationURL = 'https://github.com/IjzerenHein/react-navigation-shared-element';
export const description = 'React Native Navigation shared element';

export const examples = [
  {
    title: 'React Native Navigation',
    render: function (): any {
      return <ReactNavigationSharedElementDemo />;
    },
  },
];
