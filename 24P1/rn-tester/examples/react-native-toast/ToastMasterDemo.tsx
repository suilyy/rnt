import React, { Component } from 'react';
import { Text, View, Button } from 'react-native';
import Toast from '@remobile/react-native-toast';

function ToastMasterDemo() {
  return (
    <View style={{ flex: 2, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Tosat !</Text>
      <Button
        title={'show toast'}
        onPress={() => {
          Toast.show('This is a toast.');
        }}
      />
      <Button
        title={'short top toast'}
        onPress={() => {
          Toast.showShortTop('This is a top toast.');
        }}
      />
      <Button
        title={'short center toast'}
        onPress={() => {
          Toast.showShortCenter('This is a center toast.');
        }}
      />
      <Button
        title={'short bottom toast'}
        onPress={() => {
          Toast.showShortBottom('This is a bottom toast.');
        }}
      />
      <Button
        title={'long top toast'}
        onPress={() => {
          Toast.showLongTop('This is a long top toast.');
        }}
      />
      <Button
        title={'long center toast'}
        onPress={() => {
          Toast.showLongCenter('This is a long center toast.');
        }}
      />
      <Button
        title={'long bottom toast'}
        onPress={() => {
          Toast.showLongBottom('This is a long bottom toast.');
        }}
      />
    </View>
  );
}

//export default ToastMasterDemo;

export default {
  displayName: "ToastMasterDemo",
  framework: "React",
  category: "UI",
  title: "ToastMasterDemo",
  documentationURL: "https://gitee.com/react-native-oh-library/usage-docs/blob/master/zh-cn/remobile-react-native-toast.md",
  description: "弹框组件",
  examples: [
    {
      title: "remobile-react-native-toast",
      render: function (): any {
        return <ToastMasterDemo />;
      },
    },
  ],
};