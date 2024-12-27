import React from 'react';
import { ScrollView, StyleSheet, View, Text, SafeAreaView } from 'react-native';
import { NavigationContainer, Page } from './Navigation';
import { PortalHost, PortalProvider } from '@gorhom/portal';
import {AutoHeightWebViewwDemo} from "./AutoHeightTest"
import ScrollViewD from "./ScrollZoom"



function AppTest() {
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <NavigationContainer>
                <PortalProvider>
                    <Page name='EXAMPLE: AutoHeightWebViewwDemo'>
                        <AutoHeightWebViewwDemo />
                    </Page>
                    <Page name='EXAMPLE: ScrollViewD'>
                        <ScrollViewD />
                    </Page>
                    
                </PortalProvider>
            </NavigationContainer>
        </SafeAreaView>
    );
}

export default AppTest;



export const displayName = 'react-native-autoheight-webview';
export const framework = 'React';
export const category = 'basic';
export const title = 'react-native-autoheight-webview';
export const documentationURL = 'https://gitee.com/react-native-oh-library/usage-docs/blob/master/zh-cn/react-native-autoheight-webview.md';
export const description = 'react-native-autoheight-webview';

export const examples = [
    {
        title: 'react-native-autoheight-webview',
        render: function (): any {
            return <AppTest />;
        },
    },
];
