import React from 'react';
import { ScrollView, View } from 'react-native';
import { Page ,NavigationContainer} from '../../../components';
import { Tester } from '@rnoh/testerino';
import { Tooltip,Provider } from '@ant-design/react-native';
import  ProgressBarTest  from './ProgressBarTest'
import  ProgressCircleSnailTest  from './ProgressCircleSnailTest'
import  ProgressCircleTest  from './ProgressCircleTest'
import  ProgressPieTest  from './ProgressPieTest'
import  ProgressVerifying  from './progressVerifying'


export function ProgressTest() {
    return (
        <Provider>
            <NavigationContainer>
                <ScrollView {...Tooltip.scrollProps} keyboardShouldPersistTaps="always" style={{ backgroundColor: 'black' }}>
                    <Tester style={{ paddingTop: 40, paddingBottom: 40 }}>
                        <Page name='1.ProgressBarTest'><ProgressBarTest /></Page>
                        <Page name='2.ProgressCircleSnailTest'><ProgressCircleSnailTest /></Page>
                        <Page name='3.ProgressCircleTest'><ProgressCircleTest /></Page>
                        <Page name='4.ProgressPieTest'><ProgressPieTest /></Page>
                        <Page name='5.ProgressVerifying'><ProgressVerifying /></Page>
                    </Tester>
                </ScrollView>
            </NavigationContainer>
        </Provider>
    )
}


export const displayName = 'react-native-progress';
export const framework = 'React';
export const category = 'basic';
export const title = 'react-native-progress';
export const documentationURL = 'https://gitee.com/react-native-oh-library/usage-docs/blob/master/zh-cn/react-native-progress.md';
export const description = 'react-native-progress';

export const examples = [
    {
        title: 'react-native-progress',
        render: function (): any {
            return <ProgressTest />;
        },
    },
];