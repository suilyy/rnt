import { ProgressBar } from '@react-native-community/progress-bar-android';
import { View, Button, Text, ScrollView } from 'react-native';
import { Tester, TestCase } from '@rnoh/testerino';
import React from 'react';
function ProgressBarExample() {

    return (
        <ScrollView>
            <Tester style={{ paddingBottom: 80 }}>
                <TestCase
                    itShould="animating: Whether to show the ProgressBar (true, the default) or hide it (false)."
                    initialState={true}
                    tags={['C_API']}
                    arrange={({ setState, state }) => {
                        return (
                            <View style={{ height: 100, padding: 20 }}>
                                <ProgressBar styleAttr="Horizontal" animating={state} />
                                <Button onPress={() => {
                                    setState(false)
                                }}
                                    title="change to animating : false" />
                            </View>
                        )
                    }}
                    assert={async ({ expect, state }) => {
                        expect(state).to.be.eq(false);
                    }}
                />
                <TestCase
                    itShould="color: Color of the progress bar."
                    initialState={'black'}
                    tags={['C_API']}
                    arrange={({ setState, state }) => {
                        return (
                            <View style={{ height: 100, padding: 20 }}>

                                {state === 'black' ?
                                    <ProgressBar styleAttr="Horizontal" color={'black'} /> : <></>}
                                {state === 'pink' ?
                                    <ProgressBar styleAttr="Horizontal" color={'pink'} /> : <></>}
                                <Button onPress={() => {
                                    setState('pink')
                                }}
                                    title="change to color: pink" />
                            </View>
                        )
                    }}
                    assert={async ({ expect, state }) => {
                        expect(state).to.be.eq('pink');
                    }}
                />
                <TestCase
                    itShould="indeterminate: If the progress bar will show indeterminate progress. Note that this can only be false if styleAttr is Horizontal, and requires a progress value."
                    initialState={true}
                    tags={['C_API']}
                    arrange={({ setState, state }) => {
                        return (
                            <View style={{ height: 100, padding: 20 }}>
                                {state === true ?
                                    <ProgressBar styleAttr="Horizontal" indeterminate={true} /> : <></>
                                }
                                {state === false ?
                                    <ProgressBar styleAttr="Horizontal" indeterminate={false} /> : <></>
                                }

                                <Button onPress={() => {
                                    setState(false)
                                }} title="change to indeterminate: false" />
                            </View>
                        )
                    }}
                    assert={async ({ expect, state }) => {
                        expect(state).to.be.eq(false);
                    }}
                />

                <TestCase
                    itShould="progress: The progress value (between 0 and 1)."
                    initialState={0.1}
                    tags={['C_API']}
                    arrange={({ setState, state }) => {
                        return (
                            <View style={{ height: 100, padding: 20 }}>
                                {state === 0.1 ?
                                    <ProgressBar styleAttr="Horizontal" progress={state} indeterminate={false} /> : <></>}
                                {state === 1 ?
                                    <ProgressBar styleAttr="Horizontal" progress={state} indeterminate={false} /> : <></>}
                                <Button onPress={() => {
                                    setState(1)
                                }} title="change to progress : 1" />

                            </View>
                        )
                    }}
                    assert={async ({ expect, state }) => {
                        expect(state).to.be.eq(1);
                    }}
                />
                <TestCase
                    itShould="styleAttr: Style of the ProgressBar."
                    initialState={'Normal'}
                    tags={['C_API']}
                    arrange={({ setState, state }) => {
                        return (
                            <View style={{ height: 150, padding: 20 }}>
                                <Text>{`current styleAttr ： ${state}`}</Text>
                                {state === 'Normal' ?
                                    <ProgressBar styleAttr="Normal" /> : <></>}
                                {state === "Horizontal" ?
                                    <ProgressBar styleAttr="Horizontal" /> : <></>}
                                <Button onPress={() => {
                                    setState("Horizontal")
                                }} title="change to styleAttr : Horizontal" />
                            </View>
                        )
                    }}
                    assert={async ({ expect, state }) => {
                        expect(state).to.be.eq("Horizontal");
                    }}
                />

            </Tester>
        </ScrollView>
    );
};

export const displayName = 'ProgressBarAndroid';
export const framework = 'React';
export const category = 'UI';
export const title = 'progress-bar-android';
export const documentationURL = 'https://gitee.com/react-native-oh-library/usage-docs/blob/master/zh-cn/react-native-community-progress-bar-android.md#https://gitee.com/link?target=https%3A%2F%2Fgithub.com%2Freact-native-oh-library%2Fprogress-bar-android';
export const description = 'react-native-community/progress-bar-android';

export const examples = [
    {
        title: 'react-native-community/progress-bar-android',
        render: function (): any {
            return <ProgressBarExample />;
        },
    },
];
