/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @format
 * @flow strict-local
 */

'use strict';

import React, { useEffect, useRef, useState } from 'react';

const { Alert, Button, View, Text, StyleSheet, ScrollView, Image } = require('react-native');

const ButtonProps = () => {
  const [pressColor, setPressColor] = useState('rgb(33, 150, 243)');
  const [pressDisabledColor, setPressDisabledColor] = useState('rgb(33, 150, 243)');
  const [pressDisabledColor1, setPressDisabledColor1] = useState('rgb(33, 150, 243)');

  const press = e => {
    pressColor == 'rgb(33, 150, 243)'
      ? setPressColor('#f194ff')
      : setPressColor('rgb(33, 150, 243)');
  };
  const disabledPress = e => {
    pressDisabledColor == 'rgb(33, 150, 243)'
      ? setPressDisabledColor('#f194ff')
      : setPressDisabledColor('rgb(33, 150, 243)');
  };
  const disabledPress1 = e => {
    pressDisabledColor1 == 'rgb(33, 150, 243)'
      ? setPressDisabledColor1('#f194ff')
      : setPressDisabledColor1('rgb(33, 150, 243)');
  };
  return (
    <ScrollView style={{ flex: 1 }}>
      <View style={{ flex: 1, alignItems: 'center' }}>
        <View style={styles.viewProps}>
          <Text>1.title属性：显示在按钮内的文本。在 Android 上，给定的标题将转换为大写形式。</Text>
          <Text>2.onPress方法：当用户点击按钮时调用的处理程序。</Text>
          <Text>3.color方法：文本的颜色(iOS)，或是按钮的背景色(Android)。</Text>
          <Text>4.testID方法：用来在端到端测试中定位此视图。</Text>
          <Text>说明：点击按钮切换颜色。color初始值为rgb(33, 150, 243)，点击后切换成#f194ff</Text>
          <View>
            <Text>预期效果：</Text>
            <Image style={{ width: 298 }} source={require('../../assets/button1.png')} />
          </View>
          <View>
            <Text>实际效果：</Text>
            <View>
              <Button
                title="pressChangeColor"
                onPress={press}
                color={pressColor}
                testID="Press me"
              />
            </View>
          </View>
        </View>

        <View style={styles.viewProps}>
          <Text>5.disabled属性：如果设为 true，则禁止此组件的一切交互。</Text>
          <Text>
            说明：如果属性值为true则按钮置灰点击无效。反之点击按钮切换颜色。color初始值为rgb(33,
            150, 243)，点击后切换成#f194ff
          </Text>
          <View style={{ marginTop: 10 }}>
            <View style={{ flexDirection: 'row' }}>
              <Text style={{ marginLeft: 7 }}>属性值</Text>
              <Text style={{ marginLeft: 40 }}>预期效果</Text>
              <Text style={{ marginLeft: 65 }}>实际效果</Text>
            </View>
          </View>
          <View style={{ flexDirection: 'row', flex: 1, justifyContent: 'space-around' }}>
            <Text style={{ marginTop: 10, marginBottom: 10 }}>true</Text>
            <Image
              style={{ marginTop: 8, marginLeft: 10 }}
              source={require('../../assets/button-disabled.png')}
            />
            <View style={{ width: 100, marginTop: 9 }}>
              <Button
                title="pressDisabled1"
                onPress={disabledPress}
                color={pressDisabledColor}
                disabled={true}
              />
            </View>
          </View>
          <View style={{ flexDirection: 'row', flex: 1, justifyContent: 'space-around' }}>
            <Text style={{ marginTop: 10, marginBottom: 10 }}>false</Text>
            <Image
              style={{ marginTop: 8, marginLeft: 10 }}
              source={require('../../assets/button-disabled1.png')}
            />
            <View style={{ width: 100, marginTop: 9 }}>
              <Button
                title="点击"
                onPress={disabledPress1}
                color={pressDisabledColor1}
                disabled={false}
              />
            </View>
          </View>
        </View>

        <View style={styles.viewProps}>
          <Text>
            6.accessibilityLabel属性：用于给残障人士显示的文本（比如读屏应用可能会读取这一内容）。
          </Text>
          <Text>
            7.accessibilityLanguage属性：通过使用 accessibilityLanguage
            属性，屏幕阅读器将了解在阅读元素的 标签、值 和 提示
            时要使用哪种语言。提供的字符串值必须遵循 BCP 47 规范。
          </Text>
          <Text>accessibilityLabel属性值："Press to submit your application!"</Text>
          <Text>accessibilityLanguage属性值："it-IT"</Text>
          <View>
            <Text>预期效果：</Text>
            <Image style={{ width: 298 }} source={require('../../assets/button1.png')} />
          </View>
          <View>
            <Text>实际效果：</Text>
            <View>
              <Button
                title="点击"
                onPress={() => {}}
                accessibilityLabel="Press to submit your application!"
                accessibilityLanguage="it-IT"
              />
            </View>
          </View>
        </View>

        <View style={styles.viewProps}>
          <Text>
            8.accessibilityActions属性：辅助功能操作允许辅助技术以编程方式调用组件的操作。
          </Text>
          <Text>9.onAccessabilityAction回调：实现onAccessabilityAction函数来处理动作请求</Text>
          <View>
            <Text>预期效果：</Text>
            <Image style={{ width: 298 }} source={require('../../assets/button1.png')} />
          </View>
          <View>
            <Text>实际效果：</Text>
            <View>
              <Button
                title="点击"
                onPress={() => {}}
                accessibilityActions={[
                  { name: 'cut', label: 'cut' },
                  { name: 'copy', label: 'copy' },
                  { name: 'paste', label: 'paste' },
                ]}
                onAccessibilityAction={event => {
                  switch (event.nativeEvent.actionName) {
                    case 'cut':
                      Alert.alert('Alert', 'cut action success');
                      break;
                    case 'copy':
                      Alert.alert('Alert', 'copy action success');
                      break;
                    case 'paste':
                      Alert.alert('Alert', 'paste action success');
                      break;
                  }
                }}
              />
            </View>
          </View>
        </View>

        <View style={styles.viewProps}>
          <Text>10.touchSoundDisabled属性：如果为true，则不在触摸时播放系统声音。</Text>
          <View style={{ marginTop: 10 }}>
            <View style={{ flexDirection: 'row' }}>
              <Text style={{ marginLeft: 7 }}>属性值</Text>
              <Text style={{ marginLeft: 40 }}>预期效果</Text>
              <Text style={{ marginLeft: 65 }}>实际效果</Text>
            </View>
          </View>
          <View style={{ flexDirection: 'row', flex: 1, justifyContent: 'space-around' }}>
            <Text style={{ marginTop: 10, marginBottom: 10 }}>true</Text>
            <Image
              style={{ marginTop: 8, marginLeft: 10 }}
              source={require('../../assets/button-disabled1.png')}
            />
            <View style={{ width: 100, marginTop: 9 }}>
              <Button title="点击" onPress={() => {}} touchSoundDisabled={true} />
            </View>
          </View>
          <View style={{ flexDirection: 'row', flex: 1, justifyContent: 'space-around' }}>
            <Text style={{ marginTop: 10, marginBottom: 10 }}>false</Text>
            <Image
              style={{ marginTop: 8, marginLeft: 10 }}
              source={require('../../assets/button-disabled1.png')}
            />
            <View style={{ width: 100, marginTop: 9 }}>
              <Button title="点击" onPress={() => {}} touchSoundDisabled={false} />
            </View>
          </View>
        </View>

        <View style={styles.viewProps}>
          <Text>
            11.hasTVPreferredFocus属性：用于设置按钮在 Apple TV 电视上是否默认选中（获得焦点）。
          </Text>
          <View style={{ marginTop: 10 }}>
            <View style={{ flexDirection: 'row' }}>
              <Text style={{ marginLeft: 7 }}>属性值</Text>
              <Text style={{ marginLeft: 40 }}>预期效果</Text>
              <Text style={{ marginLeft: 65 }}>实际效果</Text>
            </View>
          </View>
          <View style={{ flexDirection: 'row', flex: 1, justifyContent: 'space-around' }}>
            <Text style={{ marginTop: 10, marginBottom: 10 }}>true</Text>
            <Image
              style={{ marginTop: 8, marginLeft: 10 }}
              source={require('../../assets/button-disabled1.png')}
            />
            <View style={{ width: 100, marginTop: 9 }}>
              <Button title="点击" onPress={() => {}} hasTVPreferredFocus={true} />
            </View>
          </View>
          <View style={{ flexDirection: 'row', flex: 1, justifyContent: 'space-around' }}>
            <Text style={{ marginTop: 10, marginBottom: 10 }}>false</Text>
            <Image
              style={{ marginTop: 8, marginLeft: 10 }}
              source={require('../../assets/button-disabled1.png')}
            />
            <View style={{ width: 100, marginTop: 9 }}>
              <Button title="点击" onPress={() => {}} hasTVPreferredFocus={false} />
            </View>
          </View>
        </View>

        <View style={styles.viewProps}>
          <Text>12.nextFocusDown属性：指定用户向下导航时要接收焦点的下一个视图。</Text>
          <Text>属性值：3</Text>
          <View>
            <Text>预期效果：</Text>
            <Image style={{ width: 298 }} source={require('../../assets/button1.png')} />
          </View>
          <View>
            <Text>实际效果：</Text>
            <View>
              <Button title="点击" onPress={() => {}} nextFocusDown={3} />
            </View>
          </View>
        </View>

        <View style={styles.viewProps}>
          <Text>13.nextFocusForward属性：指定用户向前导航时要接收焦点的下一个视图。</Text>
          <Text>属性值：3</Text>
          <View>
            <Text>预期效果：</Text>
            <Image style={{ width: 298 }} source={require('../../assets/button1.png')} />
          </View>
          <View>
            <Text>实际效果：</Text>
            <View>
              <Button title="点击" onPress={() => {}} nextFocusForward={3} />
            </View>
          </View>
        </View>

        <View style={styles.viewProps}>
          <Text>14.nextFocusLeft属性：指定用户向左导航时要接收焦点的下一个视图。</Text>
          <Text>属性值：3</Text>
          <View>
            <Text>预期效果：</Text>
            <Image style={{ width: 298 }} source={require('../../assets/button1.png')} />
          </View>
          <View>
            <Text>实际效果：</Text>
            <View>
              <Button title="点击" onPress={() => {}} nextFocusLeft={3} />
            </View>
          </View>
        </View>

        <View style={styles.viewProps}>
          <Text>15.nextFocusRight属性：指定用户向右导航时要接收焦点的下一个视图。</Text>
          <Text>属性值：3</Text>
          <View>
            <Text>预期效果：</Text>
            <Image style={{ width: 298 }} source={require('../../assets/button1.png')} />
          </View>
          <View>
            <Text>实际效果：</Text>
            <View>
              <Button title="点击" onPress={() => {}} nextFocusRight={3} />
            </View>
          </View>
        </View>

        <View style={styles.viewProps}>
          <Text>16.nextFocusUp属性：指定用户向上导航时要接收焦点的下一个视图。</Text>
          <Text>属性值：3</Text>
          <View>
            <Text>预期效果：</Text>
            <Image style={{ width: 298 }} source={require('../../assets/button1.png')} />
          </View>
          <View>
            <Text>实际效果：</Text>
            <View>
              <Button title="点击" onPress={() => {}} nextFocusUp={3} />
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export const displayName = 'ButtonExample';
export const framework = 'React';
export const category = 'UI';
export const title = 'Button';
export const documentationURL = 'https://reactnative.dev/docs/button';
export const description = 'Simple React Native button component.';

export const examples = [
  {
    title: 'Button with default styling',
    render: function (): any {
      return <ButtonProps />;
    },
  },
];

const styles = StyleSheet.create({
  viewProps: {
    width: 300,
    marginBottom: 30,
    borderWidth: 1,
    borderColor: 'black',
    borderStyle: 'solid',
  },
  buttonFlexView: {
    flexDirection: 'row',
  },
});
