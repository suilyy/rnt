import React from 'react';
import { ScrollView, StyleSheet, View, Text, SafeAreaView } from 'react-native';
import { NavigationContainer, Page } from './Navigation';
import { PortalHost, PortalProvider } from '@gorhom/portal';
import BlobTest from "./BlobTest"
import BlobFetch from "./BlobFetch"



function AppTest() {
    return (
        
        <SafeAreaView style={{ flex: 1 }}>
            <NavigationContainer>
                <PortalProvider>
                    <Page name='EXAMPLE: BlobTest'>
                        <BlobTest />
                    </Page>
                    <Page name='EXAMPLE: BlobFetch'>
                        <BlobFetch />
                    </Page>
                    
                </PortalProvider>
            </NavigationContainer>
        </SafeAreaView>
    );
}

export default AppTest;

export const displayName = 'react-native-blob-util';
export const framework = 'React';
export const category = 'UI';
export const title = 'react-native-blob-util';
export const documentationURL = 'https://gitee.com/react-native-oh-library/usage-docs/blob/master/zh-cn/react-native-blob-util.md';
export const description = 'react-native-blob-util';

export const examples = [
    {
        title: 'react-native-blob-util',
        render: function (): any {
            return <AppTest />;
        },
    },
];

