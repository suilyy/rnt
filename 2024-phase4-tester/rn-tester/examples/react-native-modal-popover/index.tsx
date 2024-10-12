import React from 'react';
import { ScrollView, View } from 'react-native';
import { Page ,NavigationContainer} from '../../components';
import { Tester } from '@rnoh/testerino';
import { Tooltip,Provider } from '@ant-design/react-native';
import { PopoverCenterExample } from './PopoverCenterExample'
import { PopoverControllerExample } from './PopoverControllerExample'
import { PopoverOnePopoverExample } from './PopoverOnePopoverExample'

export function ModalTest() {
    return (
        <Provider>
            <NavigationContainer>
                <ScrollView {...Tooltip.scrollProps} keyboardShouldPersistTaps="always" style={{ backgroundColor: 'black' }}>
                    <Tester style={{ paddingTop: 40, paddingBottom: 40 }}>
                        <Page name='1.PopoverCenterExample'><PopoverCenterExample /></Page>
                        <Page name='2.PopoverControllerExample'><PopoverControllerExample /></Page>
                        <Page name='3.PopoverOnePopoverExample'><PopoverOnePopoverExample /></Page>
                    </Tester>
                </ScrollView>
            </NavigationContainer>
        </Provider>
    )
}


export const displayName = 'react-native-modal-popover';
export const framework = 'React';
export const category = 'basic';
export const title = 'react-native-modal-popover';
export const documentationURL = 'https://gitee.com/react-native-oh-library/usage-docs/blob/master/zh-cn/react-native-modal-popover.md';
export const description = 'react-native-modal-popover';

export const examples = [
    {
        title: 'react-native-modal-popover',
        render: function (): any {
            return <ModalTest />;
        },
    },
];