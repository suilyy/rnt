import {Button, SafeAreaView } from 'react-native';
import IdleTimerManager from '@react-native-oh-tpl/react-native-idle-timer';
import { Tester, TestSuite, TestCase } from '@rnoh/testerino';
import React from 'react';
// export default IdleTimerExample;
 const IdleTimerTest=()=>{
    return <SafeAreaView>
      <Tester>
      <TestSuite name="test idle_timer">
        <TestCase itShould="keep screen on">
          <Button title="Disable Idle Timer" onPress={()=>{alert('Idle timer disabled');IdleTimerManager.setIdleTimerDisabled(true);}} />
        </TestCase>
        <TestCase itShould="keep screen off">
          <Button title="Enable Idle Timer" onPress={()=>{alert('Idle timer enabled');IdleTimerManager.setIdleTimerDisabled(false);}} />
        </TestCase>
      </TestSuite>
    </Tester>
    </SafeAreaView>
};

export default IdleTimerTest;


export const displayName = 'ReactNativeIdleTimer';
export const framework = 'React';
export const category = 'UI';
export const title = 'react-native-idle-timer';
export const documentationURL = 'https://reactnative.dev/docs/button';
export const description = 'React Native Idle Timer';

export const examples = [
  {
    title: 'react-native-idle-timer',
    render: function (): any {
      return <IdleTimerTest />;
    },
  },
];