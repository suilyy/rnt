import React, { useState } from 'react';
import {
    Text,
    TouchableOpacity,
    View,
    TextInput,
    ScrollView,
    StyleSheet,
    Image,
    Button
} from 'react-native';
import {
    Tester,
    TestSuite,
    TestCase
} from '@rnoh/testerino';
import VectorDrawable from "react-native-vector-drawable";
const App = () => 
{
    const source = require('../../assets/react-native-community-hooks.jpg')
    return (
        <Tester style={{ flex: 1 }}>
            <TestSuite name="vectordrawable">
                <TestCase itShould="drawable base" tags={['Se_Ra']}
                >
                    <ScrollView>
                        <Text>对标源库IOS开发，此处空白属于正常</Text>
                        <VectorDrawable
                            resourceName="ic_drawable_name"
                            style={{ width: 50, height: 50, tintColor: 'blue' }}
                        />
                    </ScrollView>
                </TestCase>
                <TestCase itShould="drawable 文本" tags={['Se_Ra']}
                >
                    <VectorDrawable
                        resourceName="ic_drawable_name"
                        style={{ width: 80, height: 80, backgroundColor: 'red' }}
                    >
                        <Text>width:80 height:80</Text>
                        <Text>背景：red</Text>
                    </VectorDrawable>
                </TestCase>
                <TestCase itShould="drawable 嵌套图片" tags={['Se_Ra']}
                >
                    <VectorDrawable
                        resourceName="ic_drawable_name"
                    >
                        <Image
                            style={{ width: 100, height: 100, margin: 4, borderRadius: 8 }}
                            source={source}
                        />
                    </VectorDrawable>
                </TestCase>
            </TestSuite>
        </Tester>
    );
}

export const displayName = 'App';
export const framework = 'React';
export const category = 'UI';
export const title = 'react-native-vector-drawable';
export const documentationURL = 'https://github.com/react-native-oh-library/react-native-vector-drawable';
export const description = 'React Native Vector Drawable.';

export const examples = [
  {
    title: 'React Native Vector Drawable',
    render: function (): any {
      return <App />;
    },
  },
];