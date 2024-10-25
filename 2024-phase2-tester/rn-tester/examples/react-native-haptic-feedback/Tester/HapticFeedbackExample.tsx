import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  Button
} from 'react-native';
import { TestSuite, Tester, TestCase } from '@rnoh/testerino'
import ReactNativeHapticFeedback from 'react-native-haptic-feedback'
const options = {
  enableVibrateFallback: false,
  ignoreAndroidSystemSettings: false,
};


const methods = ['impactLight', 'impactMedium', 'impactHeavy', 'notificationSuccess', 'notificationWarning', 'notificationError', 'rigid', 'soft',
  'selection','clockTick','contextClick','keyboardPress','keyboardRelease','keyboardTap','longPress','textHandleMove','virtualKey','virtualKeyRelease',
  'effectClick', 'effectDoubleClick', 'effectHeavyClick', 'effectTick'
]

export const HapticFeedbackExample = () => {
  return (
    <SafeAreaView>
    <ScrollView>
    <Tester>
      <TestSuite name='HapticFeedbackDemo'>
        
          {
            methods.map(item => {
              return <TestCase itShould={`Trigger ${item} haptic feedback`} tags={['C_API']} key={item}>
                <Button title={item} onPress={()=>ReactNativeHapticFeedback?.trigger(item,options)}></Button>
              </TestCase>
            })
          }
          
      </TestSuite>
    </Tester>
    </ScrollView>
    </SafeAreaView>
  );
}

// 使用 export 导出
export const displayName = "HapticFeedbackExample";
export const framework = "React";
export const category = "Basic";
export const title = "react-native-haptic-feedback";
export const documentationURL = "https://github.com/react-native-oh-library/react-native-haptic-feedback";
export const description = "Simple React Native haptic feedback component.";

export const examples = [
  {
    title: "Haptic feedback with default styling",
    render: function (): any {
      return <HapticFeedbackExample />;
    },
  },
];
